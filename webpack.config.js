const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // Webpack 5 no longer polyfills 'process'
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  resolve: {
    fallback: {
      // BREAKING CHANGE: webpack < 5 used to include polyfills for
      // node.js core modules by default. This is no longer the
      // case.
      'util': false,
      'assert': false
    }
  }
};
