module.exports = {

    init: function (app) {

        // Redis connection
        var utils = require('./utils'),
            passport = require('passport'),
            LocalStrategy = require('passport-local').Strategy,
            mongoose = require('mongoose');

        // User.
        var User = mongoose.model('User');

        passport.use(new LocalStrategy(
            function (username, password, done) {
                User.findOne({username: username}, function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false, {message: 'Incorrect username.'});
                    }
                    if (!user.validPassword(password)) {
                        return done(null, false, {message: 'Incorrect password.'});
                    }
                    return done(null, user);
                });
            }
        ));
        app.use(passport.initialize());
        app.use(passport.session());

        return passport;

    }

};
