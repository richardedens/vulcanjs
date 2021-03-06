
// Initialize routes.
module.exports = {

    init: function(fncs, app) {

        var utils = require('../../vendor/utils'),
            glob = require('glob');

        // options is optional
        routes = glob.sync('app/site/**/**/*Route.js', {mark: true});
        for(i = 0; i < routes.length; i++) {
            file = routes[i].replace('.js', '');
            module = require('../../' + file);
            module.init(fncs, app);
            utils.console.info('~~ Loaded: ' + file);
        }

    }

};