module.exports = {

    init: function (mongoose, db, host, port) {

        // ~ Boot up the server and all that is uses.
        var system = (function () {

            // ~ Only use one var at the beginning of the function.
            var utils, chalk, session, redis, methodOverride, filesystem, adminRoutes,
                app, multer, upload, helmet, lusca, compression, acl, shopRoutes, docsRoutes,
                bodyParser, cookieParser, winston, logger, passport, fncs, flash, twig,
                webRoutes, apiRoutes, routes;

            // ~ External libraries;
            utils = require('./utils');
            chalk = require('chalk');

            // ~ Express Webserver
            express = require('express');

            // ~ Redis
            redis = require('./redis');
            redis.init();

            // ~ Create application
            app = express();

            // ~ Session
            session = require('./session');
            session.init(mongoose, app);

            // ~ Multer to process multipart form data (file upload)
            multer = require('./multer');
            upload = multer.init();

            // ~ Helmet protection for ExpressJS webserver
            helmet = require('./helmet');
            helmet.init(app);

            // ~ Lusca extra security
            lusca = require('./lusca');
            lusca.init(app);

            // ~ Compression
            compression = require('./compression');
            compression.init(app);

            // ~ Body parser
            bodyParser = require('./body_parser');
            bodyParser.init(app);

            // ~ Method override
            methodOverride = require('./method_override');
            methodOverride.init(app);

            // ~ Parse cookies.
            cookieParser = require('./cookie_parser');
            cookieParser.init(app);

            // ~ Use flash to send data in between request on the current session.
            flash = require('./flash');
            flash.init(app);

            // ~ Twig template engine.
            twig = require('./twig');
            twig = twig.init(app);

            // ~ Roles and permission
            acl = require('./acl');
            acl = acl.init(app, mongoose);

            // ~ Add static files
            app.use(express.static('public'));

            // ~ Logger
            winston = require('./winston');
            logger = winston.init();

            // Init files that are in app.
            filesystem = require('./filesystem');
            filesystem.init(app);

            // ~ Passport
            passport = require('./passport');
            passport = passport.init(app);

            // ~ All functions!
            fncs = {

                passport: function () {
                    return passport;
                },
                app: function () {
                    return app;
                },
                twig: function () {
                    return twig;
                },
                acl: function () {
                    return acl;
                },
                db: function () {
                    return db;
                },
                logger: function () {
                    return logger;
                },
                serve: function (host, port) {

                    // Set domain and port
                    app.set('domain', host);
                    app.set('port', port);

                    // Now listen on it.
                    app.listen(port, function () {
                        utils.console.log('~~ VulcanJS: listening on http://' + host + ':' + port);
                    });

                }

            };

            // ~ Add web routes
            webRoutes = require('../routes/web/routes');
            webRoutes.init(fncs, app);

            // ~ Add api routes
            apiRoutes = require('../routes/api/routes');
            apiRoutes.init(fncs, app);

            // ~ Add shop routes
            shopRoutes = require('../routes/shop/routes');
            shopRoutes.init(fncs, app);

            // ~ Add docs routes
            docsRoutes = require('../routes/docs/routes');
            docsRoutes.init(fncs, app);

            // ~ Add admin routes
            adminRoutes = require('../routes/admin/routes');
            adminRoutes.init(fncs, app);

            // ~ Default routes
            routes = require('./routes');
            routes.init(app);

            // ~ Return all functions
            return fncs;

        }());

        // ~ Run the server with the provided host and port.
        system.serve(host, port);

    }

};