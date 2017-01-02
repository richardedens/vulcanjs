/*global process*/
'use strict';

module.exports = {

    init: function() {

        var utils = require('./vendor/utils'),
            chalk = require('chalk'),
            found = false;

        utils.console.log('~~ VulcanJS: checking the configuration settings in the .env file.');

        if (typeof process.env.MONGODB_HOST === 'undefined') {
            utils.console.warning('Please set the MONGOD_HOST environment variable in the .env file.');
            found = true;
        }
        if (typeof process.env.MONGODB_PORT === 'undefined') {
            utils.console.warning('Please set the MONGODB_PORT environment variable in the .env file.');
            found = true;
        }
        if (typeof process.env.MONGODB_DB === 'undefined') {
            utils.console.warning('Please set the MONGODB_DB environment variable in the .env file.');
            found = true;
        }
        if (typeof process.env.REDIS_HOST === 'undefined') {
            utils.console.warning('Please set the REDIS_HOST environment variable in the .env file.');
            found = true;
        }
        if (typeof process.env.REDIS_PORT === 'undefined') {
            utils.console.warning('Please set the REDIS_PORT environment variable in the .env file.');
            found = true;
        }
        if (found) {
            process.exit();
        }

    }

};