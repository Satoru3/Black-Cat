const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connecté");
});

bot.login("NDMwMzQ4Mjk0NzgzMjM4MTQ0.DaRbaQ.F0RKMfMMs3wFg69Pvwg1iGRDgaU");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("'''Liste des commandes disponibles : \n \n Le bot est actuellement en cours de développement.");
    }
});
