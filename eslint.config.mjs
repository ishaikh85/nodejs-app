import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module", // Allows usage of import/export
      ecmaVersion: 2021, // Enable ES2021 features like structuredClone
    },
    rules: {
      "constructor-super": "off", // Explicitly turn off constructor-super globally
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Include browser globals, ensuring compatibility
        structuredClone: "readonly", // Add structuredClone explicitly as a global
      },
    },
  },
  pluginJs.configs.recommended, // Recommended ESLint settings
];
