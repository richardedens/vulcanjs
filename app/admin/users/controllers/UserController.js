'use strict';

module.exports = {

    init: function () {
    },

    renderGetUsers: function(req, res) {
        var mongoose = require('mongoose'),
            User = mongoose.model('User');

        User.find({}, function(err, users) {
            res.render('admin/users/main', {
                users: users
            });
        });
    }

};