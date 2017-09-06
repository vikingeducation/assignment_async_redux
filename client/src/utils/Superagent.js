const superagent = require('superagent');
const { promisify } = require('bluebird');
const parseString = promisify(require('xml2js').parseString);

module.exports = {
	superagent,
	parseString
};
