'use strict';

module.exports = {

    init: function (fncs, app) {

        var acl = fncs.acl(),
            passport = fncs.passport(),
            controller = require('../controllers/VendorController');

        app.get('/api/v1/version', /* passport.authenticate('local', { failureRedirect: '/login' }), acl.middleware(), */ controller.getAPIVersion);

    }

};