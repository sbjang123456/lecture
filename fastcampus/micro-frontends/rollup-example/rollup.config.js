const { babel } = require("@rollup/plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");

module.exports = {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs", // commonjs
    },
    {
      file: "dist/bundle.mjs",
      format: "es", // esm, module
    },
  ],
  plugins: [commonjs(), babel({ babelHelpers: "bundled" }), terser()],
};
