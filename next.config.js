/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    domains: ['iili.io'], 
  },
  experimental:{
    serverActions:true,
},
}

module.exports = nextConfig
