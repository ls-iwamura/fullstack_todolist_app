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
  plugins: ["drizzle"],
};
