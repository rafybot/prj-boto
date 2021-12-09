const Discord = require ('discord.js');
const func = require ('../functions.js');

require('dotenv').config();
let fs = require(`fs`);

module.exports = {
    response: function (message, args) {
        if(!func.verifyParents(message)) return;
        
        var files = (!args[0]) ? fs.readdirSync(process.env.IMAGES_PATH) : fs.readdirSync(process.env.IMAGES_PATH+args[0]);

        function lista(item, indice) {
            files[indice] = (files[indice].startsWith('.')) ? "" : "• "+files[indice].split(".")[0]
            +((!args[0]) ?
                " - "
                +(fs.readdirSync(process.env.IMAGES_PATH+files[indice]).length)
                +" arquivo(s)"
                : ""
            )
            +" \n";
        }

        files.forEach(lista);


        str_files = files.join("");

        const resposta = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setThumbnail('https://pa1.narvii.com/6315/a37f341618b5bdac177985706b4ea0f75e87ecff_00.gif')
        .setAuthor('Encontrei '+ ((!args[0]) ? 'essas categorias:' : 
        'esses arquivos em '+args[0].toUpperCase()+':'), 'https://emoji.gg/assets/emoji/7101_coloredepombos.gif')
        .setDescription(`${str_files}`)
        .addFields(
            { name: '\u200B', value: '\u200B'},
            { name: 'Comandos Relacionados:', value: '\u200B'},
            { name: '-up [categoria] [nome da imagem]', value: 'Adiciona um novo arquivo a uma categoria    ', inline: true },
            { name: '-list [categoria]', value: 'Lista arquivos existentes em uma categoria    ', inline: true },
            { name: '-view [categoria] [nome da imagem]', value: 'Visualiza arquivo da categoria', inline: true },
        );
        message.channel.send(resposta);
    }
}