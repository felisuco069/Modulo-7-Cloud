const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const helpers = require('./helpers');

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath('src'),
    resolve: {
      alias: {
        assets: helpers.resolveFromRootPath('../assets'),
        commonApp: helpers.resolveFromRootPath('src/commoApp'),
        core: helpers.resolveFromRootPath('src/core'),
        layout: helpers.resolveFromRootPath('src/layout'),
        pods: helpers.resolveFromRootPath('src/pods'),
        router: helpers.resolveFromRootPath('src/router'),
        scenes: helpers.resolveFromRootPath('src/scenes'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    entry: {
      app: ['regenerator-runtime/runtime', './index.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
      }),
    ],
  }
);
