module.exports = {

    init: function (app) {

        var compression = require('compression');

        app.use(compression( {
            filter: function (req, res) {
                if (req.headers['x-no-compression']) {
                    return false
                }
                return compression.filter(req,res);
            },
            level: 9
        }));

    }

};