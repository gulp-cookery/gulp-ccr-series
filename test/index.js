/* eslint consistent-this: 0 */
'use strict';

var test = require('mocha-cases');

var series = require('../');

var context = {
	gulp: null,
	config: null,
	stream: null
};

var cases = {
	'should ...': {
		value: {
		},
		expected: {
		}
	}
};

function done(err, result) {
}

function runner(value, options) {
	var ctx;

	ctx = context;
	ctx.config = value.config;
	return series.call(ctx, done);
}

describe('series()', function () {
	test(cases, runner);
});
