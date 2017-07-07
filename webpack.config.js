const path = require('path')

module.exports = {
  entry: './app/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'app')
  },
  cache: true,
  devtool: 'source-map',
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
