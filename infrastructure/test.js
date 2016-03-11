var _ = require('lodash');
var heroin = require('heroin-js');

//var configurator = heroin(process.env.HEROKU_API_TOKEN);
var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var test = { name: 'bookinventorybritt-test',
    config_vars: { NODE_ENV: 'test' },
    domains: [ 'bookinventorybritt-test.herokuapp.com' ] };

var config = _.merge({}, require('./base'), test);

configurator(config);