const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  //Código com as funcionalidades que o js entende
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'

  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'

        }
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }, {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};