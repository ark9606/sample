const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

// for creating separate css file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appName = 'index';

module.exports = {
  entry: `./src/app/${appName}.js`,
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'dist')
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
        test: /\.html$/,
        use: [
          {
						loader: "html-loader",
						// options: { minimize: true }
          }
        ]
			},
			{
        test: /\.sass|scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: 'inline'
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: "./images/[name].[ext]",
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ],
      }
      
		]
	},
	plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),

    new ExtractTextPlugin('[name].css'),
	],


	devServer:{
    contentBase: path.resolve(__dirname, './src'),
    port: 9876,
    historyApiFallback: true,
    inline: true,
    host: 'localhost'
  }
}