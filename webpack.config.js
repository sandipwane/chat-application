const path = require('path')

module.exports = {
  entry: './app/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'app')
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
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/
      }
    ]
  }
}
