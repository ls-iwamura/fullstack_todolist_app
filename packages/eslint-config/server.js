module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "@hono/eslint-config",
    "plugin:drizzle/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["drizzle"],
};
