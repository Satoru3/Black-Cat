const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame(" *help");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

// J'encule celui qui n'a pas de vie et qui à pris le token pour s'amuser, c'est cool de ban 150 membres, de supprimer des grades et des salons ?
// Malheureusement pour toi, j'avais heureusement laissé la perm assez bas, car je n'avais pas fini le bot. Trou du cul


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("```Liste des commandes disponibles : \n \n *8ball \n Le bot est actuellement en cours de développement.```");
    }
    
    if (message.content === "Salut"){
        message.reply("Bonjour à toi ! =)");
        console.log("La commande Salut à été effectuée.");
	    
    }
        
    if (message.content === prefix + "ruby"){
	 var embed = new.Discord.RichEmbed()
	     .setTitle("Ruby")
	     .setDescription("Ceci est un test pour Ruby")
	     .addField("Ruby")
	     .setFooter("Ceci était une commande de test")
	 message.channel.sendEmbed(embed);
    }
	
    if (message.content.startsWith("*sondage")){
    if (message.member.hasPermission("BAN_MEMBERS")) {
			
			let args = message.content.split(" ").slice(1);
			let thingToEcho = args.join(" ")
			var embed = new Discord.RichEmbed()
			    .setDescription('Sondage')
				.addField(thingToEcho, "Répondre avec :white_check_mark: ou :x: ! \n")
				.setColor("0xB40404")
				.setTimestamp()
			message.channel.sendEmbed(embed)
			.then(function (message){
				message.react("?")
				message.react("?")
			}).catch(function(){
				
			});
			message.delete()
		}else{
			return message.reply("Tu n'as pas la permission de faire ceci.")
        }
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
            .addField("Réponse :", reponse)
            .setFooter("Proposé par :")
            .setThumbnail(message.author.avatarURL)
            


        message.channel.sendEmbed(bembed)

}})
