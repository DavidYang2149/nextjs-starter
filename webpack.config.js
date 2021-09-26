const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const DEVELOPMENT_ENV = 'development';
const PRODUCTION_ENV = 'production';

const mode = process.env.NODE_ENV || DEVELOPMENT_ENV;

const pathBuild = path.resolve(__dirname, 'build');
const pathSrc = path.resolve(__dirname, 'src');
const pathIndex = path.resolve(__dirname, 'src', 'index');
const pathHtml = path.resolve(__dirname, 'public', 'index.html');

module.exports = {
  mode,
  entry: {
    main: pathIndex,
  },
  output: {
    path: pathBuild,
    filename: mode === PRODUCTION_ENV
      ? 'static/js/[name].[contenthash:8].js'
      : mode === DEVELOPMENT_ENV && 'static/js/bundle.js',
    publicPath: mode === PRODUCTION_ENV
      ? './'
      : mode === DEVELOPMENT_ENV && '/',
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          maxSize: 50000,
        },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        include: pathSrc,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          mode === PRODUCTION_ENV ? MiniCssExtractPlugin.loader :
            "style-loader",
          "css-loader?url=false",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "./src/assets/styles/helper.scss";`
            }
          },
        ]
      },
    ],
  },
  devServer: {
    port: 2149,
    overlay: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: pathHtml,
      templateParameters: {
        env: mode === DEVELOPMENT_ENV ? '(개발모드) ' : '',
        imageUrl: mode === PRODUCTION_ENV ? 'https://davidyang2149.github.io/MyBakingRecipeVol2/static/css/' : 'http://localhost:2149/',
      },
    }),
    new CopyPlugin({
      patterns: mode === PRODUCTION_ENV
        ? [
          { from: './src/assets/images', to: './static/css/assets/images' },
          { from: './src/assets/fonts', to: './static/css/assets/fonts' },
        ]
        : [
          { from: './src/assets/images', to: './assets/images' },
          { from: './src/assets/fonts', to: './assets/fonts' },
        ]
    }),
    new Dotenv(),
    new MiniCssExtractPlugin({
      linkType: false,
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[id].[contenthash:8].css',
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
