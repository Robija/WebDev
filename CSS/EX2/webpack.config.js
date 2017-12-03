var path = require('path');

module.exports = {
	entry : './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'), // __dirname is already defined within path
		filename: 'bundle.js'
	},
	module : {
		rules: [
		     {
			test: /\.css$/,
		    	use: [ 
				'style-loader',
				'css-loader'
			]
		     }	     

		]
	}

};
