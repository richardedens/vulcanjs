/*global require */
'use strict';

/**********************************************************************************************
 *
 * VulcanJS
 *
 * Is an Open Source NodeJS application development platform.
 * Developed on top of several JavaScript NodeJS libraries to create a modern
 * web- application.
 *
 * Based on NodeJS, MongoDB, Express, Redis, TWIG, ACL, Helmet, Lusca, Winston, Passport.
 *
 *********************************************************************************************/

// All modules.
require('dotenv').config();
var config = require('./config');
var utils = require('./vendor/utils');
var mongodb = require('./vendor/mongodb');
var express = require('./vendor/express');

// All errors are processed.
config.init();

// Attach all possible errors.
utils.errors();

// Now this is loaded
if (require.main === module) {
    mongodb.init(express, 'localhost', '8000');
} else {
    module.exports = {
        serve: function (host, port) {
            mongodb.init(express, host, port);
        }
    };
}
