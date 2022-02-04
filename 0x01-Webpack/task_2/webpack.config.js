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
        test: /\.(png|jpg|gif)$/i,
        use: [
					'file-loader',
          {
            loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						},
          },
        ],
       type: 'javascript/auto'
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
