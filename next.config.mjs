const nextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: ''
      },
    ],
  }
};

export default nextConfig;
