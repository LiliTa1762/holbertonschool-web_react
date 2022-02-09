const path = require('path');

module.exports = {
	mode: "production",
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist/')
	},
	module: {
    rules: [
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
