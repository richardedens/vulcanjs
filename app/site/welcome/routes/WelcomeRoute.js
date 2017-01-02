'use strict';

module.exports = {


    init: function (fncs, app) {

        var acl = fncs.acl(),
            passport = fncs.passport(),
            controller = require('../controllers/WelcomeController');

        app.get('/', /* passport.authenticate('local', { failureRedirect: '/login' }), acl.middleware(), */ controller.renderWelcome);

    }

};