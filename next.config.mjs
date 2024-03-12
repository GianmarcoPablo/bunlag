/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[ 
            {
                protocol: 'https',
                hostname: "imgbum.jobscdn.com"
            }
        ]
    }
};

export default nextConfig;
