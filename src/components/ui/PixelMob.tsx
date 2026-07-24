import type { CSSProperties } from 'react'
import { cn } from '@/lib/cn'
import { PixelSprite } from './PixelSprite'
import { SLIME, SPIRIT, EMERALD, type MobDef } from './mobs'

type MobVariant = 'slime' | 'spirit' | 'emerald'

const DEFS: Record<MobVariant, MobDef> = {
  slime: SLIME,
  spirit: SPIRIT,
  emerald: EMERALD,
}

const ANIM: Record<MobVariant, string> = {
  slime: 'anim-slime',
  spirit: 'anim-float',
  emerald: 'anim-item',
}

interface PixelMobProps {
  variant: MobVariant
  unit?: number
  withShadow?: boolean
  className?: string
  style?: CSSProperties
}

export function PixelMob({
  variant,
  unit = 6,
  withShadow = false,
  className,
  style,
}: PixelMobProps) {
  const def = DEFS[variant]
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none select-none', className)}
      style={style}
    >
      <PixelSprite
        grid={def.grid}
        palette={def.palette}
        unit={unit}
        className={cn('block', ANIM[variant])}
        style={{ transformOrigin: 'bottom center' }}
      />
      {withShadow && (
        <div
          className="anim-shadow mx-auto"
          style={{
            width: '68%',
            height: 5,
            marginTop: 3,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.5)',
            filter: 'blur(1px)',
          }}
        />
      )}
    </div>
  )
}
