const Discord = require ('discord.js');
const func = require ('./functions.js');
const commandsPath = require('commands');

require('dotenv').config();
let fs = require(`fs`);

//var requireFiles = require('require-file-directory');
const PREFIX = "-";


module.exports = {
    response: function(message) {
        if (!message.content.startsWith(PREFIX)) {
            if(message.content.toLowerCase().includes('zim'))
                message.react('🧐');
            else
                return;
        }
        const commandBody = message.content.slice(PREFIX.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();

        try {
            require('./commands/'+command+'.js').response(message, args);
        } catch(e) {
            return;
        }
    }
};

