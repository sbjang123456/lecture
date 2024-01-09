const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, { mode }) => ({
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      //   {
      //     test: /\.(?:js|mjs|cjs)$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: "babel-loader",
      //       options: {
      //         presets: [["@babel/preset-env"]],
      //       },
      //     },
      //   },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          filter: (resourcePath) => {
            return !resourcePath.endsWith("index.html");
          },
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
  devtool: mode === "production" ? false : "inline-source-map",
});
