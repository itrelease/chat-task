const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist", "client"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "@root": path.join(__dirname, "src", "client"),
      "@components": path.join(__dirname, "src", "client", "components"),
      "@icons": path.join(__dirname, "src", "client", "icons"),
      "@hooks": path.join(__dirname, "src", "client", "hooks"),
      "@utils": path.join(__dirname, "src", "client", "utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        loader: require("styled-jsx/webpack").loader,
        options: {
          type: "scoped",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "client", "index.html"),
    }),
  ],
};
