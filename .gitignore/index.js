const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setActivity("$help | V 0.14 [10/09] | $màj pour les détails.");

    console.log("Je suis connecté !");

});

bot.login(process.env.TOKEN);

bot.on('message', async message => {
    if (message.content === prefix + "help"){ //Commande d'aide
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Page d'aide** :black_small_square:")
            .setDescription("Voici les différentes catégories de la page d'aide")
            .addField("__**Modération**__","`$kick` \n `$ban` \n `$purge` \n `$mute` (Arrive septembre)", true)
            .addField("__**Utilitaires**__","`$help` \n `$botinfos` \n ~~$userinfos~~ \n `$màj`", true)
            .addField("__**Fun**__","`$26ball` \n `$avatar` \n `$say` \n `~~$quizz~~` \n `quisuisje`", true)
            .addField("__**Hero Cantare**__","`$héros` \n ~~$tierlist~~ \n `$ee`", true)
            .setColor("RANDOM")
            .setFooter(`Page d'aide générée suite à une demande de ${message.author.tag}`)
            .setThumbnail("")
        message.channel.sendEmbed(embed);
        console.log("Page d'aide générée suite à la demande de " + message.author.username);
	    	
    }

    if (message.content === prefix + "héros"){ //Commande relative aux personnages d'Hero Cantare
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Personnages** :black_small_square:")
	    .setDescription("Le bot est sensible à la casse, merci d'écrire toutes vos commandes en minuscule pour le moment.")
            .addField("<:ss:719641320343470150> <:nature:719638081195475114>","**Kaiser** <:competence:719638081162051585> ($kaiser) \n **Seira** <:weapon:719781844744142875> ($seira)", true)
            .addField("<:ss:719641320343470150> <:ice:719781844949925898>","**Elaine** <:weapon:719781844744142875> ($elaine) \n **Jyu Viole Grace** <:artmartiaux:723903194819985459> ($viole) \n **Pure Green Arin** <:element:724668549028905073> ($ss arin) \n **Clan Leader Seira** <:competence:719638081162051585> ($cl seira) \n **Urek Mazino** <:competence:719638081162051585> ($urek)", false)
            .addField("<:ss:719641320343470150> <:feu:719638080780501073>","**Prime King Uma** <:competence:719638081162051585> ($pku) \n **Max Level Warrior** <:weapon:719781844744142875> ($mlw) \n **Yeon's Flame Khun** <:element:724668549028905073> ($flame khun) \n **Nine Tails Ilpyo Park** <:element:724668549028905073> ($nine tails)", false)
            .addField("<:ss:719641320343470150> <:dark:723941756109979760>","**Queen No Name** <:dieu:723941755996733583> ($qnn) \n **Unleashed Raizel** <:dieu:723941755996733583> ($unleashed) \n **Witch of the West** <:weapon:719781844744142875> ($witch)", false)
            .addField("<:ss:719641320343470150> <:light:746561115395326013>","**Black-March Bam** <:evil:724805535727353856> ($bm bam) \n **Endorsi** <:artmartiaux:723903194819985459> ($endorsi) \n **Jinsung Ha** <:artmartiaux:723903194819985459> ($jinsung)", false)
	    .addField("<:s_:724831181341720586>","**Frankenstein** <:feu:719638080780501073> <:element:724668549028905073> ($frankenstein) \n **Muzaka** <:nature:719638081195475114> <:artmartiaux:723903194819985459> ($muzaka) \n **M-21** <:nature:719638081195475114> <:competence:719638081162051585> ($m-21)")
            .addField("<:a_:724817244789538819>","**Raizel** <:ice:719781844949925898> <:evil:724805535727353856> ($raizel)")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.14 | Devenez plus fort, et grimpez la tour, "+ message.author.username)
            .setThumbnail("https://i.imgur.com/kwMfqwu.png")
	message.channel.sendEmbed(embed);
        console.log("Page des personnages générée suite à une demande de " + message.author.username);

    }
	
        if (message.content === prefix + "ee"){ //Commande relative aux artefacts d'Epic Seven
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Équipements exclusifs** :black_small_square:")
	    .setDescription("Pour l'instant, le bot est sensible à la casse, merci d'écrire toutes vos commandes en minuscule.")
            .addField("<:feu:719638080780501073>","➤ **Max Level Warrior** (__Épée du dragon rouge__ | $ee mlw) \n ➤ **God-Killer Zero** (__Lance de l'obscurité totale__ | $ee gk0) \n ➤ **Maschenny** (__Lance de la sérénité__ | $ee maschenny)", true)
            .addField("<:ice:719781844949925898>","➤ **Master Pooh Upooh** (__Parchemin du Roi des Fées__ | $ee mpu) \n ➤ **Urek Mazino** (__Ensemble à capuche noir__ | $ee urek)", false)
	    .addField("<:nature:719638081195475114>","➤ **Actuellement aucun équipement exclusif**", false)
	    .addField("<:light:746561115395326013>","➤ **Black-March Bam** (__Ailes de l'Animal Sacré Transformé__ | $ee bm bam) \n ➤ **Endorsi** (__Coeur Bong-Bong__ | $ee endorsi)", false)
	    .addField("<:dark:723941756109979760>","➤ **Hilda** (__Familier dimensionnel__ | $ee hilda) \n ➤ **Witch of the West Mira Yoo** (__Épée secrète__ | $ee witch)", false)
            .addField("Commande ajoutées, mais incomplètes","➤ **Idol Rockcrawler** (__Scène d'Amour__ | $ee idol) \n ➤ **Daisy** (__Chapeau de pique-nique__ | $ee daisy) \n ➤ **Odette** (__Lance de la lumière__ | $ee odette)", false)
	    .addField("À venir","➤ **No-Name**", false)
	    .setColor("RANDOM")
            .setFooter("Khun Ran v0.14 | Avancez, évoluez, et combattez pour devenir le meilleur d'Hero Cantare!")
            .setThumbnail("https://i.imgur.com/v9syQKz.gif")
	message.channel.sendEmbed(embed);
        console.log("Page des équipemens exclusifs générés suite à la demande de " + message.author.username);
		
    }


   if (message.content === prefix + "màj"){
       var embed = new Discord.RichEmbed()
           .setTitle("Récapitulatif de la mise à jour 0.14 du 10/09")
           .addField("__**Correction(s)**__","➤ Aucune.")
           .addField("__**Modification(s)**__","➤ Statistiques de M-21 & Black-March Bam supprimées. (Les autres suivront.) \n ➤ Ajout de Witch of the West Mira Yoo & Green-April Yuri Ha dans le $quisuisje (37 personnages actuellement) \n ➤ Ajout de l'alias $h pour la commande $héros")
           .addField("__**Ajout(s) de héros / équipements exclusifs**__", "➤ Green-April Yuri Ha \n ➤ Witch of the West Mira Yoo \n ➤ Équipement exclusif de Witch of the West Mira Yoo")
           .addField("__**Nouvelle(s) commande(s)**__","➤ $costume")
        message.channel.sendEmbed(embed);
	   
    }
	
	    if (message.content === prefix + "ga yuri ha"){
        var embed = new Discord.RichEmbed()
        .setTitle("Green-April Yuri Ha :black_small_square: <:dark:723941756109979760> :black_small_square: <:weapon:719781844744142875> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Witch of the West __Mira Yoo__ est une des protagonistes de The God of Highschool.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.14 | Entraînez-vous, empruntez les pouvoirs des dieux, et remportez les tournois, participants !")
        .setThumbnail("https://i.imgur.com/AkERziq.png")
        .setImage("https://i.imgur.com/7aidUnp.png")
        .addField(":speech_balloon: Citation", "Je dois protéger l'épée de ma famille ! As-tu déjà eu ce genre de responsabilité ?", false)
        .addField("<:c1:719664266797383680> Coup unique", "Attaque l'adversaire ayant l'ATQ la plus élevée avec [125% de l'ATQ] et a 80% de chance d'infliger 1 [**Poison**] égal à [30% de l'ATQ] pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Style de l'épée Lunaire: Clair de lune éternel", "Attaque un adversaire de la ligne arrière et un de la ligne avant avec [130% de l'ATQ] et étend le(s) [**Poison** / **Brûlure**/ **Saignement**] appliqué(s) sur l'adversaire pendant 2 tours. Si l'adversaire est déjà empoisonné, lui inflige un [**Poison**] additionnel pour [30% de l'ATQ] pendant 2 tours. Augmente les [**Chances de coup critique de 30%**] pendant 2 tours.", false)
        .addField("<:c3:719664266776412160> Malédiction de la Sorcière", "Attaque tous les adversaires avec [135% de l'ATQ] et inflige 5 [**Poisons**] pour [30% de l'ATQ] chacun. Inflige jusqu'à 100% de dégâts additionnels en fonction de la réduction du nombre d'adversaires.", false)
        .addField("<:passif:719664266969612379> 1: Le corps du Roi", "Augmente l'attaque de 15%, les dégâts coup critique de 25%, la santé de 5% et la résistance aux malus de 30%.", false)
        .addField("<:passif:719664266969612379> 2: Berserker", "Accumule un bonus de [25% d'ATQ] et [10% de réduction de dégâts] à chaque fois que la santé actuelle passe le palier des 80/60/40/20%.", false)
        .addField("<:sp:720742202757873745> Trésor national: Lame de Tathagata", "Attaque tous les adversaires avec [130% de l'ATQ] et fait exploser tous les [**Poison**] appliqués aux adversaires pour leur infliger 50% de dégâts supplémentaires pour chaque [**Poison**].", false)

	
    message.channel.sendEmbed(embed)
	    
	var bembed = new Discord.RichEmbed()
            .setTitle("Costume")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Witch of the West Mira Yoo")
            .setThumbnail("https://i.imgur.com/SU71npQ.png")
            .setImage("https://i.imgur.com/q3aDAB3.png")
            .setDescription("Obtient [**Immortalité**] pendant 1 tour avec ?% de chances. (S'active 1x) \n \n **Statistique améliorée:** Précision des malus.")
	message.channel.sendEmbed(bembed)
	    
	        console.log("La commande de l'Héroïne Witch of the West Mira Yoo viens d'être effectuée.");

	    
    }
	
	    if (message.content === prefix + "witch of the west mira yoo"){
        var embed = new Discord.RichEmbed()
        .setTitle("Witch of the West Mira Yoo :black_small_square: <:dark:723941756109979760> :black_small_square: <:weapon:719781844744142875> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Witch of the West __Mira Yoo__ est une des protagonistes de The God of Highschool.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.14 | Entraînez-vous, empruntez les pouvoirs des dieux, et remportez les tournois, participants !")
        .setThumbnail("https://i.imgur.com/AkERziq.png")
        .setImage("https://i.imgur.com/7aidUnp.png")
        .addField(":speech_balloon: Citation", "Je dois protéger l'épée de ma famille ! As-tu déjà eu ce genre de responsabilité ?", false)
        .addField("<:c1:719664266797383680> Coup unique", "Attaque l'adversaire ayant l'ATQ la plus élevée avec [125% de l'ATQ] et a 80% de chance d'infliger 1 [**Poison**] égal à [30% de l'ATQ] pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Style de l'épée Lunaire: Clair de lune éternel", "Attaque un adversaire de la ligne arrière et un de la ligne avant avec [130% de l'ATQ] et étend le(s) [**Poison** / **Brûlure**/ **Saignement**] appliqué(s) sur l'adversaire pendant 2 tours. Si l'adversaire est déjà empoisonné, lui inflige un [**Poison**] additionnel pour [30% de l'ATQ] pendant 2 tours. Augmente les [**Chances de coup critique de 30%**] pendant 2 tours.", false)
        .addField("<:c3:719664266776412160> Malédiction de la Sorcière", "Attaque tous les adversaires avec [135% de l'ATQ] et inflige 5 [**Poisons**] pour [30% de l'ATQ] chacun. Inflige jusqu'à 100% de dégâts additionnels en fonction de la réduction du nombre d'adversaires.", false)
        .addField("<:passif:719664266969612379> 1: Le corps du Roi", "Augmente l'attaque de 15%, les dégâts coup critique de 25%, la santé de 5% et la résistance aux malus de 30%.", false)
        .addField("<:passif:719664266969612379> 2: Berserker", "Accumule un bonus de [25% d'ATQ] et [10% de réduction de dégâts] à chaque fois que la santé actuelle passe le palier des 80/60/40/20%.", false)
        .addField("<:sp:720742202757873745> Trésor national: Lame de Tathagata", "Attaque tous les adversaires avec [130% de l'ATQ] et fait exploser tous les [**Poison**] appliqués aux adversaires pour leur infliger 50% de dégâts supplémentaires pour chaque [**Poison**].", false)

	
    message.channel.sendEmbed(embed)
	    
	var bembed = new Discord.RichEmbed()
            .setTitle("Épée secrète")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Witch of the West Mira Yoo")
            .setThumbnail("https://i.imgur.com/SU71npQ.png")
            .setImage("https://i.imgur.com/q3aDAB3.png")
            .setDescription("Obtient [**Immortalité**] pendant 1 tour avec ?% de chances. (S'active 1x) \n \n **Statistique améliorée:** Précision des malus.")
	message.channel.sendEmbed(bembed)
	
	const agree = "❤";
		    
	let msg = await message.channel.send("Peut-être cherches-tu sa relique exclusive, Witch of the West (Sorcière de l'Ouest) ? Si oui, réagis à cette émoticône dans les 15 secondes qui suivent.");
	await msg.react(agree);

	var cembed = new Discord.RichEmbed()
            .setTitle("Witch of the West (Sorcière de l'Ouest)")
            .setColor("RANDOM")
	    .setFooter("Relique exclusive de Witch of the West Mira Yoo")
            .setThumbnail("https://i.imgur.com/SU71npQ.png")
            .setImage("https://i.imgur.com/q3aDAB3.png")
            .setDescription("Obtient [**Immortalité**] pendant 1 tour avec ?% de chances. (S'active 1x) \n \n **Statistique améliorée:** Précision des malus.")
		    
	const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree, {time: 15000});
	message.channel.sendEmbed(cembed)
		    
	    
	        console.log("La commande de l'Héroïne Witch of the West Mira Yoo viens d'être effectuée.");

	    
    }
	
		    if (message.content === prefix + "witch"){
        var embed = new Discord.RichEmbed()
        .setTitle("Witch of the West Mira Yoo :black_small_square: <:dark:723941756109979760> :black_small_square: <:weapon:719781844744142875> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Witch of the West __Mira Yoo__ est une des protagonistes de The God of Highschool.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.14 | Entraînez-vous, empruntez les pouvoirs des dieux, et remportez les tournois, participants !")
        .setThumbnail("https://i.imgur.com/AkERziq.png")
        .setImage("https://i.imgur.com/7aidUnp.png")
        .addField(":speech_balloon: Citation", "Je dois protéger l'épée de ma famille ! As-tu déjà eu ce genre de responsabilité ?", false)
        .addField("<:c1:719664266797383680> Coup unique", "Attaque l'adversaire ayant l'ATQ la plus élevée avec [125% de l'ATQ] et a 80% de chance d'infliger 1 [**Poison**] égal à [30% de l'ATQ] pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Style de l'épée Lunaire: Clair de lune éternel", "Attaque un adversaire de la ligne arrière et un de la ligne avant avec [130% de l'ATQ] et étend le(s) [**Poison** / **Brûlure**/ **Saignement**] appliqué(s) sur l'adversaire pendant 2 tours. Si l'adversaire est déjà empoisonné, lui inflige un [**Poison**] additionnel pour [30% de l'ATQ] pendant 2 tours. Augmente les [**Chances de coup critique de 30%**] pendant 2 tours.", false)
        .addField("<:c3:719664266776412160> Malédiction de la Sorcière", "Attaque tous les adversaires avec [135% de l'ATQ] et inflige 5 [**Poisons**] pour [30% de l'ATQ] chacun. Inflige jusqu'à 100% de dégâts additionnels en fonction de la réduction du nombre d'adversaires.", false)
        .addField("<:passif:719664266969612379> 1: Le corps du Roi", "Augmente l'attaque de 15%, les dégâts coup critique de 25%, la santé de 5% et la résistance aux malus de 30%.", false)
        .addField("<:passif:719664266969612379> 2: Berserker", "Accumule un bonus de [25% d'ATQ] et [10% de réduction de dégâts] à chaque fois que la santé actuelle passe le palier des 80/60/40/20%.", false)
        .addField("<:sp:720742202757873745> Trésor national: Lame de Tathagata", "Attaque tous les adversaires avec [130% de l'ATQ] et fait exploser tous les [**Poison**] appliqués aux adversaires pour leur infliger 50% de dégâts supplémentaires pour chaque [**Poison**].", false)

	
    message.channel.sendEmbed(embed)
	    
	var bembed = new Discord.RichEmbed()
            .setTitle("Épée secrète")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Witch of the West Mira Yoo")
            .setThumbnail("https://i.imgur.com/SU71npQ.png")
            .setImage("https://i.imgur.com/q3aDAB3.png")
            .setDescription("Obtient [**Immortalité**] pendant 1 tour avec ?% de chances. (S'active 1x) \n \n **Statistique améliorée:** Précision des malus.")
	message.channel.sendEmbed(bembed)

		var cembed = new Discord.RichEmbed()
		    .setDescription("Tu cherches la relique exclusive **Witch of the West** de ce personnage ? Réagis à l'émoticône 👍")
		    message.channel.sendEmbed(cembed)
		
			    
                    // Reacts so the user only have to click the emojis
                    message.react('👍').then(r => {
                            message.react('👎');
                    });
			    
	var dembed = new Discord.RichEmbed()
            .setTitle("Épée secrète")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Witch of the West Mira Yoo")
            .setThumbnail("https://i.imgur.com/SU71npQ.png")
            .setImage("https://i.imgur.com/q3aDAB3.png")
            .setDescription("Obtient [**Immortalité**] pendant 1 tour avec ?% de chances. (S'active 1x) \n \n **Statistique améliorée:** Précision des malus.")

                    // First argument is a filter function
                    message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                            { max: 1, time: 15000 }).then(collected => {
                                    if (collected.first().emoji.name == '👍') {
                                            message.channel.sendEmbed(dembed);
                                    }
                                    else
                                            message.reply('Apparition de la relique exclusive refusée.');
                            }).catch(() => {
                                    message.reply("Aucune réaction après 15 secondes, il n'est désormais plus possible de réagir.");
                            });
	    
	        console.log("La commande de l'Héroïne Witch of the West Mira Yoo viens d'être effectuée.");

	    
    }
	
		    if (message.content === prefix + "witch mira"){
        var embed = new Discord.RichEmbed()
        .setTitle("Witch of the West Mira Yoo :black_small_square: <:dark:723941756109979760> :black_small_square: <:weapon:719781844744142875> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Witch of the West __Mira Yoo__ est une des protagonistes de The God of Highschool.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.14 | Entraînez-vous, empruntez les pouvoirs des dieux, et remportez les tournois, participants !")
        .setThumbnail("https://i.imgur.com/AkERziq.png")
        .setImage("https://i.imgur.com/7aidUnp.png")
        .addField(":speech_balloon: Citation", "Je dois protéger l'épée de ma famille ! As-tu déjà eu ce genre de responsabilité ?", false)
        .addField("<:c1:719664266797383680> Coup unique", "Attaque l'adversaire ayant l'ATQ la plus élevée avec [125% de l'ATQ] et a 80% de chance d'infliger 1 [**Poison**] égal à [30% de l'ATQ] pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Style de l'épée Lunaire: Clair de lune éternel", "Attaque un adversaire de la ligne arrière et un de la ligne avant avec [130% de l'ATQ] et étend le(s) [**Poison** / **Brûlure**/ **Saignement**] appliqué(s) sur l'adversaire pendant 2 tours. Si l'adversaire est déjà empoisonné, lui inflige un [**Poison**] additionnel pour [30% de l'ATQ] pendant 2 tours. Augmente les [**Chances de coup critique de 30%**] pendant 2 tours.", false)
        .addField("<:c3:719664266776412160> Malédiction de la Sorcière", "Attaque tous les adversaires avec [135% de l'ATQ] et inflige 5 [**Poisons**] pour [30% de l'ATQ] chacun. Inflige jusqu'à 100% de dégâts additionnels en fonction de la réduction du nombre d'adversaires.", false)
        .addField("<:passif:719664266969612379> 1: Le corps du Roi", "Augmente l'attaque de 15%, les dégâts coup critique de 25%, la santé de 5% et la résistance aux malus de 30%.", false)
        .addField("<:passif:719664266969612379> 2: Berserker", "Accumule un bonus de [25% d'ATQ] et [10% de réduction de dégâts] à chaque fois que la santé actuelle passe le palier des 80/60/40/20%.", false)
        .addField("<:sp:720742202757873745> Trésor national: Lame de Tathagata", "Attaque tous les adversaires avec [130% de l'ATQ] et fait exploser tous les [**Poison**] appliqués aux adversaires pour leur infliger 50% de dégâts supplémentaires pour chaque [**Poison**].", false)

	
    message.channel.sendEmbed(embed)
	    
	var bembed = new Discord.RichEmbed()
            .setTitle("Épée secrète")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Witch of the West Mira Yoo")
            .setThumbnail("https://i.imgur.com/SU71npQ.png")
            .setImage("https://i.imgur.com/q3aDAB3.png")
            .setDescription("Obtient [**Immortalité**] pendant 1 tour avec ?% de chances. (S'active 1x) \n \n **Statistique améliorée:** Précision des malus.")
	message.channel.sendEmbed(bembed)
	    
	        console.log("La commande de l'Héroïne Witch of the West Mira Yoo viens d'être effectuée.");

	    
    }
	
		    if (message.content === prefix + "witch mira yoo"){
        var embed = new Discord.RichEmbed()
        .setTitle("Witch of the West Mira Yoo :black_small_square: <:dark:723941756109979760> :black_small_square: <:weapon:719781844744142875> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Witch of the West __Mira Yoo__ est une des protagonistes de The God of Highschool.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.14 | Entraînez-vous, empruntez les pouvoirs des dieux, et remportez les tournois, participants !")
        .setThumbnail("https://i.imgur.com/AkERziq.png")
        .setImage("https://i.imgur.com/7aidUnp.png")
        .addField(":speech_balloon: Citation", "Je dois protéger l'épée de ma famille ! As-tu déjà eu ce genre de responsabilité ?", false)
        .addField("<:c1:719664266797383680> Coup unique", "Attaque l'adversaire ayant l'ATQ la plus élevée avec [125% de l'ATQ] et a 80% de chance d'infliger 1 [**Poison**] égal à [30% de l'ATQ] pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Style de l'épée Lunaire: Clair de lune éternel", "Attaque un adversaire de la ligne arrière et un de la ligne avant avec [130% de l'ATQ] et étend le(s) [**Poison** / **Brûlure**/ **Saignement**] appliqué(s) sur l'adversaire pendant 2 tours. Si l'adversaire est déjà empoisonné, lui inflige un [**Poison**] additionnel pour [30% de l'ATQ] pendant 2 tours. Augmente les [**Chances de coup critique de 30%**] pendant 2 tours.", false)
        .addField("<:c3:719664266776412160> Malédiction de la Sorcière", "Attaque tous les adversaires avec [135% de l'ATQ] et inflige 5 [**Poisons**] pour [30% de l'ATQ] chacun. Inflige jusqu'à 100% de dégâts additionnels en fonction de la réduction du nombre d'adversaires.", false)
        .addField("<:passif:719664266969612379> 1: Le corps du Roi", "Augmente l'attaque de 15%, les dégâts coup critique de 25%, la santé de 5% et la résistance aux malus de 30%.", false)
        .addField("<:passif:719664266969612379> 2: Berserker", "Accumule un bonus de [25% d'ATQ] et [10% de réduction de dégâts] à chaque fois que la santé actuelle passe le palier des 80/60/40/20%.", false)
        .addField("<:sp:720742202757873745> Trésor national: Lame de Tathagata", "Attaque tous les adversaires avec [130% de l'ATQ] et fait exploser tous les [**Poison**] appliqués aux adversaires pour leur infliger 50% de dégâts supplémentaires pour chaque [**Poison**].", false)

	
    message.channel.sendEmbed(embed)
	    
	var bembed = new Discord.RichEmbed()
            .setTitle("Épée secrète")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Witch of the West Mira Yoo")
            .setThumbnail("https://i.imgur.com/SU71npQ.png")
            .setImage("https://i.imgur.com/q3aDAB3.png")
            .setDescription("Obtient [**Immortalité**] pendant 1 tour avec ?% de chances. (S'active 1x) \n \n **Statistique améliorée:** Précision des malus.")
	message.channel.sendEmbed(bembed)
	    
	        console.log("La commande de l'Héroïne Witch of the West Mira Yoo viens d'être effectuée.");

	    
    }
	
					
    if (message.content === prefix + "urek mazino"){
        var embed = new Discord.RichEmbed()
        .setTitle("Urek Mazino :black_small_square: <:ice:719781844949925898> :black_small_square: <:competence:719638081162051585> :black_small_square: <:ss:719641320343470150>")
        .setDescription("__Urek Mazino__ est un irrégulier de Tower of God, et est également le vice-capitaine du Wolhaiksong")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.13 | Devenez plus fort, et grimpez la tour, élus.")
        .setThumbnail("https://i.imgur.com/9EWwhXC.png")
        .setImage("https://i.imgur.com/OnPWX2Q.png")
        .addField(":speech_balloon: Citation", "C'est écrit sur mon dos ! 'Mazino' Si quelqu'un a un problème avec mes agissements, dites-lui de venir me trouver. Je n'ai peur de personne.", false)
        .addField("<:c1:719664266797383680> Calme du vainqueur", "Attaque l'adversaire possédant l'ATQ la plus élevée avec [120% de l'ATQ] et a 60% de chance de provoquer pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Windmill", "Attaque tous les adversaires avec [95% de l'ATQ] et inflige des dégâts additionnels égaux à [20% de la santé maximale]. Inflige [**Sceau des pouvoirs passifs**] avec 90 % de chances qui scelle les passifs 1 & 2 de l'adversaire ayant l'ATQ la plus élevée pendant 1 tour (ne scelle pas les compétences passives qui ont déjà été activées).", false)
        .addField("<:c3:719664266776412160> Coup de poing infernal", "Effectue une attaque perçante sur l'adversaire avec la santé la plus faible avec [240% de l'ATQ] et inflige des dégâts supplémentaires à tous les adversaires de la ligne arrière avec [30% de la santé perdue]. Récupère 100% des PV si l'adversaire est éliminé par cette attaque.", false)
        .addField("<:passif:719664266969612379> 1: Membres irréguliers haut classé", "Augmente la santé de 25%, la défense de 15% et la réduction de dégâts de 10%. Octroit [**Immunité aux malus**] pendant 1 tour au début du combat.", false)
        .addField("<:passif:719664266969612379> 2: L'homme le plus fort", "Défend l'allié ayant la santé maximale la plus faible. Le Héros prend 30% de tous les dégâts que l'allié est censé prendre et ces mêmes dégâts sont réduits de 50%. Lorsque la santé tombe en dessous de 50%, augmente l'ATQ de 10% de la santé maximale du héros. Lorsque la santé tombe en dessous de 30%, confère [**Immunité aux dégâts**] au héros pendant 1 tour et augmente son ATQ de 10% de sa santé maximale.", false)

    message.channel.sendEmbed(embed)
	    
	var bembed = new Discord.RichEmbed()
            .setTitle("Ensemble à capuche noir")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif d'Urek Mazino")
            .setThumbnail("https://i.imgur.com/WIjVYHA.png")
            .setImage("https://i.imgur.com/z7nNnlj.png")
            .setDescription("La compétence 2 prolonge le [**Sceau des pouvoirs passifs**] d'un adversaire pendant 2 tours avec une probabilité de ?%, et inflige [**Sceau des pouvoirs passifs**] à l'adversaire ayant la santé la plus élevée pendant 1 tour avec ?% de chances. \n \n **Statistique améliorée:** Santé.")
	message.channel.sendEmbed(bembed)
	    
	        console.log("La commande de l'Héros Urek Mazino viens d'être effectuée.");

	    
    }
	
	    if (message.content === prefix + "urek"){
        var embed = new Discord.RichEmbed()
        .setTitle("Urek Mazino :black_small_square: <:ice:719781844949925898> :black_small_square: <:competence:719638081162051585> :black_small_square: <:ss:719641320343470150>")
        .setDescription("__Urek Mazino__ est un irrégulier de Tower of God, et est également le vice-capitaine du Wolhaiksong")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.13 | Devenez plus fort, et grimpez la tour, élus.")
        .setThumbnail("https://i.imgur.com/9EWwhXC.png")
        .setImage("https://i.imgur.com/OnPWX2Q.png")
        .addField(":speech_balloon: Citation", "C'est écrit sur mon dos ! 'Mazino' Si quelqu'un a un problème avec mes agissements, dites-lui de venir me trouver. Je n'ai peur de personne.", false)
        .addField("<:c1:719664266797383680> Calme du vainqueur", "Attaque l'adversaire possédant l'ATQ la plus élevée avec [120% de l'ATQ] et a 60% de chance de provoquer pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Windmill", "Attaque tous les adversaires avec [95% de l'ATQ] et inflige des dégâts additionnels égaux à [20% de la santé maximale]. Inflige [**Sceau des pouvoirs passifs**] avec 90 % de chances qui scelle les passifs 1 & 2 de l'adversaire ayant l'ATQ la plus élevée pendant 1 tour (ne scelle pas les compétences passives qui ont déjà été activées).", false)
        .addField("<:c3:719664266776412160> Coup de poing infernal", "Effectue une attaque perçante sur l'adversaire avec la santé la plus faible avec [240% de l'ATQ] et inflige des dégâts supplémentaires à tous les adversaires de la ligne arrière avec [30% de la santé perdue]. Récupère 100% des PV si l'adversaire est éliminé par cette attaque.", false)
        .addField("<:passif:719664266969612379> 1: Membres irréguliers haut classé", "Augmente la santé de 25%, la défense de 15% et la réduction de dégâts de 10%. Octroit [**Immunité aux malus**] pendant 1 tour au début du combat.", false)
        .addField("<:passif:719664266969612379> 2: L'homme le plus fort", "Défend l'allié ayant la santé maximale la plus faible. Le Héros prend 30% de tous les dégâts que l'allié est censé prendre et ces mêmes dégâts sont réduits de 50%. Lorsque la santé tombe en dessous de 50%, augmente l'ATQ de 10% de la santé maximale du héros. Lorsque la santé tombe en dessous de 30%, confère [**Immunité aux dégâts**] au héros pendant 1 tour et augmente son ATQ de 10% de sa santé maximale.", false)

    message.channel.sendEmbed(embed)
	    
	var bembed = new Discord.RichEmbed()
            .setTitle("Ensemble à capuche noir")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif d'Urek Mazino")
            .setThumbnail("https://i.imgur.com/WIjVYHA.png")
            .setImage("https://i.imgur.com/z7nNnlj.png")
            .setDescription("La compétence 2 prolonge le [**Sceau des pouvoirs passifs**] d'un adversaire pendant 2 tours avec une probabilité de ?%, et inflige [**Sceau des pouvoirs passifs**] à l'adversaire ayant la santé la plus élevée pendant 1 tour avec ?% de chances. \n \n **Statistique améliorée:** Santé.")
	message.channel.sendEmbed(bembed)
	    
	        console.log("La commande de l'Héros Urek Mazino viens d'être effectuée.");

	    
    }
	
		
						 // Hero Cantare = Jinsung Ha
    if (message.content === prefix + "jinsung ha"){
        var embed = new Discord.RichEmbed()
        .setTitle("Jinsung Ha :black_small_square: <:light:746561115395326013> :black_small_square: <:artmartiaux:723903194819985459> :black_small_square: <:ss:719641320343470150>")
        .setDescription("__Jinsung Ha__ est un Haut Ranker de Tower of God, il est le mentor de Jyu Viole Grace.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.13 | Devenez plus fort, et grimpez la tour, élus.")
        .setThumbnail("https://i.imgur.com/0Ib7DKw.png")
        .setImage("https://i.imgur.com/6M6agNg.gif")
        .addField(":speech_balloon: Citation", "As-tu dit que tu voulais être fort ? Je vais te montrer comment devenir un Dieu.", false)
        .addField("<:c1:719664266797383680> Renforcement Shinsu: Défense de Fer", "Attaque un adversaire avec [110% de l'ATQ] et inflige des dégâts équivalents à [15% de la santé perdue] à tous les adversaires.", false)
        .addField("<:c2:719664268722831421> Mouvement mortel: Tempête démoniaque", "Effectue une attaque perçante sur tous les adversaires avec [120% de l'ATQ] et inflige des dégâts additionnels équivalent à [30% de la santé perdue]. A 70% de chance d'étourdir un (les) adversaire(s) possédant un bonus.", false)
        .addField("<:c3:719664266776412160> Porte du Dragon: Explosion ultime de la vague étincelante", "Attaque l'adversaire ayant l'ATQ la plus élevée avec [220% de l'ATQ]. Inflige des dégâts additionnels égaux à [40% de la santé perdue] à tous les adversaires, et leur afflige le malus Vague (Wave) qui inflige des dégâts à hauteur de [100% de l'ATQ] pendant 2 tours.", false)
        .addField("<:passif:719664266969612379> 1: Le monstre de l'ancien temps", "Augmente l'ATQ de 15%, la santé de 20% et la réduction de dégâts de 10%", false)
        .addField("<:passif:719664266969612379> 2: Le corps de la famille Ha", "Lorsqu'il est touché, l'attaque suivante du Héros devient une attaque absolue qui ignore 40% de la réduction de dégâts & de la résistance aux malus. Si les dégâts reçus sont supérieurs à [20% de la santé max], supprime tous les malus appliqués et octroit [**Immunité aux dégâts**] une fois.", false)

    message.channel.sendEmbed(embed)
	    
	        console.log("La commande de l'Héros Jinsung Ha viens d'être effectuée.");

	    
    }
	
							 // Hero Cantare = Jinsung Ha
    if (message.content === prefix + "jinsung"){
        var embed = new Discord.RichEmbed()
        .setTitle("Jinsung Ha :black_small_square: <:light:746561115395326013> :black_small_square: <:artmartiaux:723903194819985459> :black_small_square: <:ss:719641320343470150>")
        .setDescription("__Jinsung Ha__ est un Haut Ranker de Tower of God, il est le mentor de Jyu Viole Grace.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.13 | Devenez plus fort, et grimpez la tour, élus.")
        .setThumbnail("https://i.imgur.com/0Ib7DKw.png")
        .setImage("https://i.imgur.com/6M6agNg.gif")
        .addField(":speech_balloon: Citation", "As-tu dit que tu voulais être fort ? Je vais te montrer comment devenir un Dieu.", false)
        .addField("<:c1:719664266797383680> Renforcement Shinsu: Défense de Fer", "Attaque un adversaire avec [110% de l'ATQ] et inflige des dégâts équivalents à [15% de la santé perdue] à tous les adversaires.", false)
        .addField("<:c2:719664268722831421> Mouvement mortel: Tempête démoniaque", "Effectue une attaque perçante sur tous les adversaires avec [120% de l'ATQ] et inflige des dégâts additionnels équivalent à [30% de la santé perdue]. A 70% de chance d'étourdir un (les) adversaire(s) possédant un bonus.", false)
        .addField("<:c3:719664266776412160> Porte du Dragon: Explosion ultime de la vague étincelante", "Attaque l'adversaire ayant l'ATQ la plus élevée avec [220% de l'ATQ]. Inflige des dégâts additionnels égaux à [40% de la santé perdue] à tous les adversaires, et leur afflige le malus Vague (Wave) qui inflige des dégâts à hauteur de [100% de l'ATQ] pendant 2 tours.", false)
        .addField("<:passif:719664266969612379> 1: Le monstre de l'ancien temps", "Augmente l'ATQ de 15%, la santé de 20% et la réduction de dégâts de 10%", false)
        .addField("<:passif:719664266969612379> 2: Le corps de la famille Ha", "Lorsqu'il est touché, l'attaque suivante du Héros devient une attaque absolue qui ignore 40% de la réduction de dégâts & de la résistance aux malus. Si les dégâts reçus sont supérieurs à [20% de la santé max], supprime tous les malus appliqués et octroit [**Immunité aux dégâts**] une fois.", false)

    message.channel.sendEmbed(embed)
	    
	        console.log("La commande de l'Héros Jinsung Ha viens d'être effectuée.");

	    
    }
	
						 // Hero Cantare = Clan Leader Seira
    if (message.content === prefix + "cl seira"){
        var embed = new Discord.RichEmbed()
        .setTitle("Clan Leader Seira :black_small_square: <:ice:719781844949925898> :black_small_square: <:competence:719638081162051585> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Clan Leader __Seira__ est une Noble ainsi qu'une étudiante à l'académie Ye Ran. Elle est également un des 8 chefs de clans.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.12 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
        .setThumbnail("https://i.imgur.com/KWpT0MV.png")
        .setImage("https://i.imgur.com/aQcb6Cg.png")
        .addField(":speech_balloon: Citation", "Je n'ai aucun intérêt en ta faux de la mort.", false)
        .addField("<:c1:719664266797383680> Faux de la Mort: Entaille", "Attaque 2 adversaires à hauteur de [120% de l'ATQ] et augmente [l'ATQ de Clan Leader Seira de 30%] pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Faux de la Mort: Anéantissement", "Attaque tous les adversaires avec [115% de l'ATQ], et inflige [30% de dégâts additionnels] à l'adversaire ayant l'ATQ la plus élevée, ainsi qu'à celui possédant les PV les plus élevés, puis a 80% de chance de leur infliger [**Malédiction**] pendant 2 tours. \n (**Malédiction**: Empêche l'adversaire ainsi que ses alliés de récupérer de la santé, et converti 20% des soins empêchés en dégâts additionnels.)", false)
        .addField("<:c3:719664266776412160> Faux de la Mort: The End", "Attaque tous les adversaires avec [140% de l'ATQ] puis s'octroit [**Immunité aux dégâts**] pendant 1 tour quand un adversaire est éliminé par Faux de la Mort: The End.", false)
        .addField("<:passif:719664266969612379> 1: Devoir du Chef de Famille", "Augmente la vitesse de 40, l'attaque de 15%, la santé de 10%, et la réduction de dégâts de 10%.", false)
        .addField("<:passif:719664266969612379> 2: Murmure de la Faucheuse", "L'**Entaille de la Faucheuse** [qui équivaut à 500% de l'ATQ] est activée sur l'adversaire ayant l'ATQ la plus élevée avec 30% de chance lors de l'utilisation de la compétence 3chain. Évite l'élimination 1x avec 1% de PV restant avant de s'octroyer [**Immunité aux dégâts**] pendant 1 tour. (S'active 1x)", false)

    message.channel.sendEmbed(embed)
	    
	        console.log("La commande de l'Héroïne Clan Leader Seira viens d'être effectuée.");

	    
    }
	
							 // Hero Cantare = Clan Leader Seira
    if (message.content === prefix + "clan leader seira"){
        var embed = new Discord.RichEmbed()
        .setTitle("Clan Leader Seira :black_small_square: <:ice:719781844949925898> :black_small_square: <:competence:719638081162051585> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Clan Leader __Seira__ est une Noble ainsi qu'une étudiante à l'académie Ye Ran. Elle est également un des 8 chefs de clans.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.12 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
        .setThumbnail("https://i.imgur.com/KWpT0MV.png")
        .setImage("https://i.imgur.com/aQcb6Cg.png")
        .addField(":speech_balloon: Citation", "Je n'ai aucun intérêt en ta faux de la mort.", false)
        .addField("<:c1:719664266797383680> Faux de la Mort: Entaille", "Attaque 2 adversaires à hauteur de [120% de l'ATQ] et augmente [l'ATQ de Clan Leader Seira de 30%] pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Faux de la Mort: Anéantissement", "Attaque tous les adversaires avec [115% de l'ATQ], et inflige [30% de dégâts additionnels] à l'adversaire ayant l'ATQ la plus élevée, ainsi qu'à celui possédant les PV les plus élevés, puis a 80% de chance de leur infliger [**Malédiction**] pendant 2 tours. \n (**Malédiction**: Empêche l'adversaire ainsi que ses alliés de récupérer de la santé, et converti 20% des soins empêchés en dégâts additionnels.", false)
        .addField("<:c3:719664266776412160> Faux de la Mort: The End", "Attaque tous les adversaires avec [140% de l'ATQ] puis s'octroit [**Immunité aux dégâts**] pendant 1 tour quand un adversaire est éliminé par Faux de la Mort: The End.", false)
        .addField("<:passif:719664266969612379> 1: Devoir du Chef de Famille", "Augmente la vitesse de 40, l'attaque de 15%, la santé de 10%, et la réduction de dégâts de 10%.", false)
        .addField("<:passif:719664266969612379> 2: Murmure de la Faucheuse", "L'**Entaille de la Faucheuse** [qui équivaut à 500% de l'ATQ] est activée sur l'adversaire ayant l'ATQ la plus élevée avec 30% de chance lors de l'utilisation de la compétence 3chain. Évite l'élimination 1x avec 1% de PV restant avant de s'octroyer [**Immunité aux dégâts**] pendant 1 tour. (S'active 1x)", false)

    message.channel.sendEmbed(embed)
	    
	        console.log("La commande de l'Héroïne Clan Leader Seira viens d'être effectuée.");

	    
    }
	
							 // Hero Cantare = Clan Leader Seira
    if (message.content === prefix + "clan seira"){
        var embed = new Discord.RichEmbed()
        .setTitle("Clan Leader Seira :black_small_square: <:ice:719781844949925898> :black_small_square: <:competence:719638081162051585> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Clan Leader __Seira__ est une Noble ainsi qu'une étudiante à l'académie Ye Ran. Elle est également un des 8 chefs de clans.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.12 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
        .setThumbnail("https://i.imgur.com/KWpT0MV.png")
        .setImage("https://i.imgur.com/aQcb6Cg.png")
        .addField(":speech_balloon: Citation", "Je n'ai aucun intérêt en ta faux de la mort.", false)
        .addField("<:c1:719664266797383680> Faux de la Mort: Entaille", "Attaque 2 adversaires à hauteur de [120% de l'ATQ] et augmente [l'ATQ de Clan Leader Seira de 30%] pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Faux de la Mort: Anéantissement", "Attaque tous les adversaires avec [115% de l'ATQ], et inflige [30% de dégâts additionnels] à l'adversaire ayant l'ATQ la plus élevée, ainsi qu'à celui possédant les PV les plus élevés, puis a 80% de chance de leur infliger [**Malédiction**] pendant 2 tours. \n (**Malédiction**: Empêche l'adversaire ainsi que ses alliés de récupérer de la santé, et converti 20% des soins empêchés en dégâts additionnels.", false)
        .addField("<:c3:719664266776412160> Faux de la Mort: The End", "Attaque tous les adversaires avec [140% de l'ATQ] puis s'octroit [**Immunité aux dégâts**] pendant 1 tour quand un adversaire est éliminé par Faux de la Mort: The End.", false)
        .addField("<:passif:719664266969612379> 1: Devoir du Chef de Famille", "Augmente la vitesse de 40, l'attaque de 15%, la santé de 10%, et la réduction de dégâts de 10%.", false)
        .addField("<:passif:719664266969612379> 2: Murmure de la Faucheuse", "L'**Entaille de la Faucheuse** [qui équivaut à 500% de l'ATQ] est activée sur l'adversaire ayant l'ATQ la plus élevée avec 30% de chance lors de l'utilisation de la compétence 3chain. Évite l'élimination 1x avec 1% de PV restant avant de s'octroyer [**Immunité aux dégâts**] pendant 1 tour. (S'active 1x)", false)

    message.channel.sendEmbed(embed)
	    
	        console.log("La commande de l'Héroïne Clan Leader Seira viens d'être effectuée.");

	    
    }
	
					 // Hero Cantare = Endorsi
    if (message.content === prefix + "endorsi"){
        var embed = new Discord.RichEmbed()
        .setTitle("Endorsi :black_small_square: <:light:746561115395326013> :black_small_square: <:artmartiaux:723903194819985459> :black_small_square: <:ss:719641320343470150>")
        .setDescription("__Endorsi__ est une princesse de Jahad & un personnage important de Tower of God.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.13 | Devenez plus fort, et grimpez la tour, élus.")
        .setThumbnail("https://i.imgur.com/zwV9627.png")
        .setImage("https://i.imgur.com/ofVf9E4.gif")
        .addField(":speech_balloon: Citation", "Si tu comptes revenir, le plus tôt sera le mieux. Si tu arrives trop tard, nous n'en aurons peut-être pas l'occasion. De sortir ensemble.", false)
        .addField("<:c1:719664266797383680> Bong-Bong Stump", "Attaque l'adversaire possédant la DEF la plus élevée à hauteur de [140% de l'ATQ] et a 60% de chance de [réduire de 90% la DEF] de l'adversaire pendant 1 tour.", false)
        .addField("<:c2:719664268722831421> Ruée de Bong-Bong", "A 15% de chance d'étourdir (à chacun) tous les ennemis, et attaque l'adversaire possédant l'ATQ la plus élevée à hauteur de [180% de l'ATQ], puis a 40% de chance d'étourdir cet adversaire. Augmente de [30% les chances de coup critique] pour les alliés d'élément Lumière pendant 2 tours.", false)
        .addField("<:c3:719664266776412160> Chiffon Blast", "Attaque tous les adversaires avec [150% de l'ATQ] et réduit leur [chances de coup critique de 100%] pendant 2 tours. Octroit l'immunité aux malus aux alliés d'élément Lumière pendant 2 tours.", false)
        .addField("<:passif:719664266969612379> 1: Idole de la Tour", " Augmente l'ATQ, la santé, la réduction de dégâts & la vitesse de 10%.", false)
        .addField("<:passif:719664266969612379> 2: Coeur de Shinsu", "Utiliser les chains 2 ou 3 octroit 1 Mana et une jauge d'EX (1 boule) pour les alliés d'élément Lumière. Quand Endorsi est éliminée, supprime tous les malus appliqués sur les alliés d'élément Lumière, augmente de 50% leur dégâts de compétence pendant 3 tours, et leur octroit l'immunité aux malus pendant 2 tours.", false)
        .addField("<:sp:720742202757873745> Matérialisation du Shinsu", "Attaque tous les adversaires avec [150% de l'ATQ] et réduit leur [ATQ de 30%] et leur [DEF de 90%] pendant 2 tours.", false)

    message.channel.sendEmbed(embed)
	    
        var bembed = new Discord.RichEmbed()
            .setTitle("Coeur Bong-Bong")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif d'Endorsi")
            .setThumbnail("https://i.imgur.com/NeaSehN.png")
            .setImage("https://i.imgur.com/nICk8sI.png")
            .setDescription("Génère un bouclier équivalent à % des PV pour les alliés d'élément lumière pendant 2 tours au début du combat. \n \n **Statistique améliorée:** Précision des malus")
	message.channel.sendEmbed(bembed)

    console.log("La commande de l'Héroïne Endorsi viens d'être effectuée.");

    }
	
		 // Hero Cantare = M-21
    if (message.content === prefix + "m21"){
        var embed = new Discord.RichEmbed()
        .setTitle("M-21 :black_small_square: <:nature:719638081195475114> :black_small_square: <:competence:719638081162051585> :black_small_square: <:s_:724831181341720586>")
        .setDescription("__M-21__ est un membre du groupe de Raizel dans Noblesse, il est un humain modifié.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.14 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
        .setThumbnail("https://i.imgur.com/Wzq48L5.png")
        .setImage("https://i.imgur.com/c3J9VyE.png")
        .addField(":speech_balloon: Citation", "Je n'ai jamais voulu d'un tel pouvoir !!", false)
        .addField("<:c1:719664266797383680> Fausse entaille", "Attaque 1 adversaire de la ligne arrière avec [115% d'ATQ] et a 80% de chance d'infliger un [Saignement] infligeant des dégâts à hauteur de 30% de l'ATQ pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Écrasement en spirale", "Attaque tous les adversaires de la ligne arrière avec [120% de l'ATQ] et inflige des dégâts additionnels à hauteur de [55% de l'ATQ] si l'adversaire est sous l'effet d'un malus.", false)
        .addField("<:c3:719664266776412160> Mode Hyper complet", "Attaque tous les adversaires avec [160% de l'ATQ]. Les dégâts sont augmentés jusqu'à 100% proportionnellement à la réduction du nombre d'adversaires.", false)
        .addField("<:passif:719664266969612379> 1: Rugissement du loup", " Augmente l'ATQ et la santé de 15%.", false)
        .addField("<:passif:719664266969612379> 2: Coeur de Loup-Garou", "L'ATQ est améliorée jusqu'à 50% proportionnellement aux PV restants. Lorsque le héros est touché, augmente [l'ATQ de 30%] pendant 2 tours.", false)

    message.channel.sendEmbed(embed)

    console.log("La commande de l'Héros M-21 viens d'être effectuée.");

    }
	
	
			 // Hero Cantare = M-21
    if (message.content === prefix + "m-21"){
        var embed = new Discord.RichEmbed()
        .setTitle("M-21 :black_small_square: <:nature:719638081195475114> :black_small_square: <:competence:719638081162051585> :black_small_square: <:s_:724831181341720586>")
        .setDescription("__M-21__ est un membre du groupe de Raizel dans Noblesse, il est un humain modifié.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.14 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
        .setThumbnail("https://i.imgur.com/Wzq48L5.png")
        .setImage("https://i.imgur.com/c3J9VyE.png")
        .addField(":speech_balloon: Citation", "Je n'ai jamais voulu d'un tel pouvoir !!", false)
        .addField("<:c1:719664266797383680> Fausse entaille", "Attaque 1 adversaire de la ligne arrière avec [115% d'ATQ] et a 80% de chance d'infliger un [Saignement] infligeant des dégâts à hauteur de 30% de l'ATQ pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Écrasement en spirale", "Attaque tous les adversaires de la ligne arrière avec [120% de l'ATQ] et inflige des dégâts additionnels à hauteur de [55% de l'ATQ] si l'adversaire est sous l'effet d'un malus.", false)
        .addField("<:c3:719664266776412160> Mode Hyper complet", "Attaque tous les adversaires avec [160% de l'ATQ]. Les dégâts sont augmentés jusqu'à 100% proportionnellement à la réduction du nombre d'adversaires.", false)
        .addField("<:passif:719664266969612379> 1: Rugissement du loup", " Augmente l'ATQ et la santé de 15%.", false)
        .addField("<:passif:719664266969612379> 2: Coeur de Loup-Garou", "L'ATQ est améliorée jusqu'à 50% proportionnellement aux PV restants. Lorsque le héros est touché, augmente [l'ATQ de 30%] pendant 2 tours.", false)

    message.channel.sendEmbed(embed)

    console.log("La commande de l'Héros M-21 viens d'être effectuée.");

    }
	
	     if (message.content === prefix + "black march bam"){
        var embed = new Discord.RichEmbed()
            .setTitle("Black-March Bam :black_small_square: <:light:746561115395326013> :black_small_square: <:evil:724805535727353856> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Black-March __Bam__ est le protagoniste principal de Tower of God. Il est un irrégulier.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.14 | Devenez plus fort, et grimpez la tour, élus.")
            .setThumbnail("https://i.imgur.com/6vbuphJ.png")
            .setImage("https://i.imgur.com/dDp8e9U.gif")
            .addField(":speech_balloon: Citation :", "Si je dois me battre, je me battrai pour protéger ce qui m'est précieux.", false)
            .addField("<:c1:719664266797383680> Black-March: Flamme écarlate", "Attaque un adversaire avec [140% de l'ATQ] et octroit un bouclier équivalent à 20% des PV pendant 1 tour. Octroit le même effet (bouclier) à un allié si le lanceur est sous l'effet Black-March.", false)
            .addField("<:c2:719664268722831421> Extrême: Aviron bleu", "Attaque deux adversaires avec [140% de l'ATQ] et inflige [130% de dégâts additionnels] si l'adversaire est un Boss. Réduit la défense de [90%] pendant 2 tours si le lanceur est sous l'effet Black-March.", false)
            .addField("<:c3:719664266776412160> Style Black-March: Papillon Ailé Noir", "Attaque un adversaire de la ligne arrière avec [270% de l'ATQ] et augmente l'ATQ de tous les alliés de [30% de l'ATQ du lanceur] pendant 3 tours. Lorsque le lanceur est sous l'effet de Black-March, inflige des dégâts égaux à [110% de l'ATQ (170% si l'adversaire est un Boss)] à tous les adversaires via le malus 'Wave'", false)
            .addField("<:passif:719664266969612379> 1: Trou noir sphérique de Shinsu", "Augmente l'attaque de 20%, les chances de coup critique de 15% et la santé de 10%", false)
            .addField("<:passif:719664266969612379> 2: Déclenchement de Black-March ", "Lorsque la santé passe en dessous des 50%, octroit [Immunité aux dégâts] pendant 1 tour et invoque Black-March. (Statut Black-March: Augmentation de l'ATQ de 50%, de la précision des malus de 30% et ajoute l'élément Ténèbre.) (S'active 1x)", false)
            .addField("<:sp:720742202757873745> Poussière d'étoile", "Effectue une attaque **perçante** sur l'adversaire ayant la plus haute ATQ avec [250% de l'ATQ] et s'octroit [Immunité aux dégâts] pendant 1 tour. Inflige [50% de dégâts supplémentaires] lorsque le lanceur est sous l'effet Black-March.", false)
	
	message.channel.sendEmbed(embed)
		    
        var bembed = new Discord.RichEmbed()
            .setTitle("Ailes de l'Animal Sacré Transformé")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Black-March Bam")
            .setThumbnail("https://i.imgur.com/skAqvue.png")
            .setImage("https://i.imgur.com/dd2ci3y.png")
            .setDescription("En entrant dans le statut 'Black-March', obtient un bonus d'ATQ de min% à max%. \n \n **Statistique améliorée:** Attaque")

	message.channel.sendEmbed(bembed)

	console.log("La commande de l'Héros Black-March Bam viens d'être effectuée.");

    }
	
		     if (message.content === prefix + "bm bam"){
        var embed = new Discord.RichEmbed()
            .setTitle("Black-March Bam :black_small_square: <:light:746561115395326013> :black_small_square: <:evil:724805535727353856> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Black-March __Bam__ est le protagoniste principal de Tower of God. Il est un irrégulier.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.14 | Devenez plus fort, et grimpez la tour, élus.")
            .setThumbnail("https://i.imgur.com/6vbuphJ.png")
            .setImage("https://i.imgur.com/dDp8e9U.gif")
            .addField(":speech_balloon: Citation :", "Si je dois me battre, je me battrai pour protéger ce qui m'est précieux.", false)
            .addField("<:c1:719664266797383680> Black-March: Flamme écarlate", "Attaque un adversaire avec [140% de l'ATQ] et octroit un bouclier équivalent à 20% des PV pendant 1 tour. Octroit le même effet (bouclier) à un allié si le lanceur est sous l'effet Black-March.", false)
            .addField("<:c2:719664268722831421> Extrême: Aviron bleu", "Attaque deux adversaires avec [140% de l'ATQ] et inflige [130% de dégâts additionnels] si l'adversaire est un Boss. Réduit la défense de [90%] pendant 2 tours si le lanceur est sous l'effet Black-March.", false)
            .addField("<:c3:719664266776412160> Style Black-March: Papillon Ailé Noir", "Attaque un adversaire de la ligne arrière avec [270% de l'ATQ] et augmente l'ATQ de tous les alliés de [30% de l'ATQ du lanceur] pendant 3 tours. Lorsque le lanceur est sous l'effet de Black-March, inflige des dégâts égaux à [110% de l'ATQ (170% si l'adversaire est un Boss)] à tous les adversaires via le malus 'Wave'", false)
            .addField("<:passif:719664266969612379> 1: Trou noir sphérique de Shinsu", "Augmente l'attaque de 20%, les chances de coup critique de 15% et la santé de 10%", false)
            .addField("<:passif:719664266969612379> 2: Déclenchement de Black-March ", "Lorsque la santé passe en dessous des 50%, octroit [Immunité aux dégâts] pendant 1 tour et invoque Black-March. (Statut Black-March: Augmentation de l'ATQ de 50%, de la précision des malus de 30% et ajoute l'élément Ténèbre.) (S'active 1x)", false)
            .addField("<:sp:720742202757873745> Poussière d'étoile", "Effectue une attaque **perçante** sur l'adversaire ayant la plus haute ATQ avec [250% de l'ATQ] et s'octroit [Immunité aux dégâts] pendant 1 tour. Inflige [50% de dégâts supplémentaires] lorsque le lanceur est sous l'effet Black-March.", false)
	
	message.channel.sendEmbed(embed)
		    
        var bembed = new Discord.RichEmbed()
            .setTitle("Ailes de l'Animal Sacré Transformé")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Black-March Bam")
            .setThumbnail("https://i.imgur.com/skAqvue.png")
            .setImage("https://i.imgur.com/dd2ci3y.png")
            .setDescription("En entrant dans le statut 'Black-March', obtient un bonus d'ATQ de min% à max%. \n \n **Statistique améliorée:** Attaque")

	message.channel.sendEmbed(bembed)

	console.log("La commande de l'Héros Black-March Bam viens d'être effectuée.");

    }
	
	 // Hero Cantare = Frankenstein
    if (message.content === prefix + "frankenstein"){
        var embed = new Discord.RichEmbed()
        .setTitle("Frankenstein :black_small_square: <:feu:719638080780501073> :black_small_square: <:element:724668549028905073> :black_small_square: <:s_:724831181341720586>")
        .setDescription("__Frankenstein__ est le deutéragoniste de Noblesse, il est le servant dévoué de Raizel ; et est un humain modifié.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.9 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
        .setThumbnail("https://i.imgur.com/eJzzXBH.png")
        .setImage("https://i.imgur.com/AOdcb0D.png")
        .addField(":speech_balloon: Citation", "Oui, maître.", false)
        .addField("<:c1:719664266797383680> Entaille ténébreuse", "Attaque 1 adversaire de la ligne arrière avec [115% d'ATQ] et a 80% de chance d'infliger une Contamination qui augmente les dégâts des malus de 100% pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Érosion", "Attaque l'adversaire possédant la santé la plus élevée avec [210% de l'ATQ] et inflige 1 [Poison] infligeant des dégâts à hauteur de 30% de l'ATQ pendant 2 tours. Si la cible est déjà affecté par [Poison], étourdit la cible pendant 1 tour.", false)
        .addField("<:c3:719664266776412160> Lance Sombre", "Attaque tous les adversaires avec [135% de l'ATQ] et réduit leur ATQ de 30% pendant 2 tours. Si l'adversaire est affecté par un malus, inflige [40% de dégâts supplémentaires.]", false)
        .addField("<:passif:719664266969612379> 1: Le Président", " Augmente l'ATQ de 10%, la santé de 10% et les chances de coup critique de 10%.", false)
        .addField("<:passif:719664266969612379> 2: Savant fou", "L'ATQ est améliorée de 10% (jusqu'à 50%) à chaque fois que le héros est attaqué. Inflige [Poison] à hauteur de 30% de l'ATQ pendant 2 tours lorsqu'un coup critique se produit.", false)
	.addField("ATQ", "20202", true)
        .addField("DEF", "463", true)
        .addField("PV", "98900", true)
        .addField("VIT", "362", true)
	.addField("Blocage", "33%", true)
        .addField("Taux Crit", "25%", true)
	.addField("Dégâts Crit", "10%", true)
        .addField("Résist. Malus", "23%", true)
        .addField("Réduction dégâts", "19%", true)

    message.channel.sendEmbed(embed)

    console.log("La commande de l'Héros Frankenstein viens d'être effectuée.");

    }
	
		 // Hero Cantare = Frankenstein
    if (message.content === prefix + "frank"){
        var embed = new Discord.RichEmbed()
        .setTitle("Frankenstein :black_small_square: <:feu:719638080780501073> :black_small_square: <:element:724668549028905073> :black_small_square: <:s_:724831181341720586>")
        .setDescription("__Frankenstein__ est le deutéragoniste de Noblesse, il est le servant dévoué de Raizel ; et est un humain modifié.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.9 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
        .setThumbnail("https://i.imgur.com/eJzzXBH.png")
        .setImage("https://i.imgur.com/AOdcb0D.png")
        .addField(":speech_balloon: Citation", "Oui, maître.", false)
        .addField("<:c1:719664266797383680> Entaille ténébreuse", "Attaque 1 adversaire de la ligne arrière avec [115% d'ATQ] et a 80% de chance d'infliger une Contamination qui augmente les dégâts des malus de 100% pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Érosion", "Attaque l'adversaire possédant la santé la plus élevée avec [210% de l'ATQ] et inflige 1 [Poison] infligeant des dégâts à hauteur de 30% de l'ATQ pendant 2 tours. Si la cible est déjà affecté par [Poison], étourdit la cible pendant 1 tour.", false)
        .addField("<:c3:719664266776412160> Lance Sombre", "Attaque tous les adversaires avec [135% de l'ATQ] et réduit leur ATQ de 30% pendant 2 tours. Si l'adversaire est affecté par un malus, inflige [40% de dégâts supplémentaires.]", false)
        .addField("<:passif:719664266969612379> 1: Le Président", " Augmente l'ATQ de 10%, la santé de 10% et les chances de coup critique de 10%.", false)
        .addField("<:passif:719664266969612379> 2: Savant fou", "L'ATQ est améliorée de 10% (jusqu'à 50%) à chaque fois que le héros est attaqué. Inflige [Poison] à hauteur de 30% de l'ATQ pendant 2 tours lorsqu'un coup critique se produit.", false)
	.addField("ATQ", "20202", true)
        .addField("DEF", "463", true)
        .addField("PV", "98900", true)
        .addField("VIT", "362", true)
	.addField("Blocage", "33%", true)
        .addField("Taux Crit", "25%", true)
	.addField("Dégâts Crit", "10%", true)
        .addField("Résist. Malus", "23%", true)
        .addField("Réduction dégâts", "19%", true)

    message.channel.sendEmbed(embed)

    console.log("La commande de l'Héros Frankenstein viens d'être effectuée.");

    }
	
        // Hero Cantare = Kaiser
     if (message.content === prefix + "kaiser"){
        var embed = new Discord.RichEmbed()
            .setTitle("Kaiser :black_small_square: <:nature:719638081195475114> :black_small_square: <:competence:719638081162051585> :black_small_square: <:ss:719641320343470150>")
            .setDescription("__Kaiser__ est une régulière de Tower of God.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.5 | Devenez plus fort, et grimpez la tour, élus.")
            .setThumbnail("https://i.imgur.com/9Ccn5z9.png")
            .setImage("https://i.imgur.com/piw3ixK.gif")
            .addField(":speech_balloon: Citation :", "Si j'étais de ta famille, j'utiliserais toute l'argent à ma disposition pour te faire sortir d'ici. Tes talents en valent sûrement la peine.", false)
            .addField("<:c1:719664266797383680> Permutation", "Attaque un ennemi de la ligne arrière avec 130% de la puissance d'attaque, si l'attaque de la cible est plus élevée que la votre, réduit l'attaque de celle-ci de 30% pendant 2 tours et provoque pendant 1 tour.", false)
            .addField("<:c2:719664268722831421> Armor Inventory", "Attaque tous les ennemis avec 100% de la puissance d'attaque et inflige des dégâts additionnels correspondants à 20% de la santé maximale de Kaiser. Augmente la défense de tous les alliés de 50% pendant 2 tours.", false)
            .addField("<:c3:719664266776412160> Loup Bleu, Fenrir. ", "Attaque tous les ennemis avec 120% de la puissance d'attaque, et inflige des dégâts additionnels correspondants à 35% de la santé manquante de Kaiser. Obtient 1 tour d'immunité aux dégâts.", false)
            .addField("<:passif:719664266969612379> 1: Maître de station. ", "Augmente la vie de 15%, la défense de 15% et la réduction des dégâts de 10%", false)
            .addField("<:passif:719664266969612379> 2: Masque du maître. ", "Chaque attaque reçue augmente la défense de 20% (cumulable 10x). Quand la santé de Kaiser tombe à 50% ou moins, réduit l'attaque et les chances de critique de tous les ennemis de 30% pendant 2 tours. Applique un bouclier sur tous les alliés correspondant à 20% de la santé maximale pendant 3 tours.", false)
            .addField("ATQ", "18645", true)
            .addField("DEF", "692", true)
            .addField("PV", "131156", true)
            .addField("VIT", "484", true)
	    .addField("Blocage", "33%", true)
	    .addField("Taux Crit", "20%", true)
            .addField("Dégâts Crit", "5%", true)
            .addField("Résist. Malus", "28%", true)
            .addField("Réduction dégâts", "29%", true)
	
	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héroïne Kaiser viens d'être effectuée.");

    }
	
	        // Hero Cantare = Elaine
    if (message.content === prefix + "elaine"){
        var embed = new Discord.RichEmbed()
            .setTitle("Elaine :black_small_square: <:ice:719781844949925898> :black_small_square: <:weapon:719781844744142875> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Lo Po Bia __Elaine__ est une régulière de Tower of God.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.5 | Devenez plus fort, et grimpez la tour, élus.")
            .setThumbnail("https://i.imgur.com/dWXEhUj.png")
            .setImage("https://i.imgur.com/sHem9nJ.gif")
            .addField(":speech_balloon: Citation :", "Si j'étais de ta famille, j'utiliserais toute l'argent à ma disposition pour te faire sortir d'ici. Tes talents en valent sûrement la peine.", false)
            .addField("<:c1:719664266797383680> Aiguille rouge", "Attaque deux adversaires avec 110% de la puissance d'attaque. Si l'adversaire est débuffé, inflige des dégâts additionnels équivalent à 35% de la puissance d'attaque. Si l'adversaire est affecté par Bleeding (Saignement), inflige des dégâts additionnels équivalent à 20% de la puissance d'attaque.", false)
            .addField("<:c2:719664268722831421> Griffe de Fenrir", "Attaque deux adversaires avec 150% de la puissance d'attaque et inflige Bleeding (Saignement) pour 30% de la puissance d'attaque pendant 2 tours. Augmente les chances de critique de 20% pour tous les alliés pendant 2 tours.", false)
            .addField("<:c3:719664266776412160> Aiguille: Restriction du fil rouge", "Attaque tous les ennemis avec 40% de la puissance d'attaque trois fois. Si l'adversaire est affecté par Bleeding (Saignement), inflige des dégâts additionnels équivalent à 30% de la puissance d'attaque pour chaque débuff appliqué à l'adversaire. (Max. 10 débuffs.)", false)
            .addField("<:passif:719664266969612379> 1: Clan du Loup Gris ", "Augmente l'attaque de 15%, la santé de 10%, la précision des malus de 10% et les dégâts critique de 10%", false)
            .addField("<:passif:719664266969612379> 2: Esprit du Loup ", "Si la cible est affecté par Bleeding (Saignement), inflige Bleeding (Saignement) pour 30% de la puissance d'attaque pendant 2 tours et garanti le critique sur 2 adversaires. Quand un allié ou un adversaire est éliminé, Elaine devient immunisée aux dégâts pendant 1 tour, et inflige le statut Unrecoverable (Impossibilité de heal) et 3 Bleeding (Saignement) pendant 2 tours à tous les adversaires.", false)
            .addField("ATQ", "22598", true)
            .addField("DEF", "628", true)
            .addField("PV", "103708", true)
            .addField("VIT", "484", true)
            .addField("Blocage", "33%", true)
            .addField("Taux Crit", "33%", true)
            .addField("Dégâts Crit", "10%", true)
            .addField("Armor Crash", "15%", true)
            .addField("Résist. Malus", "23%", true)
            .addField("Réduction dégâts", "19%", true)

	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héroïne Elaine viens d'être effectuée.");

    }

	        // Hero Cantare = Max Level Warrior
    if (message.content === prefix + "max level warrior"){
        var embed = new Discord.RichEmbed()
            .setTitle("Max Level Warrior :black_small_square: <:feu:719638080780501073> :black_small_square: <:weapon:719781844744142875> :black_small_square: <:ss:719641320343470150>")
            .setDescription("__Max Level Warrior__, sous le pseudo Hardcore Leveling Warrior, est un des personnages pricipaux de Hardcore Leveling Warrior.")
            .setColor("RANDOM")
	        .setFooter("Khun Ran v0.8 | Combattez pour monter de niveau, joueur !")
            .setThumbnail("https://i.imgur.com/NGclWGx.png")
            .setImage("https://i.imgur.com/LHkbbsk.gif")
            .addField(":speech_balloon: Citation :", "Je t'ai ramené une surprise !", false)
            .addField("<:c1:719664266797383680> Pièce chanceuse", "Attaque l'adversaire avec les PV's les plus faible avec 115% de la puissance d'attaque, et augmente l'attaque du héros de 20-50% pendant 2 tours.", false)
            .addField("<:c2:719664268722831421> Feu de l'enfer", "Attaque 1 adversaire de la ligne du devant, et 1 autre de celle de derrière avec 130% de la puissance d'attaque et se soigne à hauteur de 50% des dégâts causés.", false)
            .addField("<:c3:719664266776412160> All-in", "Attaque l'adversaire avec les PV's les plus faible avec 170% de la puissance d'attaque et inflige des dégâts supplémentaires à hauteur de 80% des pv's perdus du héros. Si l'adversaire est éliminé, l'attaque inflige les mêmes dégâts supplémentaires aux autres adversaires.", false)
            .addField("<:passif:719664266969612379> 1: Homme chanceux", "Augmente la défense de 20%, la santé de 30%, et les chances de critique de 15%", false)
            .addField("<:passif:719664266969612379> 2: Évasion limite", "Évite l'élimination en récupérant 20% de PV lorsque le héros est proche d'être éliminé. (S'active 1x)", false)
	        .addField("<:sp:720742202757873745> Lacération", "Attaque 1 adversaire possédant les PV's les plus élevés avec 275% de la puissance d'attaque. Cette attaque résulte constamment en un coup critique.", false)
            .addField("ATQ", "21042", true)
            .addField("DEF", "754", true)
            .addField("PV", "125330", true)
            .addField("VIT", "484", true)
	        .addField("Blocage", "33%", true)
            .addField("Taux Crit", "23%", true)
            .addField("Dégâts Crit", "15%", true)
            .addField("Armor Crash", "15%", true)
            .addField("Résist. Malus", "23%", true)
            .addField("Réduction dégâts", "24%", true)

	message.channel.sendEmbed(embed)

        var bembed = new Discord.RichEmbed()
            .setTitle("Épée du dragon rouge")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Max Level Warrior. ")
            .setThumbnail("https://i.imgur.com/iFRzcK1.png")
            .setImage("https://i.imgur.com/jbKdjhN.png")
            .setDescription("La vitesse est améliorée de X à X proportionnellement aux PV manquants. \n \n **Statistique améliorée:** Santé")

	message.channel.sendEmbed(bembed)

	console.log("La commande de l'Héros Max Level Warrior viens d'être effectuée.");

    }
	
		        // Hero Cantare = Max Level Warrior
    if (message.content === prefix + "mlw"){
        var embed = new Discord.RichEmbed()
            .setTitle("Max Level Warrior :black_small_square: <:feu:719638080780501073> :black_small_square: <:weapon:719781844744142875> :black_small_square: <:ss:719641320343470150>")
            .setDescription("__Max Level Warrior__, sous le pseudo Hardcore Leveling Warrior, est un des personnages pricipaux de Hardcore Leveling Warrior.")
            .setColor("RANDOM")
	    .setFooter("Khun Ran v0.8 | Combattez pour monter de niveau, joueur !")
            .setThumbnail("https://i.imgur.com/NGclWGx.png")
            .setImage("https://i.imgur.com/LHkbbsk.gif")
            .addField(":speech_balloon: Citation :", "Je t'ai ramené une surprise !", false)
            .addField("<:c1:719664266797383680> Pièce chanceuse", "Attaque l'adversaire avec les PV's les plus faible avec 115% de la puissance d'attaque, et augmente l'attaque du héros de 20-50% pendant 2 tours.", false)
            .addField("<:c2:719664268722831421> Feu de l'enfer", "Attaque 1 adversaire de la ligne du devant, et 1 autre de celle de derrière avec 130% de la puissance d'attaque et se soigne à hauteur de 50% des dégâts causés.", false)
            .addField("<:c3:719664266776412160> All-in", "Attaque l'adversaire avec les PV's les plus faible avec 170% de la puissance d'attaque et inflige des dégâts supplémentaires à hauteur de 80% des pv's perdus du héros. Si l'adversaire est éliminé, l'attaque inflige les mêmes dégâts supplémentaires aux autres adversaires.", false)
            .addField("<:passif:719664266969612379> 1: Homme chanceux", "Augmente la défense de 20%, la santé de 30%, et les chances de critique de 15%", false)
            .addField("<:passif:719664266969612379> 2: Évasion limite", "Évite l'élimination en récupérant 20% de PV lorsque le héros est proche d'être éliminé. (S'active 1x)", false)
	    .addField("<:sp:720742202757873745> Lacération", "Attaque 1 adversaire possédant les PV's les plus élevés avec 275% de la puissance d'attaque. Cette attaque résulte constamment en un coup critique.", false)
            .addField("ATQ", "21042", true)
            .addField("DEF", "754", true)
            .addField("PV", "125330", true)
            .addField("VIT", "484", true)
	     .addField("Blocage", "33%", true)
            .addField("Taux Crit", "23%", true)
            .addField("Dégâts Crit", "15%", true)
            .addField("Armor Crash", "15%", true)
            .addField("Résist. Malus", "23%", true)
            .addField("Réduction dégâts", "24%", true)
	
	message.channel.sendEmbed(embed)

        var bembed = new Discord.RichEmbed()
            .setTitle("Épée du dragon rouge")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Max Level Warrior. ")
            .setThumbnail("https://i.imgur.com/iFRzcK1.png")
            .setImage("https://i.imgur.com/jbKdjhN.png")
            .setDescription("La vitesse est améliorée de X à X proportionnellement aux PV manquants. \n \n **Statistique améliorée:** Santé")

	message.channel.sendEmbed(bembed)

	console.log("La commande de l'Héros Max Level Warrior viens d'être effectuée.");

    }
	
        // Hero Cantare = Prime King Uma
     if (message.content === prefix + "prime king uma"){
        var embed = new Discord.RichEmbed()
            .setTitle("Prime King Uma :black_small_square: <:feu:719638080780501073> :black_small_square: <:competence:719638081162051585> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Prime King __Uma__ est une Roi Démon, et un personnage récurrent de The God of Highschool. Elle est la 'soeur' (pas de sang) de Jecheondaeseong.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.7 | Entraînez-vous, empruntez les pouvoirs des dieux, et remportez les tournois, participants !")
            .setThumbnail("https://i.imgur.com/oV14Viz.png")
            .setImage("https://i.imgur.com/rlvqKAP.gif")
            .addField(":speech_balloon: Citation :", "Je suppose que c'est un au revoir pour l'instant.", false)
            .addField("<:c1:719664266797383680> Home Run !", "Attaque 1 adversaire avec 130% de l'ATQ et récupère 50% des dégâts infligés en santé. Inflige des dégâts additionnels équivalent à 15% de la santé si l'adversaire a un débuff.", false)
            .addField("<:c2:719664268722831421> En avant !", "Attaque tous les adversaires avec 30% de ses PV's, et a 60% de chance de les provoquer pendant 1 tour. Puis attaque l'adversaire avec l'ATQ la plus élevée, infligeant des dégâts égaux à 120% de l'ATQ.", false)
            .addField("<:c3:719664266776412160> Vas-y, Pacho !", "Attaque tous les ennemis avec 115% de l'ATQ, absorbe 5 malus des alliés, puis supprime tous les malus du héros et inflige des dégâts additionnels correspondant à 40% de l'ATQ sur l'adversaire possédant la plus haute ATQ pour chaque malus supprimé.", false)
            .addField("<:passif:719664266969612379> 1: Dalguji n°2", "Augmente l'attaque de 10%, la santé de 10% et les chances de contre-attaque de 15%. Est immunisé pendant 1 tour au début du combat.", false)
            .addField("<:passif:719664266969612379> 2: Vache rouge", "Récupère 20% des PV's quand une attaque dépasse les 20% des PV's. Un bonus de 10% de l'ATQ (Jusqu'à 50%) et de 20% de la DEF (Jusqu'à 100%) est accumulé à chaque fois que le héros attaque ou se fait attaquer. (Appliqué à chaque chain.)", false)
            .addField("ATQ", "20282", true)
            .addField("DEF", "773", true)
            .addField("PV", "122641", true)
            .addField("VIT", "484", true)
            .addField("Blocage", "33%", true)
            .addField("Taux Crit", "20%", true)
            .addField("Dégâts Crit", "5%")
            .addField("Armor Crash", "5%", true)
            .addField("Résist. Malus", "28%", true)
            .addField("Réduction dégâts", "19%", true)
            .addField("Contre attaque", "15%", true)

	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héroïne Prime King Uma viens d'être effectuée.");

    }
	
	        // Hero Cantare = Prime King Uma
     if (message.content === prefix + "pku"){
        var embed = new Discord.RichEmbed()
            .setTitle("Prime King Uma :black_small_square: <:feu:719638080780501073> :black_small_square: <:competence:719638081162051585> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Prime King __Uma__ est une Roi Démon, et un personnage récurrent de The God of Highschool. Elle est la 'soeur' (pas de sang) de Jecheondaeseong.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.7 | Entraînez-vous, empruntez les pouvoirs des dieux, et remportez les tournois, participants !")
            .setThumbnail("https://i.imgur.com/oV14Viz.png")
            .setImage("https://i.imgur.com/rlvqKAP.gif")
            .addField(":speech_balloon: Citation :", "Je suppose que c'est un au revoir pour l'instant.", false)
            .addField("<:c1:719664266797383680> Home Run !", "Attaque 1 adversaire avec 130% de l'ATQ et récupère 50% des dégâts infligés en santé. Inflige des dégâts additionnels équivalent à 15% de la santé si l'adversaire a un débuff.", false)
            .addField("<:c2:719664268722831421> En avant !", "Attaque tous les adversaires avec 30% de ses PV's, et a 60% de chance de les provoquer pendant 1 tour. Puis attaque l'adversaire avec l'ATQ la plus élevée, infligeant des dégâts égaux à 120% de l'ATQ.", false)
            .addField("<:c3:719664266776412160> Vas-y, Pacho !", "Attaque tous les ennemis avec 115% de l'ATQ, absorbe 5 malus des alliés, puis supprime tous les malus du héros et inflige des dégâts additionnels correspondant à 40% de l'ATQ sur l'adversaire possédant la plus haute ATQ pour chaque malus supprimé.", false)
            .addField("<:passif:719664266969612379> 1: Dalguji n°2", "Augmente l'attaque de 10%, la santé de 10% et les chances de contre-attaque de 15%. Est immunisé pendant 1 tour au début du combat.", false)
            .addField("<:passif:719664266969612379> 2: Vache rouge", "Récupère 20% des PV's quand une attaque dépasse les 20% des PV's. Un bonus de 10% de l'ATQ (Jusqu'à 50%) et de 20% de la DEF (Jusqu'à 100%) est accumulé à chaque fois que le héros attaque ou se fait attaquer. (Appliqué à chaque chain.)", false)
            .addField("ATQ", "20282", true)
            .addField("DEF", "773", true)
            .addField("PV", "122641", true)
            .addField("VIT", "484", true)
            .addField("Blocage", "33%", true)
            .addField("Taux Crit", "20%", true)
            .addField("Dégâts Crit", "5%")
            .addField("Armor Crash", "5%", true)
            .addField("Résist. Malus", "28%", true)
            .addField("Réduction dégâts", "19%", true)
            .addField("Contre attaque", "15%", true)

	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héroïne Prime King Uma viens d'être effectuée.");

    }
	
	        // Hero Cantare = Prime King Uma
     if (message.content === prefix + "prime"){
        var embed = new Discord.RichEmbed()
            .setTitle("Prime King Uma :black_small_square: <:feu:719638080780501073> :black_small_square: <:competence:719638081162051585> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Prime King __Uma__ est une Roi Démon, et un personnage récurrent de The God of Highschool. Elle est la 'soeur' (pas de sang) de Jecheondaeseong.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.7 | Entraînez-vous, empruntez les pouvoirs des dieux, et remportez les tournois, participants !")
            .setThumbnail("https://i.imgur.com/oV14Viz.png")
            .setImage("https://i.imgur.com/rlvqKAP.gif")
            .addField(":speech_balloon: Citation :", "Je suppose que c'est un au revoir pour l'instant.", false)
            .addField("<:c1:719664266797383680> Home Run !", "Attaque 1 adversaire avec 130% de l'ATQ et récupère 50% des dégâts infligés en santé. Inflige des dégâts additionnels équivalent à 15% de la santé si l'adversaire a un débuff.", false)
            .addField("<:c2:719664268722831421> En avant !", "Attaque tous les adversaires avec 30% de ses PV's, et a 60% de chance de les provoquer pendant 1 tour. Puis attaque l'adversaire avec l'ATQ la plus élevée, infligeant des dégâts égaux à 120% de l'ATQ.", false)
            .addField("<:c3:719664266776412160> Vas-y, Pacho !", "Attaque tous les ennemis avec 115% de l'ATQ, absorbe 5 malus des alliés, puis supprime tous les malus du héros et inflige des dégâts additionnels correspondant à 40% de l'ATQ sur l'adversaire possédant la plus haute ATQ pour chaque malus supprimé.", false)
            .addField("<:passif:719664266969612379> 1: Dalguji n°2", "Augmente l'attaque de 10%, la santé de 10% et les chances de contre-attaque de 15%. Est immunisé pendant 1 tour au début du combat.", false)
            .addField("<:passif:719664266969612379> 2: Vache rouge", "Récupère 20% des PV's quand une attaque dépasse les 20% des PV's. Un bonus de 10% de l'ATQ (Jusqu'à 50%) et de 20% de la DEF (Jusqu'à 100%) est accumulé à chaque fois que le héros attaque ou se fait attaquer. (Appliqué à chaque chain.)", false)
            .addField("ATQ", "20282", true)
            .addField("DEF", "773", true)
            .addField("PV", "122641", true)
            .addField("VIT", "484", true)
            .addField("Blocage", "33%", true)
            .addField("Taux Crit", "20%", true)
            .addField("Dégâts Crit", "5%")
            .addField("Armor Crash", "5%", true)
            .addField("Résist. Malus", "28%", true)
            .addField("Réduction dégâts", "19%", true)
            .addField("Contre attaque", "15%", true)

	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héroïne Prime King Uma viens d'être effectuée.");

    }

        // Hero Cantare = Viole
    if (message.content === prefix + "viole"){
        var embed = new Discord.RichEmbed()
        .setTitle("Jyu Viole Grace :black_small_square: <:ice:719781844949925898> :black_small_square: <:artmartiaux:723903194819985459> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Jyu __Viole__ Grace est un candidat slayer, et un protagoniste de Tower of God pendant quelques temps.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.5 | Devenez plus fort, et grimpez la tour, élus.")
        .setThumbnail("https://i.imgur.com/HGTeVIH.png")
        .setImage("https://i.imgur.com/5zPu089.gif")
        .addField(":speech_balloon: Citation :", "Je suis Jyu Viole Grace, un des candidats slayer de FUG, Zahard et ses proches... Je vis pour leur mort. C'est pourquoi aucun de vous ne peut devenir mon coéquipier. Je suis votre ennemi.", false)
        .addField("<:c1:719664266797383680> Arts Martiaux de la Famille Ha", "Attaque l'adversaire possédant la plus grande attaque avec 130% de l'ATQ et inflige des dégâts additionnels égaux à 10% de l'ATQ 2 fois. Pour chaque dégâts additionnels, il y a 50% de chance de réduire l'attaque de 30% pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Style Piercing de la Famille Ha", "Enlève tous les bonus d'un adversaire de la ligne avant et arrière et les empêche de recevoir des bonus pendant 1 tour. Puis, perce avec 150% de l'ATQ l'adversaire.", false)
        .addField("<:c3:719664266776412160> Poing Flamboyant du Style d'Hayeol", "Perce tous les adversaires avec 120% de l'ATQ, et inflige 170% de dégâts additionnels à l'adversaire possédant les PV's les plus haut, puis étourdis cet adversaire pendant 1 tour.", false)
        .addField("<:passif:719664266969612379> 1: Percuteur Shinsu", "Augmente l'attaque de 15%, la santé de 15%, la réduction des dégâts de 10%, et augmente les chances de coup critique de 5%.", false)
        .addField("<:passif:719664266969612379> 2: Candidat Slayer", "Augmente de 15% l'ATQ & de 15% les dégâts critique en attaquant si le héros n'est pas sous l'effet d'un malus (jusqu'à 75%), retire 1 malus si le héros en a un, récupère 10% de PV et génère un bouclier avec 10% de PV pendant 2 tours.", false)
        .addField("<:sp:720742202757873745> Canon rayonnant", "Attaque tous les adversaires avec 100% de l'ATQ et attaque en plus 1 adversaire au hasard, infligeant des dégâts égaux à 20% de l'ATQ 5 fois. L'adversaire qui est touché par l'attaque aléatoire a 30 % de probabilité d'être étourdis pendant un tour.", false)
        .addField("ATQ", "18935", true)
        .addField("DEF", "828", true)
        .addField("PV", "143092", true)
        .addField("VIT", "445", true)
        .addField("Taux Crit", "20%", true)
    	.addField("Blocage", "33%", true)
        .addField("Résist. Malus", "23%", true)
     	.addField("Réduction dégâts", "34%", true)

	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héros Jyu Viole Grace viens d'être effectuée.");

    }

        // Hero Cantare = Viole
    if (message.content === prefix + "jyu viole grace"){
        var embed = new Discord.RichEmbed()
        .setTitle("Jyu Viole Grace :black_small_square: <:ice:719781844949925898> :black_small_square: <:artmartiaux:723903194819985459> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Jyu __Viole__ Grace est un candidat slayer, et un protagoniste de Tower of God pendant quelques temps.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.5 | Devenez plus fort, et grimpez la tour, élus.")
        .setThumbnail("https://i.imgur.com/HGTeVIH.png")
        .setImage("https://i.imgur.com/5zPu089.gif")
        .addField(":speech_balloon: Citation :", "Je suis Jyu Viole Grace, un des candidats slayer de FUG, Zahard et ses proches... Je vis pour leur mort. C'est pourquoi aucun de vous ne peut devenir mon coéquipier. Je suis votre ennemi.", false)
        .addField("<:c1:719664266797383680> Arts Martiaux de la Famille Ha", "Attaque l'adversaire possédant la plus grande attaque avec 130% de l'ATQ et inflige des dégâts additionnels égaux à 10% de l'ATQ 2 fois. Pour chaque dégâts additionnels, il y a 50% de chance de réduire l'attaque de 30% pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Style Piercing de la Famille Ha", "Enlève tous les bonus d'un adversaire de la ligne avant et arrière et les empêche de recevoir des bonus pendant 1 tour. Puis, perce avec 150% de l'ATQ l'adversaire.", false)
        .addField("<:c3:719664266776412160> Poing Flamboyant du Style d'Hayeol", "Perce tous les adversaires avec 120% de l'ATQ, et inflige 170% de dégâts additionnels à l'adversaire possédant les PV's les plus haut, puis étourdis cet adversaire pendant 1 tour.", false)
        .addField("<:passif:719664266969612379> 1: Percuteur Shinsu", "Augmente l'attaque de 15%, la santé de 15%, la réduction des dégâts de 10%, et augmente les chances de coup critique de 5%.", false)
        .addField("<:passif:719664266969612379> 2: Candidat Slayer", "Augmente de 15% l'ATQ & de 15% les dégâts critique en attaquant si le héros n'est pas sous l'effet d'un malus (jusqu'à 75%), retire 1 malus si le héros en a un, récupère 10% de PV et génère un bouclier avec 10% de PV pendant 2 tours.", false)
        .addField("<:sp:720742202757873745> Canon rayonnant", "Attaque tous les adversaires avec 100% de l'ATQ et attaque en plus 1 adversaire au hasard, infligeant des dégâts égaux à 20% de l'ATQ 5 fois. L'adversaire qui est touché par l'attaque aléatoire a 30 % de probabilité d'être étourdis pendant un tour.", false)
        .addField("ATQ", "18935", true)
        .addField("DEF", "828", true)
        .addField("PV", "143092", true)
        .addField("VIT", "445", true)
        .addField("Taux Crit", "20%", true)
    	.addField("Blocage", "33%", true)
        .addField("Résist. Malus", "23%", true)
     	.addField("Réduction dégâts", "34%", true)

	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héros Jyu Viole Grace viens d'être effectuée.");

    }

        // Hero Cantare = Viole
    if (message.content === prefix + "jue viole grace"){
        var embed = new Discord.RichEmbed()
        .setTitle("Jyu Viole Grace :black_small_square: <:ice:719781844949925898> :black_small_square: <:artmartiaux:723903194819985459> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Jyu __Viole__ Grace est un candidat slayer, et un protagoniste de Tower of God pendant quelques temps.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.5 | Devenez plus fort, et grimpez la tour, élus.")
        .setThumbnail("https://i.imgur.com/HGTeVIH.png")
        .setImage("https://i.imgur.com/5zPu089.gif")
        .addField(":speech_balloon: Citation :", "Je suis Jyu Viole Grace, un des candidats slayer de FUG, Zahard et ses proches... Je vis pour leur mort. C'est pourquoi aucun de vous ne peut devenir mon coéquipier. Je suis votre ennemi.", false)
        .addField("<:c1:719664266797383680> Arts Martiaux de la Famille Ha", "Attaque l'adversaire possédant la plus grande attaque avec 130% de l'ATQ et inflige des dégâts additionnels égaux à 10% de l'ATQ 2 fois. Pour chaque dégâts additionnels, il y a 50% de chance de réduire l'attaque de 30% pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Style Piercing de la Famille Ha", "Enlève tous les bonus d'un adversaire de la ligne avant et arrière et les empêche de recevoir des bonus pendant 1 tour. Puis, perce avec 150% de l'ATQ l'adversaire.", false)
        .addField("<:c3:719664266776412160> Poing Flamboyant du Style d'Hayeol", "Perce tous les adversaires avec 120% de l'ATQ, et inflige 170% de dégâts additionnels à l'adversaire possédant les PV's les plus haut, puis étourdis cet adversaire pendant 1 tour.", false)
        .addField("<:passif:719664266969612379> 1: Percuteur Shinsu", "Augmente l'attaque de 15%, la santé de 15%, la réduction des dégâts de 10%, et augmente les chances de coup critique de 5%.", false)
        .addField("<:passif:719664266969612379> 2: Candidat Slayer", "Augmente de 15% l'ATQ & de 15% les dégâts critique en attaquant si le héros n'est pas sous l'effet d'un malus (jusqu'à 75%), retire 1 malus si le héros en a un, récupère 10% de PV et génère un bouclier avec 10% de PV pendant 2 tours.", false)
        .addField("<:sp:720742202757873745> Canon rayonnant", "Attaque tous les adversaires avec 100% de l'ATQ et attaque en plus 1 adversaire au hasard, infligeant des dégâts égaux à 20% de l'ATQ 5 fois. L'adversaire qui est touché par l'attaque aléatoire a 30 % de probabilité d'être étourdis pendant un tour.", false)
        .addField("ATQ", "18935", true)
        .addField("DEF", "828", true)
        .addField("PV", "143092", true)
        .addField("VIT", "445", true)
        .addField("Taux Crit", "20%", true)
    	.addField("Blocage", "33%", true)
        .addField("Résist. Malus", "23%", true)
     	.addField("Réduction dégâts", "34%", true)

	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héros Jyu Viole Grace viens d'être effectuée.");

    }

        // Hero Cantare = Queen No Name
        if (message.content === prefix + "queen no name"){
            var embed = new Discord.RichEmbed()
            .setTitle("Queen No Name :black_small_square: <:dark:723941756109979760> :black_small_square: <:dieu:723941755996733583> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Queen __No Name__ est la reine de la guilde New Nightmare.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.5 | Combattez pour monter de niveau, joueur !")
            .setThumbnail("https://i.imgur.com/lTSFMfY.png")
            .setImage("https://i.imgur.com/v9syQKz.gif")
            .addField(":speech_balloon: Citation", "Plus sournois que les démons.... et plus avide que les dragons. C'est humain.", false)
            .addField("<:c1:719664266797383680> Entaille cauchemardesque", "Attaque 2 adversaires aléatoirement avec 110% de l'ATQ et inflige 30% de dégâts additionnels s'ils n'ont aucun bonus avec 50% de chances sur chaque adversaire de retirer un bonus s'ils en ont.", false)
            .addField("<:c2:719664268722831421> Tir de couverture", "Attaque tous les adversaires avec 150% de l'ATQ et augmente le moral de tous les alliés pour attribuer un bonus sur les [dégâts des compétences] de 30% pendant 2 tours.", false)
            .addField("<:c3:719664266776412160> Ouvrons le feu, pour la guerre !", "Attaque tous les adversaires 3 fois avec 50% de l'ATQ. Chaque attaque inflige 60% de dégâts additionnels à un adversaire aléatoire. Récupère 2 Mana si un adversaire est éliminé par cette attaque.", false)
            .addField("<:passif:719664266969612379> 1: La Force de New-Nightmare", "Augmente l'attaque de 15%, la santé de 15% et la réduction des dégâts de 10%", false)
            .addField("<:passif:719664266969612379> 2: Karma", "Le héros devient immunisé aux dégâts pendant 1 tour lorsqu'un allié ou un adversaire est éliminé. Restaure les PV's d'un allié à hauteur de 50% des PV's de Queen No Name lorsque celle-ci est éliminée, et rends l'allié immunisé aux dégâts une fois.", false)
            .addField("<:sp:720742202757873745> Allez, Nightmare !", "Attaque tous les adversaires avec 140% de l'ATQ avec une attaque absolue qui ignore la réduction des dégâts et la résistance aux malus de 50%, et inflige [Confusion] pendant 1 tour à un adversaire aléatoire.", false)
            .addField("ATQ", "22199", true)
            .addField("DEF", "811", true)
            .addField("PV", "123636", true)
            .addField("VIT", "496", true)
            .addField("Taux Crit", "15%", true)
            .addField("Blocage", "33%", true)
            .addField("Résist. Malus", "28%", true)
            .addField("Réduction dégâts", "29%", true)
    
        message.channel.sendEmbed(embed)
    
        console.log("La commande de l'Héroïne Queen No Name viens d'être effectuée.");
    
        }
	
	
        // Hero Cantare = Queen No Name
        if (message.content === prefix + "qnn"){
            var embed = new Discord.RichEmbed()
            .setTitle("Queen No Name :black_small_square: <:dark:723941756109979760> :black_small_square: <:dieu:723941755996733583> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Queen __No Name__ est la reine de la guilde New Nightmare.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.5 | Combattez pour monter de niveau, joueur !")
            .setThumbnail("https://i.imgur.com/lTSFMfY.png")
            .setImage("https://i.imgur.com/v9syQKz.gif")
            .addField(":speech_balloon: Citation", "Plus sournois que les démons.... et plus avide que les dragons. C'est humain.", false)
            .addField("<:c1:719664266797383680> Entaille cauchemardesque", "Attaque 2 adversaires aléatoirement avec 110% de l'ATQ et inflige 30% de dégâts additionnels s'ils n'ont aucun bonus avec 50% de chances sur chaque adversaire de retirer un bonus s'ils en ont.", false)
            .addField("<:c2:719664268722831421> Tir de couverture", "Attaque tous les adversaires avec 150% de l'ATQ et augmente le moral de tous les alliés pour attribuer un bonus sur les [dégâts des compétences] de 30% pendant 2 tours.", false)
            .addField("<:c3:719664266776412160> Ouvrons le feu, pour la guerre !", "Attaque tous les adversaires 3 fois avec 50% de l'ATQ. Chaque attaque inflige 60% de dégâts additionnels à un adversaire aléatoire. Récupère 2 Mana si un adversaire est éliminé par cette attaque.", false)
            .addField("<:passif:719664266969612379> 1: La Force de New-Nightmare", "Augmente l'attaque de 15%, la santé de 15% et la réduction des dégâts de 10%", false)
            .addField("<:passif:719664266969612379> 2: Karma", "Le héros devient immunisé aux dégâts pendant 1 tour lorsqu'un allié ou un adversaire est éliminé. Restaure les PV's d'un allié à hauteur de 50% des PV's de Queen No Name lorsque celle-ci est éliminée, et rends l'allié immunisé aux dégâts une fois.", false)
            .addField("<:sp:720742202757873745> Allez, Nightmare !", "Attaque tous les adversaires avec 140% de l'ATQ avec une attaque absolue qui ignore la réduction des dégâts et la résistance aux malus de 50%, et inflige [Confusion] pendant 1 tour à un adversaire aléatoire.", false)
            .addField("ATQ", "22199", true)
            .addField("DEF", "811", true)
            .addField("PV", "123636", true)
            .addField("VIT", "496", true)
            .addField("Taux Crit", "15%", true)
            .addField("Blocage", "33%", true)
            .addField("Résist. Malus", "28%", true)
            .addField("Réduction dégâts", "29%", true)
    
        message.channel.sendEmbed(embed)
    
        console.log("La commande de l'Héroïne Queen No Name viens d'être effectuée.");
    
        }
	
	
        // Hero Cantare = Queen No Name
        if (message.content === prefix + "queen"){
            var embed = new Discord.RichEmbed()
            .setTitle("Queen No Name :black_small_square: <:dark:723941756109979760> :black_small_square: <:dieu:723941755996733583> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Queen __No Name__ est la reine de la guilde New Nightmare.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.5 | Combattez pour monter de niveau, joueur !")
            .setThumbnail("https://i.imgur.com/lTSFMfY.png")
            .setImage("https://i.imgur.com/v9syQKz.gif")
            .addField(":speech_balloon: Citation", "Plus sournois que les démons.... et plus avide que les dragons. C'est humain.", false)
            .addField("<:c1:719664266797383680> Entaille cauchemardesque", "Attaque 2 adversaires aléatoirement avec 110% de l'ATQ et inflige 30% de dégâts additionnels s'ils n'ont aucun bonus avec 50% de chances sur chaque adversaire de retirer un bonus s'ils en ont.", false)
            .addField("<:c2:719664268722831421> Tir de couverture", "Attaque tous les adversaires avec 150% de l'ATQ et augmente le moral de tous les alliés pour attribuer un bonus sur les [dégâts des compétences] de 30% pendant 2 tours.", false)
            .addField("<:c3:719664266776412160> Ouvrons le feu, pour la guerre !", "Attaque tous les adversaires 3 fois avec 50% de l'ATQ. Chaque attaque inflige 60% de dégâts additionnels à un adversaire aléatoire. Récupère 2 Mana si un adversaire est éliminé par cette attaque.", false)
            .addField("<:passif:719664266969612379> 1: La Force de New-Nightmare", "Augmente l'attaque de 15%, la santé de 15% et la réduction des dégâts de 10%", false)
            .addField("<:passif:719664266969612379> 2: Karma", "Le héros devient immunisé aux dégâts pendant 1 tour lorsqu'un allié ou un adversaire est éliminé. Restaure les PV's d'un allié à hauteur de 50% des PV's de Queen No Name lorsque celle-ci est éliminée, et rends l'allié immunisé aux dégâts une fois.", false)
            .addField("<:sp:720742202757873745> Allez, Nightmare !", "Attaque tous les adversaires avec 140% de l'ATQ avec une attaque absolue qui ignore la réduction des dégâts et la résistance aux malus de 50%, et inflige [Confusion] pendant 1 tour à un adversaire aléatoire.", false)
            .addField("ATQ", "22199", true)
            .addField("DEF", "811", true)
            .addField("PV", "123636", true)
            .addField("VIT", "496", true)
            .addField("Taux Crit", "15%", true)
            .addField("Blocage", "33%", true)
            .addField("Résist. Malus", "28%", true)
            .addField("Réduction dégâts", "29%", true)
    
        message.channel.sendEmbed(embed)
    
        console.log("La commande de l'Héroïne Queen No Name viens d'être effectuée.");
    
        }
	
	        // Hero Cantare = Queen No Name
        if (message.content === prefix + "pute sans nom"){
            var embed = new Discord.RichEmbed()
            .setTitle("Queen No Name :black_small_square: <:dark:723941756109979760> :black_small_square: <:dieu:723941755996733583> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Queen __No Name__ est la reine de la guilde New Nightmare.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.5 | Combattez pour monter de niveau, joueur !")
            .setThumbnail("https://i.imgur.com/lTSFMfY.png")
            .setImage("https://i.imgur.com/v9syQKz.gif")
            .addField(":speech_balloon: Citation", "Plus sournois que les démons.... et plus avide que les dragons. C'est humain.", false)
            .addField("<:c1:719664266797383680> Entaille cauchemardesque", "Attaque 2 adversaires aléatoirement avec 110% de l'ATQ et inflige 30% de dégâts additionnels s'ils n'ont aucun bonus avec 50% de chances sur chaque adversaire de retirer un bonus s'ils en ont.", false)
            .addField("<:c2:719664268722831421> Tir de couverture", "Attaque tous les adversaires avec 150% de l'ATQ et augmente le moral de tous les alliés pour attribuer un bonus sur les [dégâts des compétences] de 30% pendant 2 tours.", false)
            .addField("<:c3:719664266776412160> Ouvrons le feu, pour la guerre !", "Attaque tous les adversaires 3 fois avec 50% de l'ATQ. Chaque attaque inflige 60% de dégâts additionnels à un adversaire aléatoire. Récupère 2 Mana si un adversaire est éliminé par cette attaque.", false)
            .addField("<:passif:719664266969612379> 1: La Force de New-Nightmare", "Augmente l'attaque de 15%, la santé de 15% et la réduction des dégâts de 10%", false)
            .addField("<:passif:719664266969612379> 2: Karma", "Le héros devient immunisé aux dégâts pendant 1 tour lorsqu'un allié ou un adversaire est éliminé. Restaure les PV's d'un allié à hauteur de 50% des PV's de Queen No Name lorsque celle-ci est éliminée, et rends l'allié immunisé aux dégâts une fois.", false)
            .addField("<:sp:720742202757873745> Allez, Nightmare !", "Attaque tous les adversaires avec 140% de l'ATQ avec une attaque absolue qui ignore la réduction des dégâts et la résistance aux malus de 50%, et inflige [Confusion] pendant 1 tour à un adversaire aléatoire.", false)
            .addField("ATQ", "22199", true)
            .addField("DEF", "811", true)
            .addField("PV", "123636", true)
            .addField("VIT", "496", true)
            .addField("Taux Crit", "15%", true)
            .addField("Blocage", "33%", true)
            .addField("Résist. Malus", "28%", true)
            .addField("Réduction dégâts", "29%", true)
    
        message.channel.sendEmbed(embed)
    
        console.log("La commande de l'Héroïne Queen No Name viens d'être effectuée.");
    
        }
	
    // Hero Cantare = Yeon's Flame Khun
    if (message.content === prefix + "flame khun"){
        var embed = new Discord.RichEmbed()
        .setTitle("Yeon's Flame Khun :black_small_square: <:feu:719638080780501073> :black_small_square: <:element:724668549028905073> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Yeon's Flame __Khun__ est un régulier de Tower of God. Il est le meilleur ami de Baam, et est un des protagonistes de la série.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.5 | Devenez plus fort, et grimpez la tour, élus.")
        .setThumbnail("https://i.imgur.com/eW0LR11.png")
        .setImage("https://i.imgur.com/vctn6HY.gif")
        .addField(":speech_balloon: Citation", "Je ne serais pas gouverné. Je créai mes propres règles. C'est l'état d'esprit d'un dirigeant.", false)
        .addField("<:c1:719664266797383680> Ignition", "Attaque tous les ennemis avec 70% de l'ATQ et augmente de 30% l'ATQ de l'allié possédant l'ATQ la plus élevée pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Flamme de Yeon: Feu brûlant", "Augmente l'ATQ de tous les alliés de 10% (jusqu'à 30%) et attaque tous les ennemis avec 120% de l'ATQ. Inflige 3 brûlures qui font des dégâts équivalent à 30% de l'ATQ pendant 2 tours.", false)
        .addField("<:c3:719664266776412160> Flamme de Yeon: Éruption", "Attaque tous les ennemis avec 140% de l'ATQ et diminue leur vitesse de 100% pendant 2 tours. Confère un coup critique garanti à tous les alliés pour leur prochaine attaque.", false)
        .addField("<:passif:719664266969612379> 1: Flamme bleue", "Augmente l'ATQ de 15%, la santé de 15% et la vitesse de 10%.", false)
        .addField("<:passif:719664266969612379> 2: Oiseau enflammé", "Réanime 1 allié qui a été éliminé quand Khun utilise une compétence 2chain et quand Khun est proche de l'élimination, récupère 100% des PV's et confère à Khun Isolation du champ de bataille (Ignore les dégâts) pendant un tour. (Chaque effet peut avoir lieu 1x.)", false)
        .addField("ATQ", "26646", true)
        .addField("DEF", "532 ", true)
        .addField("PV", "109416", true)
        .addField("VIT", "448", true)
        .addField("Taux Crit", "30%", true)
        .addField("Dégâts Crit", "10%", true)
        .addField("Blocage", "33%", true)
        .addField("Résist. Malus", "23%", true)
        .addField("Réduction dégâts", "19%", true)

    message.channel.sendEmbed(embed)

    console.log("La commande de l'Héros Yeon's Flame Khun viens d'être effectuée.");

    }
	
	// Hero Cantare = Unleashed Raizel
if (message.content === prefix + "unleashed raizel"){
    var embed = new Discord.RichEmbed()
    .setTitle("Unleashed Raizel :black_small_square: <:dark:723941756109979760> :black_small_square: <:dieu:723941755996733583> :black_small_square: <:ss:719641320343470150>")
    .setDescription("Unleashed __Raizel__ est le protagoniste de Noblesse.")
    .setColor("RANDOM")
    .setFooter("Khun Ran v0.5 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
    .setThumbnail("https://i.imgur.com/kwMfqwu.png")
    .setImage("https://i.imgur.com/Le3UW9p.gif")
    .addField(":speech_balloon: Citation", "Noblesse oblige.", false)
    .addField("<:c1:719664266797383680> Champ de Sang: Libération", "Attaque 2 adversaires avec 120% de l'ATQ, utilise 10% de ses PV's restants pour infliger des dégâts additionnels équivalent à 150% des PV's utilisés.", false)
    .addField("<:c2:719664268722831421> Phénix de Sang", "Attaque tous les adversaires avec 105% de l'ATQ et inflige [soins impossible] avec 90% de chances pendant 2 tours. Utilise 10% de ses PV's restants pour infliger des dégâts additionnels équivalent à 200% des PV's utilisés.", false)
    .addField("<:c3:719664266776412160> Trou noir", "Attaque tous les adversaires avec 120% de l'ATQ et utilise 15% de ses PV's restants pour infliger des dégâts additionnels équivalent à 250% des PV's utilisés. La prochaine attaque de tous les alliés ignore 40% de résistance aux malus et de réduction des dégâts.", false)
    .addField("<:passif:719664266969612379> 1: Brisement du sceau", "Augmente la santé de 25%, la défense de 10% et la réduction des dégâts de 15%.", false)
    .addField("<:passif:719664266969612379> 2: Souverain du Sang", "Deviens invincible pendant 1 tour lorsque les PV's passent en dessous de 25% et en récupère 50%. Tous les adversaires reçoivent des dégâts équivalent à 10% des PV's maximum du Héros, et leur vitesse est réduite de 100 pendant 2 tours.", false)
    .addField("<:sp:720742202757873745> Champ de Sang: Contrôle", "Utilise 10% de ses PV's pour infliger des dégâts équivalent à 150% de ses PV's utilisés pour attaquer l'adversaire avec les PV's les plus haut et augmente l'ATQ de tous les alliés à hauteur de 50% des PV's utilisés pendant 2 tours.", false)
    .addField("ATQ", "19846", true)
    .addField("DEF", "892", true)
    .addField("PV", "138150", true)
    .addField("VIT", "496", true)
    .addField("Taux Crit", "15%", true)
    .addField("Dégâts Crit", "0%", true)
    .addField("Blocage", "33%", true)
    .addField("Résist. Malus", "28%", true)
    .addField("Réduction dégâts", "39%", true)

message.channel.sendEmbed(embed)

console.log("La commande de l'Héros Unleashed Raizel viens d'être effectuée.");

}
	
	// Hero Cantare = Unleashed Raizel
if (message.content === prefix + "unleashed"){
    var embed = new Discord.RichEmbed()
    .setTitle("Unleashed Raizel :black_small_square: <:dark:723941756109979760> :black_small_square: <:dieu:723941755996733583> :black_small_square: <:ss:719641320343470150>")
    .setDescription("Unleashed __Raizel__ est le protagoniste de Noblesse.")
    .setColor("RANDOM")
    .setFooter("Khun Ran v0.5 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
    .setThumbnail("https://i.imgur.com/kwMfqwu.png")
    .setImage("https://i.imgur.com/Le3UW9p.gif")
    .addField(":speech_balloon: Citation", "Noblesse oblige.", false)
    .addField("<:c1:719664266797383680> Champ de Sang: Libération", "Attaque 2 adversaires avec 120% de l'ATQ, utilise 10% de ses PV's restants pour infliger des dégâts additionnels équivalent à 150% des PV's utilisés.", false)
    .addField("<:c2:719664268722831421> Phénix de Sang", "Attaque tous les adversaires avec 105% de l'ATQ et inflige [soins impossible] avec 90% de chances pendant 2 tours. Utilise 10% de ses PV's restants pour infliger des dégâts additionnels équivalent à 200% des PV's utilisés.", false)
    .addField("<:c3:719664266776412160> Trou noir", "Attaque tous les adversaires avec 120% de l'ATQ et utilise 15% de ses PV's restants pour infliger des dégâts additionnels équivalent à 250% des PV's utilisés. La prochaine attaque de tous les alliés ignore 40% de résistance aux malus et de réduction des dégâts.", false)
    .addField("<:passif:719664266969612379> 1: Brisement du sceau", "Augmente la santé de 25%, la défense de 10% et la réduction des dégâts de 15%.", false)
    .addField("<:passif:719664266969612379> 2: Souverain du Sang", "Deviens invincible pendant 1 tour lorsque les PV's passent en dessous de 25% et en récupère 50%. Tous les adversaires reçoivent des dégâts équivalent à 10% des PV's maximum du Héros, et leur vitesse est réduite de 100 pendant 2 tours.", false)
    .addField("<:sp:720742202757873745> Champ de Sang: Contrôle", "Utilise 10% de ses PV's pour infliger des dégâts équivalent à 150% de ses PV's utilisés pour attaquer l'adversaire avec les PV's les plus haut et augmente l'ATQ de tous les alliés à hauteur de 50% des PV's utilisés pendant 2 tours.", false)
    .addField("ATQ", "19846", true)
    .addField("DEF", "892", true)
    .addField("PV", "138150", true)
    .addField("VIT", "496", true)
    .addField("Taux Crit", "15%", true)
    .addField("Dégâts Crit", "0%", true)
    .addField("Blocage", "33%", true)
    .addField("Résist. Malus", "28%", true)
    .addField("Réduction dégâts", "39%", true)

message.channel.sendEmbed(embed)

console.log("La commande de l'Héros Unleashed Raizel viens d'être effectuée.");

}

// Hero Cantare = Raizel
if (message.content === prefix + "raizel"){
    var embed = new Discord.RichEmbed()
    .setTitle("Raizel :black_small_square: <:ice:719781844949925898> :black_small_square: <:evil:724805535727353856> :black_small_square: <:a_:724817244789538819>")
    .setDescription("Cadis Etrama Di __Raizel__ est le protagoniste de Noblesse.")
    .setColor("RANDOM")
    .setFooter("Khun Ran v0.4 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
    .setThumbnail("https://i.imgur.com/9BmU9ET.png")
    .setImage("https://i.imgur.com/lH8cE16.png")
    .addField(":speech_balloon: Citation", "Noblesse oblige.", false)
    .addField("<:c1:719664266797383680> Autorité du Maître", "Attaque 1 adversaire aléatoire de la ligne adverse avec 115% de l'ATQ et réduit l'ATQ de celui-ci de 30% avec 65% de chances pendant 2 tours.", false)
    .addField("<:c2:719664268722831421> Pouvoir psychique", "Attaque tous les adversaires avec 110% de l'ATQ et augmente la durée de leur malus de 1 tour.", false)
    .addField("<:c3:719664266776412160> Champ de Sang: Activation", "Attaque tous les adversaires avec 110% de l'ATQ et les réduit au silence pendant 1 tour. Octroit un bouclier à tous les alliés avec 40% de ses PV's pendant 2 tours.", false)
    .addField("<:passif:719664266969612379> 1: Noblesse", "Augmente l'attaque de 10% et la santé de 20%", false)
    .addField("<:passif:719664266969612379> 2: Maître du regard", "Inflige 'Thwart' sur l'ennemi ayant l'ATQ la plus élevée au début du combat pour contrecarrer son attaque.", false)
    .addField("ATQ", "16183", true)
    .addField("DEF", "593", true)
    .addField("PV", "113397", true)
    .addField("VIT", "362", true)
    .addField("Taux Crit", "15%", true)
    .addField("Armor Crash", "5%", true)
    .addField("Blocage", "33%", true)
    .addField("Résist. Malus", "23%", true)
    .addField("Réduction dégâts", "24%", true)

message.channel.sendEmbed(embed)

console.log("La commande de l'Héros Raizel viens d'être effectuée.");

}  

 // Hero Cantare = Muzaka
    if (message.content === prefix + "muzaka"){
        var embed = new Discord.RichEmbed()
        .setTitle("Muzaka :black_small_square: <:nature:719638081195475114> :black_small_square: <:artmartiaux:723903194819985459> :black_small_square: <:s_:724831181341720586>")
        .setDescription("__Muzaka__ est l'ancien Lord des Loup Garous.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.5 | Surpassez-vous, maîtrisez votre nature, et combattez pour votre Lord.")
        .setThumbnail("https://i.imgur.com/BLmMuzE.png")
        .setImage("https://i.imgur.com/CGOKPox.png")
        .addField(":speech_balloon: Citation", "Oh... Mon ~~ Raizel... Nous nous rencontrons à nouveau.", false)
        .addField("<:c1:719664266797383680> Contre-attaque", "Attaque 2 adversaires de la ligne arrière avec 105% de l'ATQ et se soigne à hauteur de 15% des dégâts infligés. Déclenche une contre-attaque la prochaine fois qu'il sera attaqué.", false)
        .addField("<:c2:719664268722831421> Chasse", "Perce tous les adversaires (ignore DEF) avec 130% de l'ATQ, les dégâts augmentent jusqu'à 80% suivant la réduction du nombre d'adversaires.", false)
        .addField("<:c3:719664266776412160> Rugissement", "Attaque l'adversaire avec la santé la plus élevée avec 200% de l'ATQ, inflige des dégâts additionnels basés sur 35% de la santé maximale, inflige 'Thwart' pour contrecarrer la prochaine attaque de l'adversaire.", false)
        .addField("<:passif:719664266969612379> 1: Souverain de la meute", " Augmente l'ATQ de 10%, la santé de 15% et la réduction des dégâts de 10%", false)
        .addField("<:passif:719664266969612379> 2: Hurlement", "Supprime 1 malus à la fin du tour s'il y en a, restaure 10% de la santé de tous les alliés, et immunise Muzaka aux dégâts pendant 1 tour.", false)
        .addField("ATQ", "14307", true)
        .addField("DEF", "720", true)
        .addField("PV", "134534", true)
        .addField("VIT", "395", true)
	    .addField("Blocage", "33%", true)
        .addField("Taux Crit", "15%", true)
        .addField("Résist. Malus", "23%", true)
        .addField("Réduction dégâts", "34%", true)

    message.channel.sendEmbed(embed)

    console.log("La commande de l'Héros Muzaka viens d'être effectuée.");

    }
	
	 // Hero Cantare = Seira
    if (message.content === prefix + "seira"){
        var embed = new Discord.RichEmbed()
        .setTitle("Seira :black_small_square: <:nature:719638081195475114> :black_small_square: <:weapon:719781844744142875> :black_small_square: <:ss:719641320343470150>")
        .setDescription("__Seira__ est une Noble ainsi qu'une étudiante à l'académie Ye Ran. Elle est également un des 8 chefs de clans.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.9 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
        .setThumbnail("https://i.imgur.com/th1QxyB.png")
        .setImage("https://i.imgur.com/w3onuiJ.gif")
        .addField(":speech_balloon: Citation", "Je n'ai aucun intérêt en ta faux de la mort.", false)
        .addField("<:c1:719664266797383680> Griffe tranchante", "Attaque un adversaire avec 140% de l'ATQ et augmente les chances de critique de 30% pendant 2 tours", false)
        .addField("<:c2:719664268722831421> Coup de pied retourné arrière", "Attaque l'adversaire possédant la santé la plus élevée avec 210% de l'ATQ et inflige 2 saignements infligeant des dégâts à hauteur de 30% de l'ATQ pendant 2 tours. Si la cible est affecté par un saignement, génère 30% de dégâts supplémentaires.", false)
        .addField("<:c3:719664266776412160> Faux de la Mort: Tranchant de la pleine lune", "Attaque tous les adversaires avec 135% de l'ATQ et diminue leur attaque de 30%. Inflige deux saignements supplémentaires si la cible est déjà affecté par un saignement.", false)
        .addField("<:passif:719664266969612379> 1: Chef du Clan Loyard", " Augmente l'ATQ de 20%, la santé de 10% et les chances de coup critique de 15%.", false)
        .addField("<:passif:719664266969612379> 2: Lame aiguisée", "Si un coup critique se produit, inflige un saignement à hauteur de 30% de l'ATQ pendant 2 tours. Si la cible est affectée par un saignement, l'attaque devient une attaque absolue (ignorant la réduction de dégâts et la défense de 30%). Devient immunisé aux dégâts une fois lorsque la santé tombe en dessous de 50%.", false)
        .addField("<:sp:720742202757873745> Faux de la Mort", "Attaque l'adversaire avec la santé la plus élevée à hauteur de 180% de l'ATQ et inflige aléatoirement jusqu'à 4 saignements sur tous les adversaires. Active une immunité aux dégâts pour 1 coup.", false)
	    .addField("ATQ", "22537", true)
        .addField("DEF", "628", true)
        .addField("PV", "103095", true)
        .addField("VIT", "484", true)
	    .addField("Blocage", "33%", true)
        .addField("Taux Crit", "33%", true)
	    .addField("Armor Crash", "15%", true)
        .addField("Résist. Malus", "23%", true)
        .addField("Réduction dégâts", "19%", true)

    message.channel.sendEmbed(embed)

    console.log("La commande de l'Héroïne Seira viens d'être effectuée.");

    }
	
		 // Hero Cantare = Nine Tails Ilpyo Park
    if (message.content === prefix + "nine tails ilpyo park"){
        var embed = new Discord.RichEmbed()
        .setTitle("Nine Tails Ilpyo Park :black_small_square: <:feu:719638080780501073> :black_small_square: <:element:724668549028905073> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Nine Tails __Ilpyo Park__ est un personnage secondaire récurrent de The God of Highschool, il peut être considéré comme un rival de Mori Jin, et est un participant puissant des tournois.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.11 | Entraînez-vous, empruntez les pouvoirs des dieux, et remportez les tournois, participants !")
        .setThumbnail("https://i.imgur.com/kTISvE4.png")
        .setImage("https://i.imgur.com/xrDj1e9.gif")
        .addField(":speech_balloon: Citation", "Il semble que je ne sois pas trop en retard.", false)
        .addField("<:c1:719664266797383680> Technique secrète du style Ssamsu: Coup de pied flamboyant", "Attaque 2 adversaires avec 105% de l'ATQ, avant d'avoir 70% de chance de générer 1 [Brûlure] équivalente à 30% de l'ATQ pendant 2 tours. Si l'adversaire est déjà affecté par un malus, augmente la durée des malus de dégâts d'un tour.", false)
        .addField("<:c2:719664268722831421> Coup de pied flamboyant - Deuxième étape: Double piliers de feu", "Attaque tous les adversaires avec 115% de l'ATQ, avant de générer 2 [Brûlures] équivalentes à 30% de l'ATQ  pendant 2 tours. Si l'adversaire est déjà affecté par une [Brûlure], inflige [Soins impossible] pendant 2 tours et 40% de dégâts supplémentaires.", false)
        .addField("<:c3:719664266776412160> Technique secrète ultime du style Ssamsu: Coup de pied flamboyant - Troisième étape: Triple frappe enflammée du nirvana", "Attaque tous les adversaires avec 130% de l'ATQ et inflige 50% de dégâts supplémentaires aux adversaires affectés par un malus, avant de faire exploser toutes les [Brûlures] pour 40% de dégâts supplémentaires par [Brûlure].", false)
        .addField("<:passif:719664266969612379> 1: Renard noir", " Augmente l'ATQ de 15%, la précision des débuffs de 15%, la santé de 10% et la réduction des dégâts de 5%", false)
        .addField("<:passif:719664266969612379> 2: 9ème Queue: Activation !", "À la fin du tour, si Ilpyo Park est affecté par un malus, le supprime et octroit un bouclier équivalent à 20% de la santé maximale. Si Ilpyo Park meurt par une [Brûlure], le réanime et le rends immortel pendant 1 tour. S'active 1x.", false)
	.addField("ATQ", "24289", true)
        .addField("DEF", "532", true)
        .addField("PV", "104659", true)
        .addField("VIT", "407", true)
	.addField("Blocage", "33%", true)
        .addField("Taux Crit", "31.9%", true)
    	.addField("Dégâts Crit", "22%", true)
        .addField("Résist. Malus", "23%", true)
        .addField("Réduction dégâts", "24%", true)

    message.channel.sendEmbed(embed)

    console.log("La commande de l'Héros Nine Tails Ilpyo Park viens d'être effectuée.");

    }
	
				 // Hero Cantare = Nine Tails Ilpyo Park
    if (message.content === prefix + "nine tails"){
        var embed = new Discord.RichEmbed()
        .setTitle("Nine Tails Ilpyo Park :black_small_square: <:feu:719638080780501073> :black_small_square: <:element:724668549028905073> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Nine Tails __Ilpyo Park__ est un personnage secondaire récurrent de The God of Highschool, il peut être considéré comme un rival de Mori Jin, et est un participant puissant des tournois.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.11 | Entraînez-vous, empruntez les pouvoirs des dieux, et remportez les tournois, participants !")
        .setThumbnail("https://i.imgur.com/kTISvE4.png")
        .setImage("https://i.imgur.com/xrDj1e9.gif")
        .addField(":speech_balloon: Citation", "Il semble que je ne sois pas trop en retard.", false)
        .addField("<:c1:719664266797383680> Technique secrète du style Ssamsu: Coup de pied flamboyant", "Attaque 2 adversaires avec 105% de l'ATQ, avant d'avoir 70% de chance de générer 1 [Brûlure] équivalente à 30% de l'ATQ pendant 2 tours. Si l'adversaire est déjà affecté par un malus, augmente la durée des malus de dégâts d'un tour.", false)
        .addField("<:c2:719664268722831421> Coup de pied flamboyant - Deuxième étape: Double piliers de feu", "Attaque tous les adversaires avec 115% de l'ATQ, avant de générer 2 [Brûlures] équivalentes à 30% de l'ATQ  pendant 2 tours. Si l'adversaire est déjà affecté par une [Brûlure], inflige [Soins impossible] pendant 2 tours et 40% de dégâts supplémentaires.", false)
        .addField("<:c3:719664266776412160> Technique secrète ultime du style Ssamsu: Coup de pied flamboyant - Troisième étape: Triple frappe enflammée du nirvana", "Attaque tous les adversaires avec 130% de l'ATQ et inflige 50% de dégâts supplémentaires aux adversaires affectés par un malus, avant de faire exploser toutes les [Brûlures] pour 40% de dégâts supplémentaires par [Brûlure].", false)
        .addField("<:passif:719664266969612379> 1: Renard noir", " Augmente l'ATQ de 15%, la précision des débuffs de 15%, la santé de 10% et la réduction des dégâts de 5%", false)
        .addField("<:passif:719664266969612379> 2: 9ème Queue: Activation !", "À la fin du tour, si Ilpyo Park est affecté par un malus, le supprime et octroit un bouclier équivalent à 20% de la santé maximale. Si Ilpyo Park meurt par une [Brûlure], le réanime et le rends immortel pendant 1 tour. S'active 1x.", false)
	.addField("ATQ", "24289", true)
        .addField("DEF", "532", true)
        .addField("PV", "104659", true)
        .addField("VIT", "407", true)
	.addField("Blocage", "33%", true)
        .addField("Taux Crit", "31.9%", true)
    	.addField("Dégâts Crit", "22%", true)
        .addField("Résist. Malus", "23%", true)
        .addField("Réduction dégâts", "24%", true)

    message.channel.sendEmbed(embed)

    console.log("La commande de l'Héros Nine Tails Ilpyo Park viens d'être effectuée.");

    }

        // Hero Cantare = Pure Green Arin
        if (message.content === prefix + "pure green arin"){
            var embed = new Discord.RichEmbed()
            .setTitle("Pure Green Arin :black_small_square: <:ice:719781844949925898> :black_small_square: <:element:724668549028905073> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Personnage sorti de l'univers de Tetra, uniquement dans Hero Cantare.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.11 | Avancez, évoluez, et combattez pour devenir le meilleur d'Hero Cantare!")
            .setThumbnail("https://i.imgur.com/zZraoSj.png")
            .setImage("https://i.imgur.com/YjpTHXy.gif")
            .addField(":speech_balloon: Citation", "Aucune.", false)
            .addField("<:c1:719664266797383680> Transpercement", "Attaque l'adversaire avec 90% de l'ATQ et soigne 2 alliés possédant le moins de PV pour [7% de la santé d'Arin]. Octroit [Soins continus] équivalent à 7% de la santé pendant 2 tours, si un allié est déjà affecté par un [Soins continus], restaure immédiatement 4% de la santé.", false)
            .addField("<:c2:719664268722831421> Rotation circulaire de la tortue", "Soigne 2 alliés possédant la santé la plus faible pour [17% de la santé d'Arin] et octroit [Soins continus] équivalent à 17% de la santé pendant 2 tours. Si un [Soins continus] est déjà effectif, restaure immédiatement 7% de la santé.", false)
            .addField("<:c3:719664266776412160> Balle de Dauphin", "Inflige des dégâts équivalents à [20% de la santé maximale d'Arin] à l'adversaire possédant le moins de santé, restaure immédiatement 15% de la santé des alliés et octroit [Soins continus] équivalent à 15% de la santé pendant 3 tours.", false)
            .addField("<:passif:719664266969612379> 1: Soleil étincelant", "Augmente la santé de 20%, la défense de 20%, la réduction de dégâts de 5% et la résistance aux malus de 10%", false)
            .addField("<:passif:719664266969612379> 2: Été agité", "Quand la santé passe en dessous des 50%, restaure 30% de la santé des alliés et octroit [Soins continus] équivalent à 10% de la santé pendant 2 tours. Quand Arin meurt, restaure 50% de la santé à l'allié possédant l'ATQ la plus élevée, et lui octroit [Soins continus] équivalent à 50% de la santé pendant 2 tours. (S'active 1x)", false)
            .addField("ATQ", "20115", true)
            .addField("DEF", "1015", true)
            .addField("PV", "129251", true)
            .addField("VIT", "407", true)
            .addField("Blocage", "33%", true)
            .addField("Taux Crit", "15%", true)
            .addField("Dégâts Crit", "10%", true)
            .addField("Résist. Malus", "33%", true)
            .addField("Réduction dégâts", "24%", true)
    
        message.channel.sendEmbed(embed)
    
        console.log("La commande de l'Héroïne Pure Green Arin viens d'être effectuée.");

    }

        // Hero Cantare = Pure Green Arin
        if (message.content === prefix + "ss arin"){
            var embed = new Discord.RichEmbed()
            .setTitle("Pure Green Arin :black_small_square: <:ice:719781844949925898> :black_small_square: <:element:724668549028905073> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Personnage sorti de l'univers de Tetra, uniquement dans Hero Cantare.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.11 | Avancez, évoluez, et combattez pour devenir le meilleur d'Hero Cantare!")
            .setThumbnail("https://i.imgur.com/zZraoSj.png")
            .setImage("https://i.imgur.com/YjpTHXy.gif")
            .addField(":speech_balloon: Citation", "Aucune.", false)
            .addField("<:c1:719664266797383680> Transpercement", "Attaque l'adversaire avec 90% de l'ATQ et soigne 2 alliés possédant le moins de PV pour [7% de la santé d'Arin]. Octroit [Soins continus] équivalent à 7% de la santé pendant 2 tours, si un allié est déjà affecté par un [Soins continus], restaure immédiatement 4% de la santé.", false)
            .addField("<:c2:719664268722831421> Rotation circulaire de la tortue", "Soigne 2 alliés possédant la santé la plus faible pour [17% de la santé d'Arin] et octroit [Soins continus] équivalent à 17% de la santé pendant 2 tours. Si un [Soins continus] est déjà effectif, restaure immédiatement 7% de la santé.", false)
            .addField("<:c3:719664266776412160> Balle de Dauphin", "Inflige des dégâts équivalents à [20% de la santé maximale d'Arin] à l'adversaire possédant le moins de santé, restaure immédiatement 15% de la santé des alliés et octroit [Soins continus] équivalent à 15% de la santé pendant 3 tours.", false)
            .addField("<:passif:719664266969612379> 1: Soleil étincelant", "Augmente la santé de 20%, la défense de 20%, la réduction de dégâts de 5% et la résistance aux malus de 10%", false)
            .addField("<:passif:719664266969612379> 2: Été agité", "Quand la santé passe en dessous des 50%, restaure 30% de la santé des alliés et octroit [Soins continus] équivalent à 10% de la santé pendant 2 tours. Quand Arin meurt, restaure 50% de la santé à l'allié possédant l'ATQ la plus élevée, et lui octroit [Soins continus] équivalent à 50% de la santé pendant 2 tours. (S'active 1x)", false)
            .addField("ATQ", "20115", true)
            .addField("DEF", "1015", true)
            .addField("PV", "129251", true)
            .addField("VIT", "407", true)
            .addField("Blocage", "33%", true)
            .addField("Taux Crit", "15%", true)
            .addField("Dégâts Crit", "10%", true)
            .addField("Résist. Malus", "33%", true)
            .addField("Réduction dégâts", "24%", true)
    
        message.channel.sendEmbed(embed)
    
        console.log("La commande de l'Héroïne Pure Green Arin viens d'être effectuée.");

    }

        // Hero Cantare = Pure Green Arin
        if (message.content === prefix + "pure green"){
            var embed = new Discord.RichEmbed()
            .setTitle("Pure Green Arin :black_small_square: <:ice:719781844949925898> :black_small_square: <:element:724668549028905073> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Personnage sorti de l'univers de Tetra, uniquement dans Hero Cantare.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.11 | Avancez, évoluez, et combattez pour devenir le meilleur d'Hero Cantare!")
            .setThumbnail("https://i.imgur.com/zZraoSj.png")
            .setImage("https://i.imgur.com/YjpTHXy.gif")
            .addField(":speech_balloon: Citation", "Aucune.", false)
            .addField("<:c1:719664266797383680> Transpercement", "Attaque l'adversaire avec 90% de l'ATQ et soigne 2 alliés possédant le moins de PV pour [7% de la santé d'Arin]. Octroit [Soins continus] équivalent à 7% de la santé pendant 2 tours, si un allié est déjà affecté par un [Soins continus], restaure immédiatement 4% de la santé.", false)
            .addField("<:c2:719664268722831421> Rotation circulaire de la tortue", "Soigne 2 alliés possédant la santé la plus faible pour [17% de la santé d'Arin] et octroit [Soins continus] équivalent à 17% de la santé pendant 2 tours. Si un [Soins continus] est déjà effectif, restaure immédiatement 7% de la santé.", false)
            .addField("<:c3:719664266776412160> Balle de Dauphin", "Inflige des dégâts équivalents à [20% de la santé maximale d'Arin] à l'adversaire possédant le moins de santé, restaure immédiatement 15% de la santé des alliés et octroit [Soins continus] équivalent à 15% de la santé pendant 3 tours.", false)
            .addField("<:passif:719664266969612379> 1: Soleil étincelant", "Augmente la santé de 20%, la défense de 20%, la réduction de dégâts de 5% et la résistance aux malus de 10%", false)
            .addField("<:passif:719664266969612379> 2: Été agité", "Quand la santé passe en dessous des 50%, restaure 30% de la santé des alliés et octroit [Soins continus] équivalent à 10% de la santé pendant 2 tours. Quand Arin meurt, restaure 50% de la santé à l'allié possédant l'ATQ la plus élevée, et lui octroit [Soins continus] équivalent à 50% de la santé pendant 2 tours. (S'active 1x)", false)
            .addField("ATQ", "20115", true)
            .addField("DEF", "1015", true)
            .addField("PV", "129251", true)
            .addField("VIT", "407", true)
            .addField("Blocage", "33%", true)
            .addField("Taux Crit", "15%", true)
            .addField("Dégâts Crit", "10%", true)
            .addField("Résist. Malus", "33%", true)
            .addField("Réduction dégâts", "24%", true)
    
        message.channel.sendEmbed(embed)
    
        console.log("La commande de l'Héroïne Pure Green Arin viens d'être effectuée.");

    }

        // Hero Cantare = Pure Green Arin
        if (message.content === prefix + "pure"){
            var embed = new Discord.RichEmbed()
            .setTitle("Pure Green Arin :black_small_square: <:ice:719781844949925898> :black_small_square: <:element:724668549028905073> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Personnage sorti de l'univers de Tetra, uniquement dans Hero Cantare.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.11 | Avancez, évoluez, et combattez pour devenir le meilleur d'Hero Cantare!")
            .setThumbnail("https://i.imgur.com/zZraoSj.png")
            .setImage("https://i.imgur.com/YjpTHXy.gif")
            .addField(":speech_balloon: Citation", "Aucune.", false)
            .addField("<:c1:719664266797383680> Transpercement", "Attaque l'adversaire avec 90% de l'ATQ et soigne 2 alliés possédant le moins de PV pour [7% de la santé d'Arin]. Octroit [Soins continus] équivalent à 7% de la santé pendant 2 tours, si un allié est déjà affecté par un [Soins continus], restaure immédiatement 4% de la santé.", false)
            .addField("<:c2:719664268722831421> Rotation circulaire de la tortue", "Soigne 2 alliés possédant la santé la plus faible pour [17% de la santé d'Arin] et octroit [Soins continus] équivalent à 17% de la santé pendant 2 tours. Si un [Soins continus] est déjà effectif, restaure immédiatement 7% de la santé.", false)
            .addField("<:c3:719664266776412160> Balle de Dauphin", "Inflige des dégâts équivalents à [20% de la santé maximale d'Arin] à l'adversaire possédant le moins de santé, restaure immédiatement 15% de la santé des alliés et octroit [Soins continus] équivalent à 15% de la santé pendant 3 tours.", false)
            .addField("<:passif:719664266969612379> 1: Soleil étincelant", "Augmente la santé de 20%, la défense de 20%, la réduction de dégâts de 5% et la résistance aux malus de 10%", false)
            .addField("<:passif:719664266969612379> 2: Été agité", "Quand la santé passe en dessous des 50%, restaure 30% de la santé des alliés et octroit [Soins continus] équivalent à 10% de la santé pendant 2 tours. Quand Arin meurt, restaure 50% de la santé à l'allié possédant l'ATQ la plus élevée, et lui octroit [Soins continus] équivalent à 50% de la santé pendant 2 tours. (S'active 1x)", false)
            .addField("ATQ", "20115", true)
            .addField("DEF", "1015", true)
            .addField("PV", "129251", true)
            .addField("VIT", "407", true)
            .addField("Blocage", "33%", true)
            .addField("Taux Crit", "15%", true)
            .addField("Dégâts Crit", "10%", true)
            .addField("Résist. Malus", "33%", true)
            .addField("Réduction dégâts", "24%", true)
    
        message.channel.sendEmbed(embed)
    
        console.log("La commande de l'Héroïne Pure Green Arin viens d'être effectuée.");

    }
     
	
	// Hero Cantare = Pure Green Arin
        if (message.content === prefix + "king dark"){
            var embed = new Discord.RichEmbed()
            .setTitle("Nigga :black_small_square: <:ice:719781844949925898> :black_small_square: <:element:724668549028905073> :black_small_square: <:ss:719641320343470150>")
            .setDescription("On raconte qu'il vient des profondeurs des ténèbres... et que son rôle est de tout ~~détruire~~ hmm, ups, il n'a pas de rôle.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.8 | Avancez, évoluez, et devenez le plus nul d'Hero Cantare!")
            .setThumbnail("https://i.imgur.com/VgDmg1O.png")
            .setImage("https://i.imgur.com/32wKCeW.jpg")
            .addField(":speech_balloon: Citation", "Une p'tite léchouille?... Uhmm..ah...", false)
            .addField("<:c1:719664266797383680> Sale fou", "T'as cru t'étais qui? Attaque à coup de langue à hauteur de 300% de l'ATQ les deux adversaires ayant l'attaque la plus élevée. Inflige [Excitation] pendant 1 tour pour garantir le coup critique, et étourdir l'ennemi.", false)
            .addField("<:c2:719664268722831421> Hmm...ah", "Effectue un strip tease, infligeant [Excitation] pendant 1 tour à tous les ennemis.", false)
            .addField("<:c3:719664266776412160> Hmm... Tu veux y rent-", "Se prépare à l'entrée... censure censure, censure. Met K-O immédiatemment l'ennemi ayant l'ATQ la plus élevée.", false)
            .addField("<:passif:719664266969612379> 1: Excitation de Buzay", "Augmente la santé de 200%, la défense de 50%, la réduction de dégâts de 70% et la résistance aux malus de 40%", false)
            .addField("<:passif:719664266969612379> 2: Technique spéciale de drague!", "Lorsque la santé passe en dessous des 90/50/40%, octroit un bouclier à tous les alliés équivalent à 30% de la santé du héros, puis octroit [Soins continus à hauteur de 40% des PV] aux deux alliés ayant la santé la plus faible. Puis, inflige [Excitation] à l'allié ayant l'ATQ la plus élévée, avant d'attaquer avec 150% de l'ATQ.", false)
            .addField("ATQ", "50115", true)
            .addField("DEF", "1302", true)
            .addField("PV", "320210", true)
            .addField("VIT", "605", true)
            .addField("Taux Crit", "53%", true)
            .addField("Blocage", "67%", true)
            .addField("Résist. Malus", "93%", true)
            .addField("Déviation DGT", "70%", true)
    
        message.channel.sendEmbed(embed)
    
        console.log("La commande de l'Héroïne Pure Green Arin viens d'être effectuée.");

    }

	
	        // Hero Cantare Equipement Exclusif / Max Level Warrior
    if (message.content === prefix + "ee mlw"){
        var embed = new Discord.RichEmbed()
            .setTitle("Épée du dragon rouge")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Max Level Warrior. ")
            .setThumbnail("https://i.imgur.com/iFRzcK1.png")
            .setImage("https://i.imgur.com/jbKdjhN.png")
            .setDescription("La vitesse est améliorée de X à X proportionnellement aux PV manquants. \n \n **Statistique améliorée:** Santé")
	message.channel.sendEmbed(embed)

    }
		        // Hero Cantare Equipement Exclusif / Max Level Warrior
    if (message.content === prefix + "ee max level warrior"){
        var embed = new Discord.RichEmbed()
            .setTitle("Épée du dragon rouge")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Max Level Warrior. ")
            .setThumbnail("https://i.imgur.com/iFRzcK1.png")
            .setImage("https://i.imgur.com/jbKdjhN.png")
            .setDescription("La vitesse est améliorée de X à X proportionnellement aux PV manquants. \n \n **Statistique améliorée:** Santé")
	message.channel.sendEmbed(embed)

    }
	
		        // Hero Cantare Equipement Exclusif / God-Killer Zero
    if (message.content === prefix + "ee gk0"){
        var embed = new Discord.RichEmbed()
            .setTitle("Lance de l'obscurité totale")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de God-Killer Zero. ")
            .setThumbnail("https://i.imgur.com/hOENdJ8.png")
            .setImage("https://i.imgur.com/g33NUMU.png")
            .setDescription("Lorsqu'attaqué, a % de chance d'infliger [Brûlure] pendant 2 tours. \n \n **Statistique améliorée:** Précision des malus")
	message.channel.sendEmbed(embed)

    }
	
		        // Hero Cantare Equipement Exclusif / God-Killer Zero
    if (message.content === prefix + "ee godkiller 0"){
        var embed = new Discord.RichEmbed()
            .setTitle("Lance de l'obscurité totale")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de God-Killer Zero. ")
            .setThumbnail("https://i.imgur.com/hOENdJ8.png")
            .setImage("https://i.imgur.com/g33NUMU.png")
            .setDescription("Lorsqu'attaqué, a % de chance d'infliger [Brûlure] pendant 2 tours. \n \n **Statistique améliorée:** Précision des malus")
	message.channel.sendEmbed(embed)

    }
	
			        // Hero Cantare Equipement Exclusif / God-Killer Zero
    if (message.content === prefix + "ee godkiller zero"){
        var embed = new Discord.RichEmbed()
            .setTitle("Lance de l'obscurité totale")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de God-Killer Zero. ")
            .setThumbnail("https://i.imgur.com/hOENdJ8.png")
            .setImage("https://i.imgur.com/g33NUMU.png")
            .setDescription("Lorsqu'attaqué, a % de chance d'infliger [Brûlure] pendant 2 tours. \n \n **Statistique améliorée:** Précision des malus")
	message.channel.sendEmbed(embed)

    }		
	
	// Hero Cantare Equipement Exclusif / Maschenny
    if (message.content === prefix + "ee maschenny"){
        var embed = new Discord.RichEmbed()
            .setTitle("Lance de la sérénité")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Maschenny.")
            .setThumbnail("https://i.imgur.com/1JZsaqA.png")
            .setImage("https://i.imgur.com/dnxlTlg.png")
            .setDescription("Lorsque Yellow May est activé, devient immunisé aux dégâts pendant 1 tour et a % chance de provoquer les adversaires pendant 1 tour. \n \n **Statistique améliorée:** Attaque")
	message.channel.sendEmbed(embed)

    }
	
		// Hero Cantare Equipement Exclusif / Master Pooh Upooh
    if (message.content === prefix + "ee master pooh upooh"){
        var embed = new Discord.RichEmbed()
            .setTitle("Parchemin du Roi des Fées")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Master Pooh Upooh.")
            .setThumbnail("https://i.imgur.com/F8cXXOu.png")
            .setImage("https://i.imgur.com/E24MCI0.png")
            .setDescription("À la mort du premier allié, récupère 30% des PV et a % de provoquer les adversaires pendant 1 tour. \n \n **Statistique améliorée:** Santé")
	message.channel.sendEmbed(embed)

    }
	
			// Hero Cantare Equipement Exclusif / Master Pooh Upooh
    if (message.content === prefix + "ee pooh upooh"){
        var embed = new Discord.RichEmbed()
            .setTitle("Parchemin du Roi des Fées")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Master Pooh Upooh.")
            .setThumbnail("https://i.imgur.com/F8cXXOu.png")
            .setImage("https://i.imgur.com/E24MCI0.png")
            .setDescription("À la mort du premier allié, récupère 30% des PV et a % de provoquer les adversaires pendant 1 tour. \n \n **Statistique améliorée:** Santé")
	message.channel.sendEmbed(embed)

    }
	
			// Hero Cantare Equipement Exclusif / Master Pooh Upooh
    if (message.content === prefix + "ee pooh"){
        var embed = new Discord.RichEmbed()
            .setTitle("Parchemin du Roi des Fées")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Master Pooh Upooh.")
            .setThumbnail("https://i.imgur.com/F8cXXOu.png")
            .setImage("https://i.imgur.com/E24MCI0.png")
            .setDescription("À la mort du premier allié, récupère 30% des PV et a % de provoquer les adversaires pendant 1 tour. \n \n **Statistique améliorée:** Santé")
	message.channel.sendEmbed(embed)

    }
	
			// Hero Cantare Equipement Exclusif / Master Pooh Upooh
    if (message.content === prefix + "ee upooh"){
        var embed = new Discord.RichEmbed()
            .setTitle("Parchemin du Roi des Fées")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Master Pooh Upooh.")
            .setThumbnail("https://i.imgur.com/F8cXXOu.png")
            .setImage("https://i.imgur.com/E24MCI0.png")
            .setDescription("À la mort du premier allié, récupère 30% des PV et a % de provoquer les adversaires pendant 1 tour. \n \n **Statistique améliorée:** Santé")
	message.channel.sendEmbed(embed)

    }
	
			// Hero Cantare Equipement Exclusif / Master Pooh Upooh
    if (message.content === prefix + "ee mpu"){
        var embed = new Discord.RichEmbed()
            .setTitle("Parchemin du Roi des Fées")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Master Pooh Upooh.")
            .setThumbnail("https://i.imgur.com/F8cXXOu.png")
            .setImage("https://i.imgur.com/E24MCI0.png")
            .setDescription("À la mort du premier allié, récupère 30% des PV et a % de provoquer les adversaires pendant 1 tour. \n \n **Statistique améliorée:** Santé")
	message.channel.sendEmbed(embed)

    }
	
				// Hero Cantare Equipement Exclusif / Hilda
    if (message.content === prefix + "ee hilda"){
        var embed = new Discord.RichEmbed()
            .setTitle("Familier dimensionnel")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif d'Hilda")
            .setThumbnail("https://i.imgur.com/7J8XVbB.png")
            .setImage("https://i.imgur.com/1mP6FxI.png")
            .setDescription("% d'infliger [Poison] pendant 2 tours en attaquant. \n \n **Statistique améliorée:** Santé")
	message.channel.sendEmbed(embed)

    }

				// Hero Cantare Equipement Exclusif / Black-March Bam
    if (message.content === prefix + "ee bm bam"){
        var embed = new Discord.RichEmbed()
            .setTitle("Ailes de l'Animal Sacré Transformé")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Black-March Bam")
            .setThumbnail("https://i.imgur.com/skAqvue.png")
            .setImage("https://i.imgur.com/dd2ci3y.png")
            .setDescription("En entrant dans le statut 'Black-March', obtient un bonus d'ATQ de min% à max%. \n \n **Statistique améliorée:** Attaque")
	message.channel.sendEmbed(embed)

    }
	
	
				// Hero Cantare Equipement Exclusif / Black-March Bam
    if (message.content === prefix + "ee black march bam"){
        var embed = new Discord.RichEmbed()
            .setTitle("Ailes de l'Animal Sacré Transformé")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Black-March Bam")
            .setThumbnail("https://i.imgur.com/skAqvue.png")
            .setImage("https://i.imgur.com/dd2ci3y.png")
            .setDescription("En entrant dans le statut 'Black-March', obtient un bonus d'ATQ de min% à max%. \n \n **Statistique améliorée:** Attaque")
	message.channel.sendEmbed(embed)

    }
	
	
				// Hero Cantare Equipement Exclusif / Endorsi
    if (message.content === prefix + "ee endorsi"){
        var embed = new Discord.RichEmbed()
            .setTitle("Coeur Bong-Bong")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif d'Endorsi")
            .setThumbnail("https://i.imgur.com/NeaSehN.png")
            .setImage("https://i.imgur.com/nICk8sI.png")
            .setDescription("Génère un bouclier équivalent à % des PV pour les alliés d'élément lumière pendant 2 tours au début du combat. \n \n **Statistique améliorée:** Précision des malus")
	message.channel.sendEmbed(embed)
	
    }  
	
	// Hero Cantare Equipement Exclusif / Odette
    if (message.content === prefix + "ee odette"){
        var embed = new Discord.RichEmbed()
            .setTitle("Lance de la lumière")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif d'Odette")
            .setThumbnail("https://i.imgur.com/PREUpV0.png")
            .setImage(" ")
            .setDescription("Inconnu. \n \n **Statistique améliorée:** Inconnue.")
	message.channel.sendEmbed(embed)

    }
	
		// Hero Cantare Equipement Exclusif / Daisy
    if (message.content === prefix + "ee daisy"){
        var embed = new Discord.RichEmbed()
            .setTitle("Chapeau de pique-nique")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Daisy")
            .setThumbnail("https://i.imgur.com/SFZZ17P.png")
            .setImage(" ")
            .setDescription("Inconnu. \n \n **Statistique améliorée:** Inconnue.")
	message.channel.sendEmbed(embed)

    }
	
		// Hero Cantare Equipement Exclusif / Idol Rockcrawler
    if (message.content === prefix + "ee idol"){
        var embed = new Discord.RichEmbed()
            .setTitle("Scène d'Amour")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif d'Idol Rockcrawler")
            .setThumbnail("https://i.imgur.com/if259VH.png")
            .setImage(" ")
            .setDescription("Inconnu. \n \n **Statistique améliorée:** Inconnue.")
	message.channel.sendEmbed(embed)

    }
	
			// Hero Cantare Equipement Exclusif / Urek Mazino
    if (message.content === prefix + "ee urek"){
        var embed = new Discord.RichEmbed()
            .setTitle("Ensemble à capuche noir")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif d'Urek Mazino")
            .setThumbnail("https://i.imgur.com/WIjVYHA.png")
            .setImage("https://i.imgur.com/z7nNnlj.png")
            .setDescription("La compétence 2 prolonge le [**Sceau des pouvoirs passifs**] d'un adversaire pendant 2 tours avec une probabilité de ?%, et inflige [**Sceau des pouvoirs passifs**] à l'adversaire ayant la santé la plus élevée pendant 1 tour avec ?% de chances. \n \n **Statistique améliorée:** Santé.")
	message.channel.sendEmbed(embed)

    }
	
    if (message.content === prefix + "ee witch"){
        var embed = new Discord.RichEmbed()
            .setTitle("Épée secrète")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Witch of the West Mira Yoo")
            .setThumbnail("https://i.imgur.com/SU71npQ.png")
            .setImage("https://i.imgur.com/q3aDAB3.png")
            .setDescription("Obtient [**Immortalité**] pendant 1 tour avec ?% de chances. (S'active 1x) \n \n **Statistique améliorée:** Précision des malus.")
	message.channel.sendEmbed(embed)

    }
	
	    if (message.content === prefix + "ee witch of the west mira yoo"){
        var embed = new Discord.RichEmbed()
            .setTitle("Épée secrète")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Witch of the West Mira Yoo")
            .setThumbnail("https://i.imgur.com/SU71npQ.png")
            .setImage("https://i.imgur.com/q3aDAB3.png")
            .setDescription("Obtient [**Immortalité**] pendant 1 tour avec ?% de chances. (S'active 1x) \n \n **Statistique améliorée:** Précision des malus.")
	message.channel.sendEmbed(embed)

    }
	
	    if (message.content === prefix + "ee witch mira"){
        var embed = new Discord.RichEmbed()
            .setTitle("Épée secrète")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Witch of the West Mira Yoo")
            .setThumbnail("https://i.imgur.com/SU71npQ.png")
            .setImage("https://i.imgur.com/q3aDAB3.png")
            .setDescription("Obtient [**Immortalité**] pendant 1 tour avec ?% de chances. (S'active 1x) \n \n **Statistique améliorée:** Précision des malus.")
	message.channel.sendEmbed(embed)

    }
	
	    if (message.content === prefix + "ee witch mira yoo"){
        var embed = new Discord.RichEmbed()
            .setTitle("Épée secrète")
            .setColor("RANDOM")
	    .setFooter("Équipement exclusif de Witch of the West Mira Yoo")
            .setThumbnail("https://i.imgur.com/SU71npQ.png")
            .setImage("https://i.imgur.com/q3aDAB3.png")
            .setDescription("Obtient [**Immortalité**] pendant 1 tour avec ?% de chances. (S'active 1x) \n \n **Statistique améliorée:** Précision des malus.")
	message.channel.sendEmbed(embed)

    }

				  // Epic Seven Artefact = Justice for All
    if (message.content === prefix + "justice"){
        var embed = new Discord.RichEmbed()
            .setTitle("Justice for All :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Un gant fabriqué l'année de l'adoubement du premier chevalier de la famille Sharon. Il représente la quête de la Justice qui doit être partagé par tout ceux suivant la Déesse et le royaume, plutôt que simplement pour leur propre bien")
            .setColor("RANDOM")
            .setFooter("Artefact Justice for All demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://epic7x.com/wp-content/uploads/2019/03/justice-for-all-1.png")
            .addField(":crossed_swords: Compétence Niv.1", "**50%** de chance d'accorder un buff aléatoire au lanceur pendant 1 tour à la fin de son tour. (Parmi: Augmentation de l'Attaque, de la Défense, de la Vitesse ou des chances de coup Critique. Barrière, Immunité, Soins continus ou résistance au coup critique)", false)
            .addField(":crossed_swords: Compétence Niv.Max", "**100%** de chance d'accorder un buff aléatoire au lanceur pendant 1 tour à la fin de son tour. (Parmi: Augmentation de l'Attaque, de la Défense, de la Vitesse ou des chances de coup Critique. Barrière, Immunité, Soins continus ou résistance au coup critique)", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **9** | Vie : **76**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **117** | Vie : **988**", false)
	message.channel.sendEmbed(embed)
	    
    }
	
	
	// Commande d'avatar
    if (message.content.startsWith (prefix + "avatar")){
       let user = message.mentions.users.first() || message.author;
           var embed = new Discord.RichEmbed()
               .setColor("RANDOM")
               .setTitle("Avatar de " + user.username)
               .setImage(user.displayAvatarURL)
	message.channel.sendEmbed(embed).then(msg => {
        msg.react('❤')
        msg.react('💔');
	 
	})
   
    }
	
        // Commande de say
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();
	
    if (command === 'say') {

      let say = args.join(' ');
      message.delete();
      message.channel.send(say);    
      console.log("La commande Say viens d'être effectué par " + message.author.username)

    }

    if (message.content === prefix + "tierlist"){ // Tier List
       message.channel.send("**Lien de la tierlist :** \n :arrow_right: \n **Autre tierlist :** \n :arrow_right:")

    }


    if (message.content === prefix + "site"){ //Site Hero Cantare
       message.channel.send("**Lien du site de la version globale:** \n :arrow_right: <https://www.herocantareglobal.com/>")
    }

    if (message.content === prefix + "catalyst"){ //Guide Catalyst
       message.channel.send("Lien du guide des catalysts : <https://docs.google.com/spreadsheets/d/1UMIduFBIVc9OAoI-BeQ-LjPeihcziqXEzXw8n58bEd0/htmlview?usp=sharing&sle=true>")
    }
	
    if (message.content === prefix + "camp"){ //Moral labyrinthe
       message.channel.send("```Simulateur pour connaître les réponses et maximiser votre moral dans le camp en labyrinthe :``` \n :arrow_right: <https://epic7x.com/friendship-calculator/> \n ```Autre calculateur de moral``` \n :arrow_right: <http://ulmo18.phps.kr/epic7.php?L=en>")
   
    }

    if (message.content === prefix + "calc"){ //Calculateur équipement
       message.channel.send("```Calculateur d'équipement :``` \n :arrow_right: <https://epic7.lsdl.kr/index.php/coordinator>")

    }

    if (message.content === prefix + "mapraid"){
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: Raid normal :black_small_square:")
            .setDescription("Une map des monstres, des mini-boss et des boss. La carte pour la version Hell du Raid arrivera bientôt.")
            .setColor("RANDOM")
            .setFooter("Carte du Raid Labyrinth demandé par " + message.author.username + ". " + "Commande mise à jour le 15/05/19.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/brand/assets/images/common/bi.png")
	    .setImage("https://i.imgur.com/CFIBXxY.jpg")
	message.channel.sendEmbed(embed)
	    
    }
	
    if (message.content === prefix + "botinfos"){ //Commande d'infos sur le bot
        let boticon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
            .setDescription("Informations du bot")
            .setColor("RANDOM")
            .setThumbnail(boticon)
            .addField("Nom du bot", bot.user.username)
            .addField("Bot créé le :", bot.user.createdAt)
            .addField("Nombre de serveurs :", bot.guilds.size)
	    .addField("Bot créé par : ","@Vanitas#7248", true)

    message.channel.send(botembed)
	    
    }

});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "26ball":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.channel.send("Utilisation correcte : $26ball <question> " )};

            var replys = [
                "Oui.",
                "Non.",
                "Peut-être.",
                "Je ne sais pas...",
                "Sûrement...",
                "Bien sûr.",
	        "Bien entendu.",
	        "Es-tu fou ?!",
                "Absolument pas !!",
                "Sérieusement... t'es qui en fait ?!",
                "..Je n'ai même pas envie de te répondre !",
                "Dois-je te dire la vérité ?",
                "Tu sais quoi ? Ferme-la !",
                "Je suis fatigué de te répondre...",
                "Tu es si magnifique... Tu m'éblouis !",
    	     	"Je m'ennuie... Tu es si ennuyant !",
	        ".......... Pardon, tu m'as parlé ?",
	        "...Désolé... ce n'est pas que tu ne m'intéresses pas, mais.. malheureusement si.",
	        "Si tu veux, je vend des vies.",
	        ".....",
	        "Simple question: Tu peux la mettre en veilleuse ?",
	        "Tu ressembles à Enott...",
	        "Tu m'déranges, ça se voit ? Juste pour ça, j'espère que tu te taperas Daisy, chéri.",
                "Tu crois que j'en ai quelque chose à branler?",
                "Tu n'avais vraiment rien d'autre à me demander ?",
                "Aucune idée. Et toi, connais-tu le synonyme de synonyme ?",
                
            ];

            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(" <a:peepo:617064653738082357> 26ball <a:peepo:617064653738082357>")
            .addField(message.author.username + " :", tte)
            .addField("Epic Bot :", reponse)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
	    .setFooter("Demandé par " + message.author.username, "https://cdn.discordapp.com/attachments/432232468465188874/617755621889933390/464c39ed953419ae24d433d23eca3f0e.png")
            

        message.channel.sendEmbed(bembed)
        console.log("La commande 26ball viens d'être effectuée avec succès par " + message.author.username);

    }})

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
	    case "quisuisje":
        let args = message.content.split(" ").slice(1);

            var replys = [
                "https://i.imgur.com/zZraoSj.png",
                "https://i.imgur.com/eJzzXBH.png",
                "https://i.imgur.com/Wzq48L5.png",
                "https://i.imgur.com/kTISvE4.png",
                "https://i.imgur.com/9Ccn5z9.png",
                "https://i.imgur.com/th1QxyB.png",
                "https://i.imgur.com/BLmMuzE.png",
                "https://i.imgur.com/9BmU9ET.png",
                "https://i.imgur.com/eW0LR11.png",
                "https://i.imgur.com/kwMfqwu.png",
                "https://i.imgur.com/lTSFMfY.png",
                "https://i.imgur.com/HGTeVIH.png",
                "https://i.imgur.com/oV14Viz.png",
                "https://i.imgur.com/NGclWGx.png",
		"https://i.imgur.com/dWXEhUj.png",
		"https://i.imgur.com/VgDmg1O.png",
		"https://i.imgur.com/LoyrFje.png",
		"https://i.imgur.com/4HkEVBR.png",
		"https://i.imgur.com/YZaCAGM.png",
		"https://i.imgur.com/5eeB0fC.png",
		"https://i.imgur.com/kRyLOCi.png",
		"https://i.imgur.com/x5MlocK.png",
		"https://i.imgur.com/WiuKzkr.png",
		"https://i.imgur.com/84SmpqH.png",
		"https://i.imgur.com/NnAKhDg.png",
		"https://i.imgur.com/bPE7uMy.png",
		"https://i.imgur.com/9EWwhXC.png",
		"https://i.imgur.com/eMoBPN7.png",
		"https://i.imgur.com/KEwJSkB.png",
		"https://i.imgur.com/FHMTIGQ.png",
		"https://i.imgur.com/qfJBOJa.png",
		"https://i.imgur.com/7b5E07e.png",
		"https://i.imgur.com/6vbuphJ.png",
		"https://i.imgur.com/KWpT0MV.png",
		"https://i.imgur.com/0Ib7DKw.png",
		"https://i.imgur.com/AkERziq.png",

       
            ];

            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription("Hmm... cela te convient, j'imagine?")
            .setImage(reponse)
            .setTimestamp()
	    .setFooter(`Requête demandée par ${message.author.tag}`)
            


        message.channel.sendEmbed(bembed)
        console.log("La commande quisuisje viens d'être effectuée avec succès par " + message.author.username);

}});

bot.on("message", async message => {
 
  if(message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase();
 
	
  let blacklist = ['https://privatepage.vip','https://nakedphotos.club','81ZH2Y'];
  let Texte = false;
      for (var i in blacklist) {
           if (message.content.toLowerCase().includes(blacklist[i].toLowerCase())) Texte = true;
    }
	
    if (Texte) {
        message.delete();
	message.channel.send(`Ce lien est **interdit** ${message.author.tag} !`).then(message => message.delete(15000));
        message.member.kick('Arky expulse les méchants bots !');
	message.channel.send(`Arky fais le ménage et à expulser le méchant bot ${message.author.tag} !`).then(message => message.delete(20000));
		
    }

    if(message.content === prefix + "quizz"){ //Total 95 questions.
 
 let quiz = [
    { q: 'De quel personnage cette phrase est-elle issue: Is it already over ? So boring.', a: ['Haste', 'haste'] },
    { q: 'De quel personnage cette phrase est-elle issue: I will... never miss !', a: ['Tywin', 'tywin'] },
    { q: 'De quel personnage cette phrase est-elle issue: You pitiful beings... death is your repentance !', a: ['Diene', 'diene'] },
    { q: 'De quel personnage cette phrase est-elle issue: The path once tread by the Goddess... **will be covered with your blood !**', a: ['Clarissa', 'clarissa'] },
    { q: "De quel personnage cette phrase est-elle issue: I'll kill you, and you, and you ! HAAHAHAHAHAHAHA", a: ['Clarissa', 'clarissa'] },
    { q: 'De quel personnage cette phrase est-elle issue: Dancing Blade !', a: ['Vildred', 'vildred'] },
    { q: 'De quel personnage cette phrase est-elle issue: Bones to sand... Blood to dust.', a: ['Baal & Sezan', 'baal et sezan'] },


  ];
  let options = {
    max: 1,
    time: 34000,
    errors: ['time'],
  };

  let item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    let collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    let winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                  .setAuthor(`Gagnant: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                  .setTitle(`Réponse correcte: \`${winnerMessage.content}\``)
                                  .setFooter(`Question: ${item.q}`)
                                  .setColor('RANDOM')
                                })

  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                  .setAuthor("La bonne réponse n'a pas été trouvée à temps.")
                                  .setTitle(`Réponse(s) correcte(s): \`${item.a}\``)
                                  .setFooter(`Question: ${item.q}`)
                                })

  }
	    
    }
			 
    if (command === "kick") {

    if(!message.member.roles.some(r=>["Club de Sécurité Publique (Mod)", "Moderator"].includes(r.name)) )
      return message.reply("Désolé, vous n'avez pas la permission d'effectuer cette action !");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("s'il vous plaît, mentionnez un utilisateur valide de ce serveur.");
    if(!member.kickable) 
      return message.reply("je ne peux pas expulser cet utilisateur ! Peut-être a t-il un rôle plus élevé ? Avez-vous la permission d'expulser ?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison donnée.";
    
    await member.kick(reason)
      .catch(error => message.reply(`Désolé ${message.author}, je ne peux pas expulser cet utilisateur pour : ${error}`));
    message.reply(`${member.user.tag} à été expulsé du serveur par ${message.author.tag} pour : ${reason}`);

  }
  
  if(command === "ban") {
   
    if(!message.member.roles.some(r=>["Club de Sécurité Publique (Mod)"].includes(r.name)) )
      return message.reply(" désolé, tu n'as pas la permission d'effectuer cette action !");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("S'il te plaît, mentionne un utilisateur valide présent sur le serveur.");
    if(!member.bannable) 
      return message.reply("je ne peux pas bannir cet utilisateur ! Peut-être a t-il un rôle supérieur ? Avez-vous la permission de bannir ?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison donnée.";
    
    await member.ban(reason)
      .catch(error => message.reply(`désolé, je ne peux pas le ban à cause de : ${error}`));
    message.reply(`${member.user.tag} à été banni par ${message.author.tag} pour : ${reason}`);
  }
  
  if(command === "purge") {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Désolé, mais tu n'as pas la permission de **gérer les messages** !")

    if (!args[0]) return message.channel.send('Tu dois spécifier un nombre de message.');
    if (args[0] < 1) return message.channel.send('Tu dois spécifier un nombre de message supérieur à 1.');
    if (args[0] > 100) return message.channel.send('Tu dois spécifier un nombre de message inférieur à 100.');
    if (isNaN(args[0])) return message.channel.send("S'il te plaît, rentre un nombre correct.");
	  
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`🗑 Kyaah ! Arky viens de faire le ménage et à supprimer **${args[0]}** messages.`).then(message => message.delete(10000));
    }).catch().catch((e) => message.channel.send('Tu ne peux pas supprimer de message de plus de 14 jours.'));
    message.delete();

}

});

bot.on("message", async message => {
 
  if(message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase();
 
	
  let blacklist = ['https://privatepage.vip','https://nakedphotos.club','81ZH2Y'];
  let Texte = false;
      for (var i in blacklist) {
           if (message.content.toLowerCase().includes(blacklist[i].toLowerCase())) Texte = true;
    }
	
	    if(message.content === prefix + "humournoir"){ //Total 95 questions.
 
 let quiz = [
    { q: 'Que dis-t-on en Afrique quand un lieu est bondé ?', a: ['||Il est noir de monde...||'] },
    { q: 'Quel est la différence entre Jésus et un tableau de Picasso ?', a: [`||Le tableau s'accroche avec un seul clou||`] },
    { q: 'Une fillette est retrouvée égorgée dans la rue… L’enquêteur questionne le légiste : Elle a été violée ?', a: [`||– Non pas encore, j’attendais votre autorisation.||`] },
    { q: `Un homme à l'hôpital dit à son infirmière : Vous êtes mon infirmière préférée, voudriez-vous passer me voir quand je serai sorti de l'hôpital ?`, a: [`||Je suis désolée, mais j'ai horreur des cimetières.||`] },
    { q: 'A quel endroit se trouvent les tétraplégiques ?', a: [`||Là où on les as laissés..||`] },
    { q: 'Quel est le point commun entre des chaussures et des juifs ?', a: [`||Il y en a plus en 39 qu’en 45||`] },
    { q: 'Tout est bon dans le cochon', a: [`||Je ne mangerai pas ta mère pour autant.||`] },
    { q: '– Maman, maman, je ne veux plus dormir avec mon petit frère.', a: [`||– Tais-toi ! Je t’ai déjà dit qu’on avait pas assez d’argent pour l’enterrer.||`] },
    { q: `Qu'est ce qu'un pruneau ?`, a: [`||Un synonyme de personne âgée : qui est ridée et qui fait chier||`] },
    { q: 'Que font 1+2-1x2?', a: [`||Le nombre de jambe d'un manchot.||`] },


	
  ];

  let item = quiz[Math.floor(Math.random() * quiz.length)];
    return message.channel.send({embed: new Discord.RichEmbed()
                                  .setTitle(`${item.q}`)
                                  .setDescription(`${item.a}`)
                                  .setColor('RANDOM')
                                })

  }
	    
    });
