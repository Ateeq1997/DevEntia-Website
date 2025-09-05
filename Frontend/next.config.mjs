const nextConfig = {
  images: {
    domains: [
      "i.ibb.co",
      "l-ldesign.com.au",
      "res.cloudinary.com",
      "devapi.deventiatech.com",
      "api.deventiatech.com",
      "localhost",
      "127.0.0.1",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // For MP4 files
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/videos', // Output path for videos
            publicPath: '/_next/assets/videos', // Public URL for videos
            esModule: false, // To handle ES Modules correctly
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
