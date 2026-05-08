import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Dar Atlas, studio web : sites sécurisés, performants, livrés en 6 semaines';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#0A0A0A',
          color: '#FAFAF7',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 36, fontWeight: 600 }}>Dar</span>
          <span style={{ fontSize: 36, fontWeight: 300, color: '#7A7A75' }}>/</span>
          <span style={{ fontSize: 36, fontWeight: 600, fontStyle: 'italic' }}>Atlas</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              maxWidth: 1000,
            }}
          >
            Code propre. Sites rapides.{' '}
            <span style={{ color: '#C65D3E', fontStyle: 'italic', fontWeight: 300 }}>Zéro surprise.</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#7A7A75',
            fontFamily: 'monospace',
          }}
        >
          <span>daratlas.fr</span>
          <span>Studio web · France</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
