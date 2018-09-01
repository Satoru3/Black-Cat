const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Ma commande est *help");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);
