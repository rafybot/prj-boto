const Discord = require ('discord.js');

require('dotenv').config();

let request = require(`request`);
let fs = require(`fs`);

const parents = [
    '461288735410225153',
    '691463741153476639'
];

module.exports = {
    download: function (url, category, name){
        if(!fs.existsSync(process.env.IMAGES_PATH+category)) fs.mkdirSync(process.env.IMAGES_PATH+category, { recursive: true });
        request.get(url)
            .on('error', console.error)
            .pipe(fs.createWriteStream(process.env.IMAGES_PATH+category+'/'+name));
    },

    verifyParents: function(message){
        if (!parents.includes(message.author.id)) {
            message.channel.send("[ :x: ] Você não tem permissão para utilizar esse comando!");
            return false;
        }
        return true;
    }
}