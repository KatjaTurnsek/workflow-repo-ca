import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    // Only run OUR tests:
    include: ['tests/**/*.test.{js,ts,jsx,tsx}'],
    // And be explicit about excludes:
    exclude: ['**/node_modules/**', 'e2e/**', '**/dist/**'],
  },
});
