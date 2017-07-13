const path = require('path');
const entry = path.join(__dirname, 'entry.js');

module.exports = {
	entry: {
		output1: entry,
		output2: entry
	},

	output: {
		path: __dirname,
		filename: `[name]/bundle.js`
	}
};
