import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
let nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
};

if (process.env.ANALYZE === "true") {
  nextConfig = withBundleAnalyzer({
    enabled: true,
  })(nextConfig);
}

export default nextConfig;
