module.exports = {

    init: function (app) {

        var utils = require('./utils'),
            multer = require('multer');

        return multer({ dest: utils.env('MULTER_UPLOAD_PATH', './storage/uploads/')});

    }

};