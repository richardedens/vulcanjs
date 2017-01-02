module.exports = {

    init: function (app) {

        var utils = require('./utils'),
            lusca = require('lusca'),
            md5 = require('md5');

        app.use(lusca({
            csrf: true,
            xframe: 'SAMEORIGIN',
            p3p: md5(utils.env('P3P_SECRET', 'vulcanjssuperp3psecretstuff')),
            hsts: {
                maxAge: utils.env('HSTS_MAX_AGE', 31536000),
                includeSubDomains: true,
                preload: true
            },
            xssProtection: true,
            nosniff: true
        }));

    }

};