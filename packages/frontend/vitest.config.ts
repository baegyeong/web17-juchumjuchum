/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./__tests__/setupTests'],
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
});
