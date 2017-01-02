module.exports = {

    init: function (app) {
        flash = require('connect-flash');
        app.use(flash());
    }

};
