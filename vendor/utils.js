var chalk = require('chalk');

module.exports = {

    errors: function() {
        // Catch every error
        process.on('uncaughtException', function (err) {
            console.log(chalk.red('Whoops!: ' + err));
        });
    },

    console: {
        log: function(msg) {
            console.log(chalk.green(msg));
        },
        info: function(msg) {
            console.log(chalk.yellow(msg));
        },
        warning: function(msg) {
            console.log(chalk.orange(msg));
        },
        error: function(msg) {
            console.log(chalk.red(msg));
        }
    },

    env: function(str, def){
        return (typeof process.env[str] !== 'undefined' && process.env[str] !== '') ? process.env[str] : def;
    }

}