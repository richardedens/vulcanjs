module.exports = {

    init: function (app) {

        var cookieParser = require('cookie-parser');
        app.use(cookieParser());

    }

};