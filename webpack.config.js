/**
 * @fileoverview Simplified webpack configuration for PropFinder Pro extension.
 */

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  
  entry: {
    content: './src/content.js',
    popup: './src/popup/popup.js',
    background: './src/background/background.js',
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'manifest.json', to: '.' },
        { from: 'popup.html', to: '.' },
        { from: 'popup.css', to: '.' },
        { from: 'images', to: 'images', noErrorOnMissing: true },
      ],
    }),
  ],
  
  resolve: {
    extensions: ['.js'],
  },
};