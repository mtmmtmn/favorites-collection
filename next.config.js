/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/favorites',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
}

module.exports = nextConfig
