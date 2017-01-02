module.exports = {

    init: function (express, host, port) {

        // MongoDB connection
        var utils = require('./utils'),
            chalk = require('chalk'),
            mongoose = require('mongoose');

        mongoose.connect('mongodb://' + utils.env('MONGODB_HOST', 'localhost') + ':' + utils.env('MONGODB_PORT', '27017') + '/' + utils.env('MONGODB_DB', 'epochjsdb') , function (db) {

            // Connect to db.
            utils.console.log('~~ VulcanJS: Connected to db.');

            // Init express.
            express.init(mongoose, db, host, port);

        });

    }

};