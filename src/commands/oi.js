const Discord = require ('discord.js');

module.exports = {
    response: function (message, args) {
        const mensagens = [
            `Eae ${message.author} pprt tmj`,
            `OOOOO ${message.author} fala cmg nao fmz`,
            `o-oi.... vc vem sempre aqui ${message.author}?..... ><`,
            `oi ${message.author}.`,
            `vsf ${message.author}`
        ];

        message.channel.send(mensagens[Math.floor(Math.random() * 4)]);
    }
}