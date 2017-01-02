var md5 = require('md5'),
    chalk = require('chalk'),
    host = 'localhost',
    port = '8000';

// ~ Go threw all argv arguments.
process.argv.forEach(function (val, index, array) {
    if (val === '--host') {
        host = array[(index+1)];
    }

    if (val === '--port') {
        port = array[(index+1)];
    }
});

// ~ Go threw all argv arguments.
process.argv.forEach(function (val, index, array) {

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

});