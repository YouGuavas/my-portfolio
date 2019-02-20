const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
	mode: 'development',
	devServer: {
		host: 'localhost',
		port: 3000,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.(pdf|jpg|png|gif|svg|ico)$/,
				use: [
		        {
	            loader: 'url-loader'
		        }
			    ]
			  }
		  ]
	  }
});