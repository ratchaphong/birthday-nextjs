import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ ปิด error ESLint ตอน build
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
