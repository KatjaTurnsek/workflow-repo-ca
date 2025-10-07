import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
        // Vitest globals
        describe: true, it: true, test: true, expect: true,
        beforeAll: true, beforeEach: true, afterAll: true, afterEach: true,
        // Node-style for config files
        require: true, module: true, process: true
      }
    }
  }
];
