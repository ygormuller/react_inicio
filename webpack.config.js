const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
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

        //yarn add style-loader css-loader -D//

      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
        ]

        //yarn add fiel-loader -D//
        
      }, {
        test: /.*\.(gif|png|jpe?g)$/1,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};