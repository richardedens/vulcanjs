module.exports = {

    init: function (mongoose, app) {

        // Session storage with connect-mongo
        var utils = require('./utils'),
            session = require('express-session'),
            sessionStorage = require('connect-mongo')(session);

        app.use(session({
            secret: utils.env('SESSION_SECRET', 'vulcanjssystem'),
            name: utils.env('SESSION_NAME', 'vulcanjs'),
            proxy: true,
            resave: true,
            saveUninitialized: true,
            store: new sessionStorage({
                mongooseConnection: mongoose.connection,
                collection: utils.env('SESSION_COLLECTION', 'session_vulcanjs')
            })
        }));

    }

};