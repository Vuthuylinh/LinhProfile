//https://webpack.js.org/configuration/dev-server/
//https://www.netlify.com/blog/2017/11/30/starting-with-webpack-from-scratch/

const path = require('path');
// const webpack = require('webpack');
module.exports={
  entry:'./app/index.js',
  mode:'development',
  resolve: {
    extensions: ['*','.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
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
      {
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				type: 'asset/resource',
			},
    ]
  }
}
