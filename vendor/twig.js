module.exports = {

    init: function (app) {

        var twig = require('twig');

        app.set('views', __dirname.replace('/vendor', '') + '/resources/views');
        app.set('view engine', 'twig');
        app.set('twig options', {
            strict_variables: false
        });
        if (process.env.APP_ENV === 'local') {
            twig.cache(false);
        } else if (process.env.APP_ENV === 'production') {
            twig.cache(true);
        }

        return twig;

    }

};