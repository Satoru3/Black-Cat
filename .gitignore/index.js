const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame(" *help");
    console.log("Connecté");
});

bot.login("NDMwMzQ4Mjk0NzgzMjM4MTQ0.DaRbaQ.F0RKMfMMs3wFg69Pvwg1iGRDgaU");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("```Liste des commandes disponibles : \n \n *8ball \n Le bot est actuellement en cours de développement.```");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "roll":
            var roll = Math.floor(Math.random() * args[1]) +1;
            if (!roll) return message.reply("Entre un numéro =)")
            message.channel.send("Je choisis le numéro " + roll + " !");
            break;
        case "8ball":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.reply("Merci de me poser une question ! :P :8ball:")};

            var replys = [
                "Oui",
                "Non",
                "Je ne sais pas",
                "Peut-être",
                "Jamais !",
                "Avec plaisir !"
            ];

            let reponse = replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(":8ball: 8ball")
            .addField("Question :", tte)
            .addField("Réponse :", reponse)
        message.channel.sendEmbed(bembed)
