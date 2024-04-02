const testFiles = ["*.(test|spec).?(m)[jt]sx?"];

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic",
  ],
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./packages/*/tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  root: true,
  overrides: [
    {
      files: ["*.spec.?(m)[jt]sx", "*.spec.?(m)[jt]s"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      env: {
        jest: true,
        browser: true,
        node: true,
      },
      rules: {
        "jest/prefer-spy-on": "warn",
        "jest/prefer-to-contain": "warn",
        "jest/expect-expect": "warn",
        "jest/no-alias-methods": "warn",
        "jest/no-commented-out-tests": "warn",
        "jest/no-conditional-expect": "warn",
        "jest/no-deprecated-functions": "warn",
        "jest/no-disabled-tests": "warn",
        "jest/no-done-callback": "warn",
        "jest/no-export": "warn",
        "jest/no-focused-tests": "warn",
        "jest/no-identical-title": "warn",
        "jest/no-interpolation-in-snapshots": "warn",
        "jest/no-jasmine-globals": "warn",
        "jest/no-mocks-import": "warn",
        "jest/no-standalone-expect": "warn",
        "jest/no-test-prefixes": "warn",
        "jest/valid-describe-callback": "warn",
        "jest/valid-expect": "warn",
        "jest/valid-expect-in-promise": "warn",
        "jest/valid-title": "warn",
      },
    },
  ],
};
