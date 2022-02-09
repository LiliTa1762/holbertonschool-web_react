const path = require('path');

module.exports = {
	mode: "production",
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist/')
	},
	devServer: {
		static: './dist',
	 hot: true,
	},
	module: {
		rules: [
			{
				test: /\.(tsx|jsx|ts|js)?$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
					},
				],
			},
			{ 
				test: /\.css$/, 
				use: ["style-loader", "css-loader"] 
			},
		]
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
},
};
