import type { NextConfig } from "next";
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90],
  },
};

export default withMDX(nextConfig);
