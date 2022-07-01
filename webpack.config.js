const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
  mode: 'production',
  resolve: {
    alias: {
      // Skip buffer dependency of abstract-level
      buffer: false
    }
  }
};
