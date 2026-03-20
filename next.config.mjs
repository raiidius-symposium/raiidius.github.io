/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment and update if deploying to a subpath (e.g., https://username.github.io/repo-name/)
 //    basePath: '/raiidius',
 //    assetPrefix: '/raiidius/',
}

export default nextConfig
