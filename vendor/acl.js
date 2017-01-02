module.exports = {

    init: function (app, mongoose) {

        var acl = require('acl');
        acl = new acl(new acl.mongodbBackend(mongoose.connection));

        return acl;

    }

};