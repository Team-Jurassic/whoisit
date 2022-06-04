import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|pages)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { import: true },
          },
        ],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' }), new MiniCssExtractPlugin()],
  devtool: 'eval-cheap-module-source-map',
  target: 'web',
  devServer: {
    contentBase: path.resolve(dirname, 'dist'),
    compress: true,
    hot: false,
    historyApiFallback: true,
    liveReload: true,
    open: true,
    port: 5500,
    watchContentBase: true,
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/,
    },
  },
};

export default config;