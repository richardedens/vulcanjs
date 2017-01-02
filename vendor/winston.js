module.exports = {

    init: function () {

        var utils = require('./utils'),
            winston = require('winston');

        logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)(),
                new (winston.transports.File)({ filename: utils.env('LOG_FILEPATH', './storage/logs/server.log') })
            ]
        });

        return logger;

    }

};