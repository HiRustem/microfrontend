/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.library = 'microfrontend';
      config.output.libraryTarget = 'umd';
      config.output.globalObject = 'window';
    }

    return config;
  }
};

export default nextConfig;
