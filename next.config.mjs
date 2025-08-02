/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  headers: [
    {
      key: "Content-Security-Policy",
      value: "script-src 'self' https://connect.facebook.net;",
    },
  ],
};

export default nextConfig;
