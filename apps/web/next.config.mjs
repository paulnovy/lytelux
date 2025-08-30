/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // RSC + App Router default in Next 14
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
};

export default nextConfig;

