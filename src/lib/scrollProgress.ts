/**
 * Latest Lenis scroll progress (0-1), published by useSmoothScroll and polled
 * per-frame by the 3D backdrop.
 *
 * A mutable ref rather than React state on purpose: the scroll event fires on
 * nearly every frame, and routing it through state would re-render the tree for
 * a value only useFrame consumes.
 *
 * Stays at 0 when no Lenis exists (prefers-reduced-motion), which is what keeps
 * the 3D scene static in that mode.
 */
export const scrollProgress = { current: 0 }
