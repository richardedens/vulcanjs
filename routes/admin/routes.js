var passport = require('passport');

// Initialize routes.
module.exports = {

    list: [],

    init: function(fncs, app) {

        // Get the express application, the passport password control and the acl roles / permissions control.
        var utils = require('../../vendor/utils'),
            glob = require('glob');

        /*
         */

        // options is optional
        routes = glob.sync('app/admin/**/**/*Route.js', {mark: true});
        for(i = 0; i < routes.length; i++) {
            file = routes[i].replace('.js', '');
            module = require('../../' + file);
            module.init(fncs, app);
            utils.console.info('~~ Loaded: ' + file);
        }

    }

};