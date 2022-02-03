const path = require('path');

module.exports = {
	mode: "production",
	entry: {
		main: './js/dashboard_main.js',
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
    rules: [
			{ 
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ]
  },
	performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
};
