module.exports = {

    encrypt: function (text, secret) {

        var utils, crypto, pos, encryptor, base64str, front, back, iv, complete;

        // Get dependencies.
        utils = require('./utils');
        crypto = require('crypto');

        // Create Hmac HEX and get 16 characters of it.
        iv = crypto.createHmac('sha256', utils.env('APP_KEY', 'still a secret'))
            .update(utils.env('APP_HMAC', 'VdBYmVJTGlGeFJLODkxZGFULzU1dllITmhEa2g3U1g'))
            .digest('hex')
            .substring(1,17);

        // Create an encryptor
        encryptor = crypto.createCipheriv('AES-256-CBC', secret.substring(1, 33), iv);

        // Encrypt the text.
        base64str = encryptor.update(text, 'utf8', 'base64') + encryptor.final('base64');

        // Create a random position to split the base64str.
        pos = Math.floor(Math.random() * 10);

        // Create front and back
        front = base64str.substr(0, pos);
        back = base64str.substr(pos, base64str.length);

        // Melt it all together as a fake base64 string.
        complete = (front + 'AAdFfUiFR' + iv + 'CLOkdERGWws' + back);

        // Return a proper base64 string.
        return (new Buffer(complete).toString('base64'));
    },

    decrypt: function (encryptedMessage, secret) {

        var utils, crypto, step0, step1, step2, parts, code, iv, decryptor;

        // Dependencies.
        utils = require('./utils');
        crypto = require('crypto');

        // Decode and get the parts.
        step0 = Buffer.from(encryptedMessage, 'base64').toString("utf8");
        step1 = step0.replace('AAdFfUiFR','::');
        step2 = step1.replace('CLOkdERGWws','::');
        parts = step2.split('::');

        // Get the to be decoded base64 string
        code = parts[0] + parts[2];

        // Get the IV.
        iv = parts[1];

        // Create the decryptor.
        decryptor = crypto.createDecipheriv('AES-256-CBC', secret.substring(1, 33), iv);

        // Decrypt.
        return decryptor.update(code, 'base64', 'utf8') + decryptor.final('utf8');
    },

    init: function (express, host, port) {
    }

};