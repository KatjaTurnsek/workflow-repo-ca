import js from '@eslint/js';
import globals from 'globals';

export default [
  // include the recommended rules as a whole config object
  js.configs.recommended,

  // add globals (browser + test)
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: true,
        it: true,
        test: true,
        expect: true,
        beforeAll: true,
        beforeEach: true,
        afterAll: true,
        afterEach: true,
        require: true,
        module: true,
        process: true,
      },
    },
  },

  // put ignores here (flat config replaces .eslintignore)
  {
    ignores: ['node_modules/', 'dist/', 'package-lock.json'],
  },
];
