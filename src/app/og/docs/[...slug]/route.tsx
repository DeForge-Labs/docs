import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import path from 'path';

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: RouteContext<'/og/docs/[...slug]'>,
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  // Load logo
  const logoPath = path.join(process.cwd(), 'public/logo/logo-white.svg');
  const logo = await readFile(logoPath);
  const logoBase64 = `data:image/svg+xml;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#0a0a0a',
          padding: '60px',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Mono',
        }}
      >
        <div
          style={{
            width: '1120px',
            height: '550px',
            backgroundColor: '#111',
            borderRadius: '24px',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 0 60px rgba(0,0,0,0.6)',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: 'white',
              marginBottom: 20,
            }}
          >
            {page.data.title}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 36,
              color: '#aaa',
              marginBottom: '180px',
            }}
          >
            {page.data.description}
          </div>

          {/* Footer with logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '40px',
            }}
          >
            <img
              src={logoBase64}
              width={40}
              height={40}
              style={{ objectFit: 'contain' }}
            />
            <span
              style={{
                fontSize: 28,
                color: '#fff',
              }}
            >
              Deforge Docs
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}