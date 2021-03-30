//https://webpack.js.org/configuration/dev-server/

const path = require('path');
module.exports={
  entry:'./client/index.js',
  mode:'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 3000,
    publicPath: 'http://localhost:3000/'
	},
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}
