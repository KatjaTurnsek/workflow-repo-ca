import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    // pick up tests anywhere, e.g. js/utils/storage.test.js
    include: ['**/*.test.{js,ts,jsx,tsx}'],
    exclude: ['**/node_modules/**', 'e2e/**', '**/dist/**'],
  },
});
