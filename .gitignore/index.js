const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("*help | V.2.0 |");
    console.log("Connecté avec succès.");
});

bot.login(process.env.TOKEN);
