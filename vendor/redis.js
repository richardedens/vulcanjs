module.exports = {

    init: function () {

        // Redis connection
        var redis = require('redis'),
            utils = require('./utils');

        // Redis server connection
        redisClient = redis.createClient({
            host: utils.env('REDIS_HOST', '127.0.0.1'),
            port: utils.env('REDIS_PORT', 6379)
        });

    }

};