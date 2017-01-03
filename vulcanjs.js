var md5 = require('md5'),
    chalk = require('chalk'),
    host = 'localhost',
    port = '8000',
    data = '';

// ~ Load the .env into the environment.
require('dotenv').config();

// ~ Go threw all argv arguments.
process.argv.forEach(function (val, index, array) {
    if (val === '--host') {
        host = array[(index+1)];
    }

    if (val === '--port') {
        port = array[(index+1)];
    }

    if (val === '--data') {
        data = array[(index+1)];
    }
});

// ~ Go threw all argv arguments.
process.argv.forEach(function (val, index, array) {

    var utils = require('./vendor/utils');

    // ~ Serve
    if (val === 'serve') {
        var server = require('./server');
        server.serve(host, port);
    }

    // ~ Generate an encryption key
    if (val === 'key:generate') {
        console.log(chalk.green('Key: ' + md5('thisissocool' + +new Date())));
    }

    // ~ Generate a password
    if (val === 'password:generate') {
        var generator = require('generate-password'),
            password = generator.generate({
                length: 15,
                numbers: true
            });
        console.log(chalk.green('Password: ' + password));
    }

    // ~ Encrypt something
    if (val === 'encrypt') {
        var encrypt = require('./vendor/security');
        console.log(chalk.green('Encrypted: ' + encrypt.encrypt(data, utils.env('APP_KEY', 'XRvN09qWHVxKzZuYWNxY1hpRVZLR1AvS'))));
    }

    // ~ Decrypt something
    if (val === 'decrypt') {
        var decrypt = require('./vendor/security');
        console.log(chalk.green('Encrypted: ' + decrypt.decrypt(data, utils.env('APP_KEY', 'XRvN09qWHVxKzZuYWNxY1hpRVZLR1AvS'))));
    }

});