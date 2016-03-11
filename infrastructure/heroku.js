var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

//configurator.export('bookinventorybritt').then(function(result) {
//    console.log(result);
//});


var prod = { name: 'bookinventorybritt',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: { MONGOLAB_URI: 'mongodb://heroku_hr9mt0b8:p4e5c3denfno21uoaurjhrp5rg@ds041494.mlab.com:41494/heroku_hr9mt0b8' },
    addons: { mongolab: { plan: 'mongolab:sandbox' } },
    collaborators:
        [ 'ivarconr@gmail.com',
            'hans.petter.mile@gmail.com',
            'britt.bugge@schibsted.no' ],
    features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: [],
    domains: [ 'bookinventorybritt.herokuapp.com' ] };

var test = { name: 'bookinventorybritt-test',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: { NODE_ENV: 'test' },
    addons: { mongolab: { plan: 'mongolab:sandbox' } },
    collaborators:
        [ 'ivarconr@gmail.com',
            'hans.petter.mile@gmail.com',
            'britt.bugge@schibsted.no' ],
    features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: [],
    domains: [ 'bookinventorybritt-test.herokuapp.com' ] };

configurator(test);