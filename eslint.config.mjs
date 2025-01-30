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
      // Explicitly disable constructor-super rule
      "constructor-super": "off",
      // You can disable other specific rules if needed here
    },
  },
  {
    languageOptions: {
      globals: globals.browser, // Add global browser variables here
    },
  },
  pluginJs.configs.recommended, // Recommended ESLint settings
];
