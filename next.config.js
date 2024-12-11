/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  images: {
    remotePatterns: [{ hostname: 'images.unsplash.com', protocol: 'https' }],
  },
};
