const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Ma commande est *help");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Page d'aide")
            .setDescription("En construction")
            .addField("*help","Cette commande sert à faire apparaître cette page.", true)
            .addField("*8ball","Petite commande pour s'amuser à poser des questions à la boule ;)", true)
            .setColor("0xf55b1b")
            .setFooter("Bonne journée sur Knights Chronicle FR ! =)")
            .setThumbnail("https://image.prntscr.com/image/7_rvKMCDSQqIGx4GJo0s5Q.png")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "ruby"){
        var lembed = new Discord.RichEmbed()
            .setTitle("Ruby")
            .setDescription("Voici un petit résumé de Ruby, et de ses performances !")
            .addField("z", true)
            .addField("*8ball","Petite commande pour s'amuser à poser des questions à la boule ;)", true)
            .setColor("0xf55b1b")
            .setFooter("Bonne journée sur Knights Chronicle FR ! =)"
            .setThumbnail("https://image.prntscr.com/image/7_rvKMCDSQqIGx4GJo0s5Q.png")
        message.channel.sendEmbed(lembed);
    }

    if (message.content === "Salut"){
        message.reply("Bonjour à toi ! =)");
        console.log("La commande Salut à été effectuée.");  
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
