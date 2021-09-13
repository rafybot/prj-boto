const Discord = require ('discord.js');
const func = require ('./functions.js');

require('dotenv').config();
let fs = require(`fs`);

module.exports = {
    response: function (message, args) {
        if(!func.verifyParents(message)) return;
        
        var name = args[0];
        const resposta = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setAuthor(name, 'https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png');
        
        message.channel.send(resposta);
        message.channel.send({files:[process.env.IMAGES_PATH+name+".png"]});
    }
}