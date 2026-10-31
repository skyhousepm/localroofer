/** @type {import('next').NextConfig} */
const nextConfig = {
  // www.localroofer.ca is canonical — send the bare domain there so Google
  // doesn't index two copies of every page.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "localroofer.ca" }],
        destination: "https://www.localroofer.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
