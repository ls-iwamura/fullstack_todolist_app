const { rules } = require("eslint-config-prettier");

module.exports = {
  extends: [
    "eslint:recommended",
    "@hono/eslint-config",
    "plugin:drizzle/recommended",
    "turbo",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["drizzle", 'import'],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
