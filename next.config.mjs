import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const widthVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

export default widthVanillaExtract(nextConfig);
