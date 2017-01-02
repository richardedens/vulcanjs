module.exports = {

    init: function (app) {

        var methodOverride = require('method-override');

        app.use(methodOverride('_method'));                // Querystring
        app.use(methodOverride('X-HTTP-Method')) ;         // Microsoft
        app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
        app.use(methodOverride('X-Method-Override'));      // IBM
        app.use(methodOverride(function (req, res) {       // Form
            if (req.body && typeof req.body === 'object' && '_method' in req.body) {
                // look in urlencoded POST bodies and delete it
                var method = req.body._method
                delete req.body._method
                return method
            }
        }));

    }

};