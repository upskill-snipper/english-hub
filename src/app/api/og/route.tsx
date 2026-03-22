import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get('title') || 'The English Hub'
  const subtitle = searchParams.get('subtitle') || 'Master English. Ace Your Exams.'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#090c14',
          padding: '40px 60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: 28,
              color: '#94a3b8',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 40,
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: '#3b82f6',
                letterSpacing: '-0.02em',
              }}
            >
              theenglishhub.app
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
