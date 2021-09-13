const Discord = require ('discord.js');
const func = require ('./functions.js');

require('dotenv').config();
let fs = require(`fs`);

module.exports = {
    response: function (message, args) {
        if(!func.verifyParents(message)) return;
        
        var files = fs.readdirSync(process.env.IMAGES_PATH);

        function lista(item, indice) {
            files[indice] = "• "+files[indice].split(".")[0]+"\n";
        }

        files.forEach(lista);


        str_files = files.join("");

        const resposta = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setThumbnail('https://pa1.narvii.com/6315/a37f341618b5bdac177985706b4ea0f75e87ecff_00.gif')
        .setAuthor('Encontrei essas imagens:', 'https://emoji.gg/assets/emoji/7101_coloredepombos.gif')
        //.setTitle('Encontrei essas imagens:')
        .setDescription(`${str_files}`)
        .addFields(
            { name: '\u200B', value: '\u200B'},
            { name: 'Comandos Relacionados:', value: '\u200B'},
            { name: '!up [nome da imagem]', value: 'Adiciona uma nova imagem    ', inline: true },
            { name: '!view [nome da imagem]', value: 'Visualiza imagem dessa lista', inline: true },
        );
        message.channel.send(resposta);
    }
}