import { Suspense, useEffect, useMemo, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import type { EventManager } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import {
    EffectComposer,
    DepthOfField,
    Bloom,
    SSAO,
    BrightnessContrast,
    HueSaturation,
    ChromaticAberration,
    Noise,
    Vignette,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import {
    Box3,
    MathUtils,
    Vector2,
    Vector3,
    PCFSoftShadowMap,
    ACESFilmicToneMapping,
    SRGBColorSpace,
} from 'three'
import { scrollProgress } from '@/lib/scrollProgress'

const MODEL_URL = '/models/the-end/scene.gltf'
const DRACO_PATH = '/draco/'
const TARGET_SIZE = 30

// Titik bedrock/portal frame (hasil kalibrasi dari debug capture sebelumnya)
const FOCUS_POINT = new Vector3(0, 0, 0)

const ANGLE_START = -2.41
const ANGLE_SWEEP = 0.3
const RADIUS_NEAR = 2.6
const RADIUS_FAR = 3.4
const HEIGHT_START = 0.1
const HEIGHT_RISE = 0.4
const DAMP_LAMBDA = 1.6

const noEvents = (): EventManager<HTMLElement> => ({ enabled: false, priority: 0 })

function reducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
function isLowPower() {
    const cores = navigator.hardwareConcurrency ?? 8
    return cores <= 4 || window.matchMedia('(pointer: coarse)').matches
}

interface ModelProps { onReady: () => void }

function TheEndModel({ onReady }: ModelProps) {
    const { scene } = useGLTF(MODEL_URL, DRACO_PATH)
    const invalidate = useThree((s) => s.invalidate)

    const model = useMemo(() => {
        const root = scene.clone(true)
        const box = new Box3().setFromObject(root)
        const size = box.getSize(new Vector3())
        const center = box.getCenter(new Vector3())
        const maxDim = Math.max(size.x, size.y, size.z) || 1
        const scale = TARGET_SIZE / maxDim

        root.scale.setScalar(scale)
        root.position.set(-center.x * scale, -center.y * scale, -center.z * scale)

        root.traverse((child: any) => {
            child.raycast = () => { }
            // Model jadi caster & receiver bayangan (island menaungi dirinya sendiri,
            // terutama di sisi bedrock/portal frame yang lebih tinggi dari sekitarnya)
            if (child.isMesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        return root
    }, [scene])

    useEffect(() => { onReady(); invalidate() }, [onReady, invalidate])
    return <primitive object={model} />
}

function CameraRig({ animate }: { animate: boolean }) {
    const camera = useThree((s) => s.camera)
    const [smoothed] = useState(() => ({ value: 0 }))

    useFrame((_, delta) => {
        const target = animate ? scrollProgress.current : 0
        smoothed.value = MathUtils.damp(smoothed.value, target, DAMP_LAMBDA, Math.min(delta, 0.1))

        const p = smoothed.value
        const angle = ANGLE_START + p * ANGLE_SWEEP
        const radius = MathUtils.lerp(RADIUS_NEAR, RADIUS_FAR, p)

        camera.position.set(
            FOCUS_POINT.x + Math.sin(angle) * radius,
            HEIGHT_START + p * HEIGHT_RISE,
            FOCUS_POINT.z + Math.cos(angle) * radius,
        )
        camera.lookAt(FOCUS_POINT)
    })

    return null
}

export function EndScene() {
    const [ready, setReady] = useState(false)
    const [settings] = useState(() => ({ animate: !reducedMotion(), lowPower: isLowPower() }))
    const onReady = useMemo(() => () => setReady(true), [])

    return (
        <div
            aria-hidden
            style={{
                position: 'fixed', inset: 0, zIndex: -4, pointerEvents: 'none',
                opacity: ready ? 1 : 0, transition: 'opacity 1.2s var(--ease-out)',
            }}
        >
            <Canvas
                events={noEvents}
                style={{ pointerEvents: 'none' }}
                frameloop={settings.animate ? 'always' : 'demand'}
                dpr={[1, settings.lowPower ? 1 : 1.5]}
                shadows={settings.lowPower ? false : { type: PCFSoftShadowMap }}
                gl={{
                    antialias: !settings.lowPower,
                    powerPreference: 'high-performance',
                    // Kurva filmic (ACES) = highlight roll-off & kontras yang lebih "punchy",
                    // ini salah satu alasan render shader pack kelihatan lebih hidup
                    // dibanding tone mapping linear default three.js.
                    // Kalau three.js versi lama (<r152) ganti outputColorSpace -> outputEncoding: sRGBEncoding
                    toneMapping: ACESFilmicToneMapping,
                    toneMappingExposure: 1.15,
                    outputColorSpace: SRGBColorSpace,
                }}
                camera={{
                    position: [
                        FOCUS_POINT.x + Math.sin(ANGLE_START) * RADIUS_NEAR,
                        HEIGHT_START,
                        FOCUS_POINT.z + Math.cos(ANGLE_START) * RADIUS_NEAR,
                    ],
                    fov: 35,
                    near: 0.1,
                    far: 50,
                }}
            >
                <fog attach="fog" args={['#4a2a6b', 6, 14]} />
                <ambientLight intensity={0.35} />
                <hemisphereLight args={['#c9a8ff', '#1a1026', 0.5]} />

                {/* Bounce light lembut dari lantai endstone, nyamain efek GI/voxel-light
                    yang biasanya dihitung shader pack (cahaya mantul balik dari lantai
                    ke bawah portal frame, bukan cuma satu directional light datar) */}
                <pointLight position={[0, -0.4, 0.2]} intensity={1.4} color="#d9cd8f" distance={5} decay={2} />

                {/* Directional light sekarang jadi shadow caster utama. Shadow-camera 
            frustum dibuat tight di sekitar FOCUS_POINT saja (bukan seluruh 
            island) supaya resolusi shadow map lebih tajam persis di area 
            bedrock, bukan kebuang buat area yang toh nggak kelihatan close-up */}
                <directionalLight
                    position={[3, 6, 4]}
                    intensity={1.6}
                    castShadow={!settings.lowPower}
                    shadow-mapSize={[2048, 2048]}
                    shadow-camera-left={-4}
                    shadow-camera-right={4}
                    shadow-camera-top={4}
                    shadow-camera-bottom={-4}
                    shadow-camera-near={0.5}
                    shadow-camera-far={12}
                    shadow-bias={-0.0003}
                    shadow-normalBias={0.02}
                />

                {/* Torch glow tetap tanpa shadow (point light shadow mahal, dan di sini 
            fungsinya cuma aksen warna hangat, bukan sumber shadow utama) */}
                <pointLight position={[-0.6, 1.2, -0.3]} intensity={8} color="#ffb347" distance={4} decay={2} />

                <Suspense fallback={null}>
                    <TheEndModel onReady={onReady} />
                </Suspense>
                <CameraRig animate={settings.animate} />

                {!settings.lowPower ? (
                    <EffectComposer multisampling={4}>
                        {/* AO: gelapin celah antar-blok (sudut portal frame, sela endstone).
                            Ini yang paling kerasa bikin geometry blocky kelihatan "grounded"
                            alih-alih flat kayak vanilla Minecraft. Nilai radius/intensity
                            tergantung skala scene & versi package `postprocessing` -
                            tweak sambil lihat hasilnya, terutama kalau modelnya jauh lebih
                            besar/kecil dari TARGET_SIZE=30 saat ini. */}
                        <SSAO
                            blendFunction={BlendFunction.MULTIPLY}
                            samples={30}
                            rings={7}
                            radius={0.15}
                            intensity={25}
                            luminanceInfluence={0.4}
                            bias={0.025}
                            color="black"
                        />

                        {/* Bloom lebar & lembut (mipmapBlur) buat glow torch + eye/lava block
                            di puncak pilar - ini "signature" bloom ala BSL/Complementary/SEUS,
                            beda sama bloom tipis default. Threshold rendah karena scene gelap. */}
                        <Bloom
                            intensity={0.9}
                            luminanceThreshold={0.15}
                            luminanceSmoothing={0.35}
                            mipmapBlur
                            radius={0.85}
                        />

                        {/* target = auto-focus real-time ke FOCUS_POINT, jadi area bedrock 
                selalu tajam walau radius kamera berubah pas scroll */}
                        <DepthOfField
                            target={FOCUS_POINT}
                            focalLength={0}
                            bokehScale={3.5}
                            height={480}
                        />

                        {/* Color grading tipis: naikin saturasi & kontras dikit supaya warna
                            ungu void + oranye torch lebih "pop", khas look shader pack
                            dibanding vanilla flat lighting Minecraft. */}
                        <HueSaturation saturation={0.12} />
                        <BrightnessContrast brightness={-0.02} contrast={0.12} />

                        {/* Sentuhan lensa: aberasi kromatik tipis (lebih kuat di tepi frame
                            lewat radialModulation) + grain halus, biar hasilnya berasa
                            "dirender lewat kamera" bukan output game engine polos. */}
                        <ChromaticAberration
                            offset={new Vector2(0.0006, 0.0006)}
                            radialModulation
                            modulationOffset={0.3}
                        />
                        <Noise premultiply blendFunction={BlendFunction.OVERLAY} opacity={0.035} />

                        <Vignette eskil={false} offset={0.25} darkness={0.6} />
                    </EffectComposer>
                ) : (
                    // Versi hemat buat device low-power: cuma bloom + vignette murah,
                    // tanpa AO/DOF yang mahal di GPU mobile.
                    <EffectComposer multisampling={0}>
                        <Bloom intensity={0.6} luminanceThreshold={0.2} luminanceSmoothing={0.3} />
                        <Vignette eskil={false} offset={0.25} darkness={0.5} />
                    </EffectComposer>
                )}
            </Canvas>
        </div>
    )
}