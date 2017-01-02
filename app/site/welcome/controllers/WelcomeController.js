'use strict';

module.exports = {

    init: function() {
        // Nothing to init.
    },

    renderWelcome:  function (req, res) {
        res.render('site/main');
    }

};