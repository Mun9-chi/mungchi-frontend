import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const widthVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default widthVanillaExtract(nextConfig);
