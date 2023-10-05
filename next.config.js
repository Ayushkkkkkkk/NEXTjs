/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:'/user',
                destination:'/',
                permanent:false
            },
            {
                source:'/user/:useridr',
                destination:'/',
                permanent:false
            },
            {
                source:'/admin',
                destination:'/',
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig
