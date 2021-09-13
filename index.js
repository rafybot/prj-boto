require('dotenv').config();

const Discord = require ('discord.js');
const bot = new Discord.Client();
bot.login(process.env.DISCORDJS_BOT_TOKEN);

const func = require ('./src/functions.js');
const cmmd = require ('./src/commands.js');

bot.on('message', message => {
    if (message.author.bot) return;
    cmmd.response(message);
});