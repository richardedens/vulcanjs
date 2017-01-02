module.exports = {

    init: function (app) {

        var utils = require('./utils'),
            glob = require('glob'),
            file, module, i, models, controllers;

        // options is optional
        models = glob.sync('app/**/**/**/*Model.js', {mark: true});
        for(i = 0; i < models.length; i++) {
            file = models[i].replace('.js', '');
            module = require('../' + file);
            module.init();
            utils.console.info('~~ Loaded: ' + file);
        }
        // options is optional
        controllers = glob.sync('app/**/**/**/*Controller.js', {mark: true});
        for(i = 0; i < controllers.length; i++) {
            file = controllers[i].replace('.js', '');
            module = require('../' + file);
            module.init(app);
            utils.console.info('~~ Loaded: ' + file);
        }

    }

};
