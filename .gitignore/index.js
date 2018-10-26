const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("ma commande est *help");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Page d'aide** :black_small_square:")
            .setDescription("Voici les différentes catégories de la page d'aide")
            .addField("__**Modération**__","`*kick`",, true)
            .addField("__**Utilitaires**__","`*help`", true)
            .addField("__**Fun**__","`*8ball`|`*avatar`", true)
            .addField("__**Jeux**__","`*help kc`", true)
            .setColor("RANDOM")
            .setFooter("Page d'aide générée suite à une demande de"+" "+ message.author.username)
            .setThumbnail("https://image.prntscr.com/image/7_rvKMCDSQqIGx4GJo0s5Q.png")
        message.channel.sendEmbed(embed);
    }
	
    if (message.content === prefix + "ruby"){
        var embed = new Discord.RichEmbed()
	    .setTitle(":black_small_square: **Ruby** :black_small_square:")
	    .setDescription("Une commande d'aide sur l'Héroïne Ruby")
            .addField("__Compétence 1__","Blablabla", true)
	    .setImage("https://image.prntscr.com/image/9ymXlBV3QhGkc_Ek1whRFw.png")
	    .addField("__Compétence 2__","Blablalblalbal", true)
	    .addField("__Compétence 3__","Blabkalblabla", true)
	    .setColor("RANDOM")
	    .setFooter("Page de l'Héroïne Ruby générée suite à une demande de"+" "+ message.author.username)
	    .setThumbnail("https://cdn.discordapp.com/attachments/432232468465188874/505159626459840512/H6rbMsZcmISiAAAAAElFTkSuQmCC.png")
	message.channel.sendEmbed(embed);
	    
    }
	
    if (message.content === prefix + "avatar"){
      let user = message.mentions.users.first() || message.author;
      var embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Voici l'avatar de :" + " " + user.username)
          .setImage(user.displayAvatarURL)
      message.channel.sendEmbed(embed);

    }	

    if (message.content === "Salut"){
        message.reply("Bonjour à toi ! =)");
        console.log("La commande Salut à été effectuée.");  
    }
    
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "8ball":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.reply("Pose moi une question ! :8ball:")};

            var replys = [
                "Oui"+" " + message.author.username,
                "Non"+" " + message.author.username,
                "Peut-être"+" " + message.author.username,
                "Je ne sais pas"+" " + message.author.username + "!",
                "Sûrement"+" " + message.author.username + "...",
                "Bien sûr"+" " + message.author.username + "!",
		"Bien entendu"+" " + message.author.username,
		"Es-tu fou"+" " + message.author.username + "?!",
                "Absolument pas"+" " + message.author.username + "!",
            ];

            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(":8ball: 8ball")
            .addField("Question :", tte)
            .addField("Réponse :", reponse)
            .setThumbnail(message.author.avatarURL)
	    .setFooter("Demandé par "+" "+ message.author.username)
            


        message.channel.sendEmbed(bembed)

}})
