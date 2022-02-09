const path = require('path');

module.exports = {
	mode: "development",
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist/')
	},
	devServer: {
		static: './dist',
		hot: true,
		open: true
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"]
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' }
			},
			{
					use: ["style-loader", "css-loader"],
					test: /\.css$/i
			},
			{
					test: /\.(gif|png|jpe?g|svg)$/i,
					use: [
							"file-loader",
							{
									loader: "image-webpack-loader",
									options: {
											bypassOnDebug: true, // webpack@1.x
											disable: true, // webpack@2.x and newer
									},
							},
					],
			},
	],
},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
},
};
