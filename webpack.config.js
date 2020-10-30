const path = require('path')
const webpack = require('webpack')

module.exports = [{
  entry: './src/web-bundle-console-log.js',
  output: {
    filename: 'web-bundle-console-log.js',
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
}, {
  entry: './src/web-bundle-visual.js',
  output: {
    filename: 'web-bundle-visual.js',
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
}];
