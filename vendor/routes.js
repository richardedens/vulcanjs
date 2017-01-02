module.exports = {

    init: function (app) {

        // Default page when nothing hits a url.
        app.get('*', function (req, res) {
            res.render('layouts/404');
        });

    }

};