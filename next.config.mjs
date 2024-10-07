import NextFederationPlugin from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {

    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'microfrontend',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './MicroComponent': './src/components/MicrofrontendComponent.tsx'
          },
          shared: {
            react: { singletone: true },
            'react-dom': { singleton: true },
          }
        })
      )
    }
    return config;
  }
};

export default nextConfig;
