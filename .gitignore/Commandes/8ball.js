const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = ("*");
const YTDL = require("ytdl-core");
bot.login(process.env.TOKEN);

bot.on("ready", function() {
    console.log("Connecté");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "roll":
            var roll = Math.floor(Math.random() * args[1]) +1;
            if (!roll) return message.reply("Entre un numéro !")
            message.channel.send("Je choisis le numéro" + roll + " !");
            break;
        case "8ball":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.reply("Pose moi une question ! :8ball:")};

            var replys = [
                "Oui",
                "Non",
                "Peut-être",
                "Je ne sais pas !",
                "Sûrement...",
                "Bien sûr !",
                "Absolument pas !"
            ];

            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(":8ball: 8ball")
            .addField("Question :", tte)
            .addField("Réponse:", reponse)
        message.channel.sendEmbed(bembed)

}})
