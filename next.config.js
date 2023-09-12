/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf)$/,
      use: [{ loader: "url-loader" }],
    });

    return config;
  },
};

module.exports = nextConfig;
