'use strict';

module.exports = {

    init: function () {
    },

    getAPIVersion: function(req, res){
        res.send({ 'success':'true', 'version': '1.0.0' });
    }

};