const Discord = require ('discord.js');
const func = require ('./functions.js');

require('dotenv').config();
let fs = require(`fs`);

module.exports = {
    response: function (message, args) {
        if(!func.verifyParents(message)) return;
    
        var name = args[0];

        var resposta = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor(`${name} não foi enviado.`, 'https://emoji.gg/assets/emoji/6676_notlikeblob.png');

        if (message.attachments.size > 0) {
            func.download(message.attachments.first().url, (name+".png"));

            resposta = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor(`${name} enviado!`, 'https://emoji.gg/assets/emoji/7101_coloredepombos.gif');
        }

        message.channel.send(resposta);
    }
}