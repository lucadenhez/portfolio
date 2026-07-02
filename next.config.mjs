import { withPayload } from "@payloadcms/next/withPayload";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '500mb',
        },
    },
}

const withNextIntl = createNextIntlPlugin();
export default withPayload(withNextIntl(nextConfig));
