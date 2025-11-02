import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [new URL('https://vcpnsfarucvradpvntni.supabase.co/storage/v1/object/public/docs/**')],
  },
};

export default withMDX(config);
