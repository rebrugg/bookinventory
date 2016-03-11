var _ = require('lodash');
var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

var prod = { name: 'bookinventorybritt',
    config_vars: { MONGOLAB_URI: 'mongodb://heroku_hr9mt0b8:p4e5c3denfno21uoaurjhrp5rg@ds041494.mlab.com:41494/heroku_hr9mt0b8' },
    domains: [ 'bookinventorybritt.herokuapp.com' ] };

var config = _.merge({}, require('./base'), prod);

configurator(config);


