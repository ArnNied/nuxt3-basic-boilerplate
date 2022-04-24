module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
    // https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-generate-no-undef-warnings
    "vue/setup-compiler-macros": true,
  },
  globals: {
    // https://v3.nuxtjs.org/guide/features/head-management/#usehead-composable
    useHead: "readonly", // remove "no-undef" error
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    // https://eslint.vuejs.org/user-guide/#the-variables-used-in-the-template-are-warned-by-no-unused-vars-rule
    "vue/script-setup-uses-vars": "error",
    // https://eslint.vuejs.org/rules/multi-word-component-names.html#vue-multi-word-component-names
    "vue/multi-word-component-names": "off",
  },
}
