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
      // Disable the constructor-super rule to avoid issues with it
      "constructor-super": "off",
    },
  },
  {
    languageOptions: {
      globals: globals.browser, // Global browser variables
    },
  },
  pluginJs.configs.recommended, // Recommended ESLint settings
];
