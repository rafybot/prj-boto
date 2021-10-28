const Discord = require ('discord.js');
const func = require ('./functions.js');

var requireFiles = require('require-file-directory');
var commandList = requireFiles.ScanAll('./src/commands');

require('dotenv').config();
let fs = require(`fs`);

const prefix = "-";


module.exports = {
    response: function(message) {
        //console.log(commandList);
        if (!message.content.startsWith(prefix)) {
            if(message.content.toLowerCase().includes('zim'))
                message.react('🧐');
            else
                return;
        }
        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();

        if (command in global && typeof global[command] === "function") global[command](message, args)
    }
};

global.list = function list(message, args) {
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

global.up = function up(message, args) {
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

global.view = function view(message, args) {
    if(!func.verifyParents(message)) return;
    
    var name = args[0];
    const resposta = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor(name, 'https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png');
    
    message.channel.send(resposta);
    message.channel.send({files:[process.env.IMAGES_PATH+name+".png"]});
}

global.oi = function oi(message, args) {
    const mensagens = [
        `Eae ${message.author} pprt tmj`,
        `OOOOO ${message.author} fala cmg nao fmz`,
        `o-oi.... vc vem sempre aqui ${message.author}?..... ><`,
        `oi ${message.author}.`,
        `vsf ${message.author}`
    ];
    message.react('👍');

    message.channel.send(mensagens[Math.floor(Math.random() * 4)]);
}

