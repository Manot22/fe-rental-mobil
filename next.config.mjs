/** @type {import('next/image').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "http://127.0.0.1:8000",
      },
    ],
  },
};

export default nextConfig;
