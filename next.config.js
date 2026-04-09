/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx'],
  i18n,
};

module.exports = nextConfig;
