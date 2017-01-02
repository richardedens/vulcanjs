module.exports = {

    init: function (app) {

        var utils = require('./utils'),
            helmet = require('helmet');

        app.use(helmet.frameguard());
        app.use(helmet.xssFilter());
        app.use(helmet.noSniff());
        app.use(helmet.ieNoOpen());
        app.use(helmet.hsts({
            maxAge: utils.env('SIX_MONTHS', 15778476000),
            includeSubdomains: true,
            force: true
        }));
        app.disable('x-powered-by');

    }

};