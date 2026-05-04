import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

type Level = 'gcse' | 'igcse' | 'ks3' | 'a-level'

const LEVEL_LABELS: Record<Level, string> = {
  gcse: 'GCSE',
  igcse: 'IGCSE',
  ks3: 'KS3',
  'a-level': 'A-LEVEL',
}

function isLevel(value: string | null): value is Level {
  return value === 'gcse' || value === 'igcse' || value === 'ks3' || value === 'a-level'
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get('title') || 'The English Hub'
  const subtitle = searchParams.get('subtitle') || 'GCSE & IGCSE English revision, AI marked'
  const levelParam = searchParams.get('level')
  const level: Level | undefined = isLevel(levelParam) ? levelParam : undefined

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#090c14',
        backgroundImage:
          'radial-gradient(circle at 100% 0%, rgba(5, 150, 105, 0.32) 0%, rgba(5, 150, 105, 0.12) 28%, rgba(9, 12, 20, 0) 55%), radial-gradient(circle at 0% 100%, rgba(4, 120, 87, 0.18) 0%, rgba(9, 12, 20, 0) 45%)',
        padding: '64px 72px',
        position: 'relative',
      }}
    >
      {/* Hairline top accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          display: 'flex',
          background:
            'linear-gradient(90deg, rgba(4, 120, 87, 0) 0%, rgba(5, 150, 105, 0.9) 50%, rgba(4, 120, 87, 0) 100%)',
        }}
      />

      {/* Top row: level chip (left) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          minHeight: 44,
        }}
      >
        {level ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 18px',
              borderRadius: 9999,
              backgroundColor: 'rgba(5, 150, 105, 0.14)',
              border: '1px solid rgba(5, 150, 105, 0.55)',
              color: '#34d399',
              fontFamily: 'monospace',
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            {LEVEL_LABELS[level]}
          </div>
        ) : null}
      </div>

      {/* Body: title + subtitle, left-aligned, vertically centred */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          maxWidth: 1000,
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 84,
            fontWeight: 800,
            color: '#FBF7F0',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            textAlign: 'left',
            marginBottom: 28,
            // Clamp to ~2 lines via max height + overflow hidden
            maxHeight: 184,
            overflow: 'hidden',
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: '#94a3b8',
            lineHeight: 1.35,
            letterSpacing: '-0.005em',
            textAlign: 'left',
            maxHeight: 132,
            overflow: 'hidden',
          }}
        >
          {subtitle}
        </div>
      </div>

      {/* Footer: brand line + emerald dot */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 28,
          borderTop: '1px solid rgba(251, 247, 240, 0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              backgroundColor: '#059669',
              boxShadow: '0 0 16px rgba(5, 150, 105, 0.7)',
            }}
          />
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 24,
              fontWeight: 500,
              color: '#34d399',
              letterSpacing: '0.02em',
            }}
          >
            theenglishhub.app
          </div>
        </div>
        <div
          style={{
            fontSize: 20,
            color: '#64748b',
            letterSpacing: '0.04em',
          }}
        >
          AI marked against the AO rubric
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
