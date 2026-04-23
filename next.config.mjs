import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '30mb',
        },
    },
}

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
