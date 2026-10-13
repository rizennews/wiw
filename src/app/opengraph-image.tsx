import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export const alt = 'Women-In-WACREN - Empowering Women in STEM Across West & Central Africa';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0a192f',
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(2, 132, 199, 0.35) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          padding: '60px 80px',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)',
          }}
        />

        {/* Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Brand Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#0284c7',
              borderRadius: '9999px',
              padding: '8px 24px',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              color: '#ffffff',
            }}
          >
            WACREN INITIATIVE
          </div>

          <div
            style={{
              fontSize: '18px',
              color: '#38bdf8',
              fontWeight: 600,
            }}
          >
            womeninwacren.wacren.net
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: '56px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-1px',
              color: '#ffffff',
            }}
          >
            Women-In-WACREN
          </div>

          <div
            style={{
              fontSize: '26px',
              fontWeight: 600,
              color: '#38bdf8',
              lineHeight: 1.3,
            }}
          >
            Empowering Women in STEM Across West &amp; Central Africa
          </div>

          <div
            style={{
              fontSize: '20px',
              color: '#94a3b8',
              lineHeight: 1.5,
              maxWidth: '900px',
            }}
          >
            Connecting, training, and funding women in STEM — turning students, researchers,
            and early-career professionals into tech leaders and innovators.
          </div>
        </div>

        {/* Stats / Highlights */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            width: '100%',
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '14px',
              padding: '16px 20px',
            }}
          >
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>2,000+ Trained</div>
            <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>Workshops, Labs &amp; Courses</div>
          </div>

          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(129, 140, 248, 0.25)',
              borderRadius: '14px',
              padding: '16px 20px',
            }}
          >
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>Regional Mentorship</div>
            <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>NRENs &amp; Global Leaders</div>
          </div>

          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(192, 132, 252, 0.25)',
              borderRadius: '14px',
              padding: '16px 20px',
            }}
          >
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>STEM Innovation</div>
            <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>Hackerspaces &amp; Projects</div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(51, 65, 85, 0.5)',
            paddingTop: '20px',
            fontSize: '14px',
            color: '#64748b',
          }}
        >
          <div>Supported by AfricaConnect &amp; European Union</div>
          <div>West and Central African Research and Education Network</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
