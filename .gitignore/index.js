const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setActivity("$help | V 0.4 | Yeon's Flame Khun ($flame khun), Unleashed Raizel ($unleashed raizel) & Raizel ($raizel) ajoutés.");

    console.log("Je suis connecté !");

});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){ //Commande d'aide
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Page d'aide** :black_small_square:")
            .setDescription("Voici les différentes catégories de la page d'aide")
            .addField("__**Modération**__","`$kick` \n `$ban` \n `$purge`", true)
            .addField("__**Utilitaires**__","`$help` \n `$botinfos` \n ~~$userinfos~~", true)
            .addField("__**Fun**__","`$26ball` \n `$avatar` \n `$say` \n `$quizz` [**New**]", true)
            .addField("__**Hero Cantare**__","`$héros` \n ~~$tierlist~~ \n ~~$reliques~~", true)
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
            .addField("<:ss:719641320343470150>","**Kaiser** <:nature:719638081195475114> :black_small_square: <:competence:719638081162051585> ($kaiser) \n **Elaine** <:ice:719781844949925898> :black_small_square: <:weapon:719781844744142875> ($elaine) \n **Prime King Uma** <:feu:719638080780501073> :black_small_square: <:competence:719638081162051585> ($prime king uma) \n **Max Level Warrior** <:feu:719638080780501073> :black_small_square: <:weapon:719781844744142875> ($max level warrior) \n **Jyu Viole Grace** <:ice:719781844949925898> :black_small_square: <:artmartiaux:723903194819985459> ($viole) \n **Queen No Name** <:dark:723941756109979760> :black_small_square: <:dieu:723941755996733583> ($queen no name) \n **Yeon's Flame Khun** :black_small_square: <:feu:719638080780501073> :black_small_square: <:element:724668549028905073> ($flame khun) \n **Unleashed Raizel** :black_small_square: <:dark:723941756109979760> :black_small_square: <:dieu:723941755996733583> ($unleashed raizel)", true)
            .addField("<:a_:724817244789538819>","**Raizel** <:ice:719781844949925898> :black_small_square: <:evil:724805535727353856> ($raizel)")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.4 | Devenez plus fort, et grimpez la tour, "+ message.author.username)
            .setThumbnail("https://i.imgur.com/kwMfqwu.png")
	message.channel.sendEmbed(embed);
        console.log("Page des personnages générée suite à une demande de " + message.author.username);

    }
	
        if (message.content === prefix + "artefacts"){ //Commande relative aux artefacts d'Epic Seven
        var embed = new Discord.RichEmbed()
            .setTitle(":black_small_square: **Artefacts** :black_small_square:")
            .addField("**$sigurd**","Sigurd Scythe 5 <:etoile:580331911608664084> <:e7combattant:506111308635308032>", true)
            .setColor("RANDOM")
            .setFooter("Page d'Artefacts 1/1 " + "Actualisé le 16/05/19")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/brand/assets/images/common/bi.png")
	message.channel.sendEmbed(embed);
        console.log("Page de personnage générée suite à une demande de " + message.author.username);
		
    }


   if (message.content === prefix + "maj", "màj"){
       var embed = new Discord.RichEmbed()
           .setTitle("Récapitulatif de la dernière mise à jour du 28/06")
           .addField("__**Correction(s)**__","Correction du second passif de Kaiser 'Masque du Maître': \n __Avant__: Chaque attaque reçue augmente la défense de 20% (cumulable 10x). Quand la santé de Kaiser tombe à 50% ou moins, réduit l'attaque et les chances de critique de tous les ennemis de 30% pendant 2 tours. Applique un bouclier sur tous les ~~ennemis~~ correspondant à 20% de la santé maximale pendant 3 tours. \n __Après__: Chaque attaque reçue augmente la défense de 20% (cumulable 10x). Quand la santé de Kaiser tombe à 50% ou moins, réduit l'attaque et les chances de critique de tous les ennemis de 30% pendant 2 tours. Applique un bouclier sur tous les **alliés** correspondant à 20% de la santé maximale pendant 3 tours.")
           .addField("__**Ajouts de héros**__", "Aucun ajout à cette mise à jour.")
           .addField("__**Nouvelles commandes__","La commande $màj a été ajoutée.")
        message.channel.sendEmbed(embed);
	   
    }
	
        // Hero Cantare = Kaiser
     if (message.content === prefix + "kaiser"){
        var embed = new Discord.RichEmbed()
            .setTitle("Kaiser :black_small_square: <:nature:719638081195475114> :black_small_square: <:competence:719638081162051585> :black_small_square: <:ss:719641320343470150>")
            .setDescription("__Kaiser__ est une régulière de Tower of God.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.3 | Devenez plus fort, et grimpez la tour, élus.")
            .setThumbnail("")
            .setImage("https://cafeptthumb-phinf.pstatic.net/MjAyMDA2MDhfNzIg/MDAxNTkxNjA0OTAxMTE0.crs5QK0F1eSbu06CFBmQ7-vuyydWKESBqNfRdWZvbb8g.bigwYAWNxEjsm7QNnroTmBuovPiv1re4vpG_ottk2aog.GIF/%EC%B9%B4%EC%9D%B4%EC%A0%80.gif?type=w800")
            .addField(":speech_balloon: Citation :", "Si j'étais de ta famille, j'utiliserais toute l'argent à ma disposition pour te faire sortir d'ici. Tes talents en valent sûrement la peine.", false)
            .addField("<:c1:719664266797383680> Permutation", "Attaque un ennemi de la ligne arrière avec 130% de la puissance d'attaque, si l'attaque de la cible est plus élevée que la votre, réduit l'attaque de celle-ci de 30% pendant 2 tours et provoque pendant 1 tour.", false)
            .addField("<:c2:719664268722831421> Armor Inventory", "Attaque tous les ennemis avec 100% de la puissance d'attaque et inflige des dégâts additionnels correspondants à 20% de la santé maximale de Kaiser. Augmente la défense de tous les alliés de 50% pendant 2 tours.", false)
            .addField("<:c3:719664266776412160> Loup Bleu, Fenrir. ", "Attaque tous les ennemis avec 120% de la puissance d'attaque, et inflige des dégâts additionnels correspondants à 35% de la santé manquante de Kaiser. Obtient 1 tour d'immunité aux dégâts.", false)
            .addField("<:passif:719664266969612379> 1: Maître de station. ", "Augmente la vie de 15%, la défense de 15% et détourne 10% des dégâts.", false)
            .addField("<:passif:719664266969612379> 2: Masque du maître. ", "Chaque attaque reçue augmente la défense de 20% (cumulable 10x). Quand la santé de Kaiser tombe à 50% ou moins, réduit l'attaque et les chances de critique de tous les ennemis de 30% pendant 2 tours. Applique un bouclier sur tous les alliés correspondant à 20% de la santé maximale pendant 3 tours.", false)
            .addField("ATQ", "18645", true)
            .addField("DEF", "692", true)
            .addField("PV", "131156", true)
            .addField("VIT", "484", true)
	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héroïne Kaiser viens d'être effectuée.");

    }
	
	        // Hero Cantare = Elaine
    if (message.content === prefix + "elaine"){
        var embed = new Discord.RichEmbed()
            .setTitle("Elaine :black_small_square: <:ice:719781844949925898> :black_small_square: <:weapon:719781844744142875> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Lo Po Bia __Elaine__ est une régulière de Tower of God.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.3 | Devenez plus fort, et grimpez la tour, élus.")
            .setThumbnail("https://i.imgur.com/dWXEhUj.png")
            .setImage("https://i.imgur.com/sHem9nJ.gif")
            .addField(":speech_balloon: Citation :", "Si j'étais de ta famille, j'utiliserais toute l'argent à ma disposition pour te faire sortir d'ici. Tes talents en valent sûrement la peine.", false)
            .addField("<:c1:719664266797383680> Aiguille rouge", "Attaque deux adversaires avec 110% de la puissance d'attaque. Si l'adversaire est débuffé, inflige des dégâts additionnels équivalent à 35% de la puissance d'attaque. Si l'adversaire est affecté par Bleeding (Saignement), inflige des dégâts additionnels équivalent à 20% de la puissance d'attaque.", false)
            .addField("<:c2:719664268722831421> Griffe de Fenrir", "Attaque deux adversaires avec 150% de la puissance d'attaque et inflige Bleeding (Saignement) pour 30% de la puissance d'attaque pendant 2 tours. Augmente les chances de critique de 20% pour tous les alliés pendant 2 tours.", false)
            .addField("<:c3:719664266776412160> Aiguille: Restriction du fil rouge", "Attaque tous les ennemis avec 40% de la puissance d'attaque trois fois. Si l'adversaire est affecté par Bleeding (Saignement), inflige des dégâts additionnels équivalent à 30% de la puissance d'attaque pour chaque débuff appliqué à l'adversaire. (Max. 10 débuffs.)", false)
            .addField("<:passif:719664266969612379> 1: Clan du Loup Gris ", "Augmente l'attaque de 15%, la santé de 10%, la précision des débuffs de 10% et les dégâts critique de 10%", false)
            .addField("<:passif:719664266969612379> 2: Esprit du Loup ", "Si la cible est affecté par Bleeding (Saignement), inflige Bleeding (Saignement) pour 30% de la puissance d'attaque pendant 2 tours et garanti le critique sur 2 adversaires. Quand un allié ou un adversaire est éliminé, Elaine devient immunisée aux dégâts pendant 1 tour, et inflige le statut Unrecoverable (Impossibilité de heal) et 3 Bleeding (Saignement) pendant 2 tours à tous les adversaires.", false)
            .addField("ATQ", "22598", true)
            .addField("DEF", "628", true)
            .addField("PV", "103708", true)
            .addField("VIT", "484", true)

	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héroïne Elaine viens d'être effectuée.");

    }

	        // Hero Cantare = Max Level Warrior
    if (message.content === prefix + "max level warrior"){
        var embed = new Discord.RichEmbed()
            .setTitle("Max Level Warrior :black_small_square: <:feu:719638080780501073> :black_small_square: <:weapon:719781844744142875> :black_small_square: <:ss:719641320343470150>")
            .setDescription("__Max Level Warrior__, sous le pseudo Hardcore Leveling Warrior, est un des personnages pricipaux de Hardcore Leveling Warrior.")
            .setColor("RANDOM")
	        .setFooter("Khun Ran v0.3 | Combattez pour monter de niveau, joueur !")
            .setThumbnail("https://i.imgur.com/NGclWGx.png")
            .setImage("https://i.imgur.com/LHkbbsk.gif")
            .addField(":speech_balloon: Citation :", "Je t'ai ramené une surprise !", false)
            .addField("<:c1:719664266797383680> Pièce chanceuse", "Attaque l'adversaire avec les PV's les plus faible avec 115% de la puissance d'attaque, et augmente l'attaque du héros de 20-50% pendant 2 tours.", false)
            .addField("<:c2:719664268722831421> Feu de l'enfer", "Attaque 1 adversaire de la ligne du devant, et 1 autre de celle de derrière avec 130% de la puissance d'attaque et se soigne à hauteur de 50% des dégâts causés.", false)
            .addField("<:c3:719664266776412160> All-in", "Attaque l'adversaire avec les PV's les plus faible avec 170% de la puissance d'attaque et inflige des dégâts supplémentaires à hauteur de 80% des pv's perdus du héros. Si l'adversaire est éliminé, l'attaque inflige les mêmes dégâts supplémentaires aux autres ennemis.", false)
            .addField("<:passif:719664266969612379> 1: Homme chanceux", "Augmente la défense de 20%, la santé de 30%, et les chances de critique de 15%", false)
            .addField("<:passif:719664266969612379> 2: Évasion limite", "Évite l'élimination en récupérant 20% de PV lorsque le héros est proche d'être éliminé. (S'active 1x)", false)
	        .addField("<:sp:720742202757873745> Lacération", "Attaque 1 adversaire possédant les PV's les plus élevés avec 275% de la puissance d'attaque. Cette attaque résulte constamment en un coup critique.", false)
            .addField("ATQ", "21042", true)
            .addField("DEF", "754", true)
            .addField("PV", "125330", true)
            .addField("VIT", "484", true)

	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héros Max Level Warrior viens d'être effectuée.");

    }
        // Hero Cantare = Prime King Uma
     if (message.content === prefix + "prime king uma"){
        var embed = new Discord.RichEmbed()
            .setTitle("Prime King Uma :black_small_square: <:feu:719638080780501073> :black_small_square: <:competence:719638081162051585> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Prime King __Uma__ est une Roi Démon, et un personnage récurrent de The God of Highschool. Elle est la 'soeur' (pas de sang) de Jecheondaeseong.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.3 | Entraînez-vous, empruntez les pouvoirs des dieux, et remportez les tournois, participants !")
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

	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héroïne Prime King Uma viens d'être effectuée.");

    }

        // Hero Cantare = Viole
    if (message.content === prefix + "viole"){
        var embed = new Discord.RichEmbed()
        .setTitle("Jyu Viole Grace :black_small_square: <:ice:719781844949925898> :black_small_square: <:artmartiaux:723903194819985459> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Jyu __Viole__ Grace est un candidat slayer, et un protagoniste de Tower of God pendant quelques temps.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.3 | Devenez plus fort, et grimpez la tour, élus.")
        .setThumbnail("https://i.imgur.com/HGTeVIH.png")
        .setImage("https://i.imgur.com/5zPu089.gif")
        .addField(":speech_balloon: Citation :", "Je suis Jyu Viole Grace, un des candidats slayer de FUG, Zahard et ses proches... Je vis pour leur mort. C'est pourquoi aucun de vous ne peut devenir mon coéquipier. Je suis votre ennemi.", false)
        .addField("<:c1:719664266797383680> Arts Martiaux de la Famille Ha", "Attaque l'adversaire possédant la plus grande attaque avec 130% de l'ATQ et inflige des dégâts additionnels égaux à 10% de l'ATQ 2 fois. Pour chaque dégâts additionnels, il y a 50% de chance de réduire l'attaque de 30% pendant 2 tours.", false)
        .addField("<:c2:719664268722831421> Style Piercing de la Famille Ha", "Enlève tous les bonus d'un adversaire de la ligne avant et arrière et les empêche de recevoir des bonus pendant 1 tour. Puis, perce avec 150% de l'ATQ l'adversaire.", false)
        .addField("<:c3:719664266776412160> Poing Flamboyant du Style d'Hayeol", "Perce tous les adversaires avec 120% de l'ATQ, et inflige 170% de dégâts additionnels à l'adversaire possédant les PV's les plus haut, puis étourdis cet adversaire pendant 1 tour.", false)
        .addField("<:passif:719664266969612379> 1: Percuteur Shinsu", "Augmente l'attaque de 15%, la santé de 15%, détourne 10% des dégâts, et augmente les chances de coup critique de 5%.", false)
        .addField("<:passif:719664266969612379> 2: Candidat Slayer", "Augmente de 15% l'ATQ & de 15% les dégâts critique en attaquant si le héros n'est pas sous l'effet d'un malus (jusqu'à 75%), retire 1 malus si le héros en a un, récupère 10% de PV et génère un bouclier avec 10% de PV pendant 2 tours.", false)
        .addField("<:sp:720742202757873745> Canon rayonnant", "Attaque tous les adversaires avec 100% de l'ATQ et attaque en plus 1 adversaire au hasard, infligeant des dégâts égaux à 20% de l'ATQ 5 fois. L'adversaire qui est touché par l'attaque aléatoire a 30 % de probabilité d'être étourdis pendant un tour.", false)
        .addField("ATQ", "18935", true)
        .addField("DEF", "828", true)
        .addField("PV", "143092", true)
        .addField("VIT", "445", true)
        .addField("Taux Crit", "20%", true)
	    .addField("Blocage", "33%", true)
        .addField("Résist. Malus", "23%", true)
     	.addField("Déviation DGT", "34%", true)

	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héros Jyu Viole Grace viens d'être effectuée.");

    }

        // Hero Cantare = Queen No Name
        if (message.content === prefix + "queen no name"){
            var embed = new Discord.RichEmbed()
            .setTitle("Queen No Name :black_small_square: <:dark:723941756109979760> :black_small_square: <:dieu:723941755996733583> :black_small_square: <:ss:719641320343470150>")
            .setDescription("Queen __No Name__ est la reine de la guilde New Nightmare.")
            .setColor("RANDOM")
            .setFooter("Khun Ran v0.3 | Combattez pour monter de niveau, joueur !")
            .setThumbnail("https://i.imgur.com/lTSFMfY.png")
            .setImage("https://i.imgur.com/v9syQKz.gif")
            .addField(":speech_balloon: Citation", "Plus sournois que les démons.... et plus avide que les dragons. C'est humain.", false)
            .addField("<:c1:719664266797383680> Entaille cauchemardesque", "Attaque 2 adversaires aléatoirement avec 110% de l'ATQ et inflige 30% de dégâts additionnels s'ils n'ont aucun bonus avec 50% de chances sur chaque adversaire de retirer un bonus s'ils en ont.", false)
            .addField("<:c2:719664268722831421> Tir de couverture", "Attaque tous les adversaires avec 150% de l'ATQ et augmente le moral de tous les alliés pour attribuer un bonus sur les [dégâts des compétences] de 30% pendant 2 tours.", false)
            .addField("<:c3:719664266776412160> Ouvrons le feu, pour la guerre !", "Attaque tous les adversaires 3 fois avec 50% de l'ATQ. Chaque attaque inflige 60% de dégâts additionnels à un adversaire aléatoire. Récupère 2 Mana si un adversaire est éliminé par cette attaque.", false)
            .addField("<:passif:719664266969612379> 1: La Force de New-Nightmare", "Augmente l'attaque de 15%, la santé de 15% et détourne 10% des dégâts.", false)
            .addField("<:passif:719664266969612379> 2: Karma", "Le héros devient immunisé aux dégâts pendant 1 tour lorsqu'un allié ou un adversaire est éliminé. Restaure les PV's d'un allié à hauteur de 50% des PV's de Queen No Name lorsque celle-ci est éliminée, et rends l'allié immunisé aux dégâts une fois.", false)
            .addField("<:sp:720742202757873745> Allez, Nightmare !", "Attaque tous les adversaires avec 140% de l'ATQ avec une attaque absolue qui ignore le détournement des dégâts et la résistances aux malus de 50%, et inflige [Confusion] pendant 1 tour à un adversaire aléatoire.", false)
            .addField("ATQ", "22199", true)
            .addField("DEF", "811", true)
            .addField("PV", "123636", true)
            .addField("VIT", "496", true)
            .addField("Taux Crit", "15%", true)
            .addField("Blocage", "33%", true)
            .addField("Résist. Malus", "28%", true)
            .addField("Déviation DGT", "29%", true)
    
        message.channel.sendEmbed(embed)
    
        console.log("La commande de l'Héroïne Queen No Name viens d'être effectuée.");
    
        }
	
    // Hero Cantare = Yeon's Flame Khun
    if (message.content === prefix + "flame khun"){
        var embed = new Discord.RichEmbed()
        .setTitle("Yeon's Flame Khun :black_small_square: <:feu:719638080780501073> :black_small_square: <:element:724668549028905073> :black_small_square: <:ss:719641320343470150>")
        .setDescription("Yeon's Flame __Khun__ est un régulier de Tower of God. Il est le meilleur ami de Baam, et est un des protagonistes de la série.")
        .setColor("RANDOM")
        .setFooter("Khun Ran v0.4 | Devenez plus fort, et grimpez la tour, élus.")
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
        .addField("Déviation DGT", "19%", true)

    message.channel.sendEmbed(embed)

    console.log("La commande de l'Héros Yeon's Flame Khun viens d'être effectuée.");

    }
	
	// Hero Cantare = Unleashed Raizel
if (message.content === prefix + "unleashed raizel"){
    var embed = new Discord.RichEmbed()
    .setTitle("Unleashed Raizel :black_small_square: <:dark:723941756109979760> :black_small_square: <:dieu:723941755996733583> :black_small_square: <:ss:719641320343470150>")
    .setDescription("Unleashed __Raizel__ est le protagoniste de Noblesse.")
    .setColor("RANDOM")
    .setFooter("Khun Ran v0.4 | Surpassez-vous, respectez le code des Nobles, et détruisez ces traîtres.")
    .setThumbnail("https://i.imgur.com/kwMfqwu.png")
    .setImage("https://i.imgur.com/Le3UW9p.gif")
    .addField(":speech_balloon: Citation", "Noblesse oblige.", false)
    .addField("<:c1:719664266797383680> Champ de Sang: Libération", "Attaque 2 adversaires avec 120% de l'ATQ, utilise 10% de ses PV's restants pour infliger des dégâts additionnels équivalent à 150% des PV's utilisés.", false)
    .addField("<:c2:719664268722831421> Phénix de Sang", "Attaque tous les adversaires avec 105% de l'ATQ et inflige [soins impossible] avec 90% de chances pendant 2 tours. Utilise 10% de ses PV's restants pour infliger des dégâts additionnels équivalent à 200% des PV's utilisés.", false)
    .addField("<:c3:719664266776412160> Trou noir", "Attaque tous les adversaires avec 120% de l'ATQ et utilise 15% de ses PV's restants pour infliger des dégâts additionnels équivalent à 250% des PV's utilisés. La prochaine attaque de tous les alliés ignore 40% de résistance aux malus et de déviation des dégâts.", false)
    .addField("<:passif:719664266969612379> 1: Brisement du sceau", "Augmente la santé de 25%, la défense de 10% et la déviation des dégâts de 15%.", false)
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
    .addField("Déviation DGT", "39%", true)

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
    .addField("<:passif:719664266969612379> 2: Maître du regard", "Stoppe le niveau de puissance de l'adversaire ayant l'ATQ la plus élevée au début du combat pour contrecarrer son attaque.", false)
    .addField("ATQ", "16183", true)
    .addField("DEF", "593", true)
    .addField("PV", "113397", true)
    .addField("VIT", "362", true)
    .addField("Taux Crit", "15%", true)
    .addField("Armor Crash", "5%", true)
    .addField("Blocage", "33%", true)
    .addField("Résist. Malus", "23%", true)
    .addField("Déviation DGT", "24%", true)

message.channel.sendEmbed(embed)

console.log("La commande de l'Héros Raizel viens d'être effectuée.");

}

        // Epic Seven Héros = Sez
    if (message.content === prefix + "sez"){
        var embed = new Discord.RichEmbed()
            .setTitle("Sez Gaien :black_small_square: <:elementeau:506109829455282176> :black_small_square: <:e7assassin:506111331473031188> :black_small_square: Vierge :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Tueur en série en attente d'être exécuté, __Sez__ a été enrôlé dans l'Unité d'Extermination Inconnue en raison des pouvoirs obscurs qui lui avaient été donnés par le Roi Démon Il est calme et confiant, avec une tendance au cynisme. Prêt à tuer quiconque ou quoi que ce soit qu'il considère comme une menace, __Sez__ est une arme vivante. C'est ce trait de sa personnalité qui lui a valu le surnom de 'Berserker' lors de sa fuite. Il est habituellement calme, préférant être seul. Et bien qu'il soit méprisant envers ceux qui ne le connaissent pas bien, il écoute toujours leurs opinions.")
            .setColor("RANDOM")
            .setFooter("Fiche de l'Héros Sez générée suite à une demande de " + message.author.username + ". " + "Fiche mise à jour le 24/11.")
            .setThumbnail("https://static.smilegatemegaport.com/event/live/epic7/world/brand/images/character/sez/sez_0000.png")
            .setImage("https://j.gifs.com/kZGmrv.gif")
            .addField(":speech_balloon: Citation :", "Je vais te traîner dans l'abysse.", false)
            .addField(":crossed_swords: Compétence 1: Dark Shadow", "Pénètre l'ennemi avec une énergie sombre. 50% de chances de rendre l'ennemi impossible a heal pendant 1 tour. Moins la cible a de santé, plus les dégâts infligés sont importants.", false)
            .addField(":crossed_swords: Compétence 2: Encroach", "Si la santé d'un ennemi est inférieure à 50% après avoir été attaqué avec 'Dark Shadow', le lanceur effectue une seconde attaque qui frappe tous les ennemis. L'attaque supplémentaire a 50% de chances de rendre les cibles impossible a heal pendant 1 tour. Cet effet ne peut être activé qu'une seule fois au tour du lanceur.", false)
            .addField(":crossed_swords: Compétence 3: Death Sentence", "Inflige des dégâts mortels à l'ennemi. Moins la cible a de santé, plus les dégâts infligés sont importants. Si l'ennemi est défait, les dégâts relatifs à l'attaque du lanceur sont infligés à tous les ennemis.", false)
            .addField(":comet: Vidéo d'introduction du personnage", ":arrow_down:", true)
	message.channel.sendEmbed(embed)

	console.log("La commande de l'Héros Sez viens d'être effectuée.");

    }

	
	        // Epic Seven Artefact = Sigurd Scythe
    if (message.content === prefix + "sigurd"){
        var embed = new Discord.RichEmbed()
            .setTitle("Sigurd Scythe :black_small_square: <:e7combattant:506111308635308032> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Alors que le clair de lune révélait une personne tenant une faux, les spectateurs étonnés s'exclamèrent 'Le Dieu de la Mort est descendu !'")
            .setColor("RANDOM")
            .setFooter("Artefact Sigurd Scythe demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://www.zupimages.net/up/19/01/wchj.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "Lorsque la vie du lanceur est inférieure à 50%, augmente l'attaque de 25% et absorbe **25%** des dégâts infligés pour les convertir en vie.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "Lorsque la vie du lanceur est inférieure à 50%, augmente l'attaque de 25% et absorbe **50%** des dégâts infligés pour les convertir en vie.", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **21** | Vie : **32**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **273** | Vie : **416**", false)
	    .addField(":crossed_swords: Notes", "PVE : **S** | PVP : **SS**", false)
	    .addField(":crossed_swords: Quelques personnages pouvant l'utiliser", "Ravi, Ken...", false)
	    .addField(":crossed_swords: Commentaires", "Un des meilleurs artefacts tanky réservé au warrior. Utilisable sur Ravi, et sur les warriors n'ayant pas de vol de vie comme Ken. Ne pas utilisez sur des warrior comme Sigret, Yufine et tous les warriors n'étant pas très résistant à cause de l'exigence des -50% de vie. Bonne synergie avec le set Lifesteal. Peut soigner votre personnage proche de la mort totalement ou presque. Peut faire de gros dégâts. ", false)
	message.channel.sendEmbed(embed)

    }
	
		        // Epic Seven Artefact = Durandal
    if (message.content === prefix + "durandal"){
        var embed = new Discord.RichEmbed()
            .setTitle("Durandal :black_small_square: <:e7combattant:506111308635308032> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("La lueur émise par l'épée protège son propriétaire de toutes blessures.")
            .setColor("RANDOM")
            .setFooter("Artefact Durandal demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://www.zupimages.net/up/19/01/fzpf.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "Si la vie du lanceur est inférieure à 75%, la Combat Readiness augmente de **8%** quand celui-ci est attaqué.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "Si la vie du lanceur est inférieure à 75%, la Combat Readiness augmente de **16%** quand celui-ci est attaqué", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **18** | Vie : **43**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **234** | Vie : **559**", false)
	message.channel.sendEmbed(embed)

    }
	
			        // Epic Seven Artefact = Uberious's Tooth
    if (message.content === prefix + "uberius"){
        var embed = new Discord.RichEmbed()
            .setTitle("Uberius's Tooth :black_small_square: <:e7combattant:506111308635308032> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Trésor de la famille royale de Wintenberg fabriqué à partir des restes du dragon Uberius. On dit qu'il est capable de déchirer une armure de dragon.")
            .setColor("RANDOM")
            .setFooter("Artefact Uberius's Tooth demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://zupimages.net/up/19/01/b7ks.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "**50%** de chance d'infliger des dégâts supplémentaires si un coup critique est infligé lors d'une attaque basique. Les dégâts supplémentaires sont proportionnels à l'attaque du lanceur.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "**100%** de chance d'infliger des dégâts supplémentaires si un coup critique est infligé lors d'une attaque basique. Les dégâts supplémentaires sont proportionnels à l'attaque du lanceur.", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **21** | Vie : **32**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **273** | Vie : **416**", false)
	message.channel.sendEmbed(embed)

    }
	
				        // Epic Seven Artefact = Border Coin
    if (message.content === prefix + "border"){
        var embed = new Discord.RichEmbed()
            .setTitle("Border Coin :black_small_square: <:e7combattant:506111308635308032> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Face, je ferai comme si je n'avais rien vu et te laisserai partir, mais pile... D'innombrables personnes ont mis en jeu leur fortune sur cette ancienne pièce d'or.")
            .setColor("RANDOM")
            .setFooter("Artefact Border Coin demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://epic7x.com/wp-content/uploads/2019/03/zFjICyn.png")
            .addField(":crossed_swords: Compétence Niv.1", "Augmente l'attaque de **7,5%** lors de l'utilisation d'une compétence n'infligeant pas de dégâts. L'effet peut se cumuler jusqu'à 3 fois.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "Augmente l'attaque de **15%** lors de l'utilisation d'une compétence n'infligeant pas de dégâts. L'effet peut se cumuler jusqu'à 3 fois.", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **21** | Vie : **32**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **273** | Vie : **416**", false)
	message.channel.sendEmbed(embed)
	    
    }
	
					        // Epic Seven Artefact = Junkyard Dog
    if (message.content === prefix + "junkyard"){
        var embed = new Discord.RichEmbed()
            .setTitle("Junkyard Dog :black_small_square: <:e7combattant:506111308635308032> :black_small_square: 5<:etoile:580331911608664084> :black_small_square: <:arkyriche:528289398521987102>")
            .setDescription("Une arme créée pour concratiser la capacité de l'Outrage. Il s'agit d'une combinaison du Fireseal et de la Flashing Tooth, qui est l'un des trésors sacrés détenu à l'origine par le Conclave sur la planète de Sol.(**Cet artéfact était limité, et disponible seulement pendant la collaboration avec Guilty Gear**)")
            .setColor("RANDOM")
            .setFooter("Artefact limité Junkyard Dog demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://epic7x.com/wp-content/uploads/2019/04/sol-badguy-artifact-full.png")
            .addField(":crossed_swords: Compétence Niv.1", "**25%** de chance de burn l'ennemi pendant 2 tours après avoir utilisé une compétence basique. (Compétence 1)", false)
            .addField(":crossed_swords: Compétence Niv.Max", "**50%** de chance de burn l'ennemi pendant 2 tours après avoir utilisé une compétence basique. (Compétence 1)", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **21** | Vie : **32**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **273** | Vie : **416**", false)
	message.channel.sendEmbed(embed)
	    
    }
	
				        // Epic Seven Artefact = Holy Sacrifice
    if (message.content === prefix + "holy"){
        var embed = new Discord.RichEmbed()
            .setTitle("Holy Sacrifice :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("La Statue de la Grâce est donnée aux chevaliers qui gagnent la faveur de la déesse,  celle-ci les sauveras une fois avant de se briser en morçeaux. Écrit par Barrett [Trésor du Saint Empire, p15]")
            .setColor("RANDOM")
            .setFooter("Artefact Holy Sacrifice demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://www.zupimages.net/up/19/01/un9a.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "**50%** de chance d'être réanimé avec 25% de vie après la mort. Ne peut-être utilisé qu'une seule fois par stage.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "**100%** de chance d'être réanimé avec 25% de vie après la mort. Ne peut-être utilisé qu'une seule fois par stage.", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **9** | Vie : **76**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **117** | Vie : **988**", false)
	message.channel.sendEmbed(embed)

    }
	
				// Epic Seven Artefact = Elbris Ritual Sword
    if (message.content === prefix + "elbris"){
        var embed = new Discord.RichEmbed()
            .setTitle("Elbris Ritual Sword :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Épée de cérémonie transmise par les Elfes depuis des milliers d'années, la lame est imprégnée de plusieurs sources de magie. Celui possédant cette épée devient le roi des Elfes.")
            .setColor("RANDOM")
            .setFooter("Artefact Elbris Ritual Sword demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://zupimages.net/up/19/01/d1hj.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "**10%** de chance de contre-attaquer quand un allié est attaqué.", false)
            .addField(":crossed_swords: Compétence Niv.Max", "**20%** de chance de contre-attaquer quand un allié est attaqué.", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **15** | Vie : **54**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **195** | Vie : **702**", false)
	message.channel.sendEmbed(embed)

    }
	
			  // Epic Seven Artefact = Noble Oath
    if (message.content === prefix + "noble"){
        var embed = new Discord.RichEmbed()
            .setTitle("Noble Oath :black_small_square: <:e7chevalier:506111403489230868> :black_small_square: 5<:etoile:580331911608664084>")
            .setDescription("Un emblème donné aux membres de l'Ordre d'Ezera après qu'ils se soient engagés à consacrer leur vie à la Déesse. Ceux donnés aux chevaliers ressemblent à un écusson, tandis que ceux donnés aux prêtres ressemblent à un chapelet.")
            .setColor("RANDOM")
            .setFooter("Artefact Noble Oath demandé par " + message.author.username + ". " + "Fiche mise à jour le 21/05/19.")
            .setThumbnail("https://zupimages.net/up/19/01/z2z8.jpg")
            .addField(":crossed_swords: Compétence Niv.1", "Quand la vie diminue, la défense et l'effect resistance augmente de **25%**", false)
            .addField(":crossed_swords: Compétence Niv.Max", "Quand la vie diminue, la défense et l'effect resistance augmente de **50%**", false)
            .addField(":crossed_swords: Statistiques basique", "Attaque : **9** | Vie : **76**", false)
	    .addField(":crossed_swords: Statistiques Niv.Max", "Attaque : **117** | Vie : **988**", false)
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
	        "Tu fais parti de la Hurado Family ? Vu ta tronche, ça ne m'étonnerait même pas.",
                "Je pense que cela n'a pas d'importance.",
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
        case "chaton":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.channel.send("Désolé, tu dois rajouter un argument au pif derrière ta commande pour le moment. :cat:")};

            var replys = [
                "https://www.wanimo.com/veterinaire/images/articles/chat/chaton-diarrhee.jpg",
                "https://www.catizz.com/medias/common/miaulement%20chat%20.jpg",
                "https://jardinage.lemonde.fr/images/dossiers/2017-02/chaton-161407.jpg",
                "https://conseils-veto.com/wp-content/uploads/2018/02/chat-malade.png",
                "http://recueil-de-png.r.e.pic.centerblog.net/22f09c18.png",
                "https://static.wamiz.fr/images/articles/facebook/article/eduquer-un-chat-fb-59ad52663bd71.jpg",
                "https://jardinage.lemonde.fr/images/dossiers/2017-08/chaton-161238.jpg",
                "https://media.giphy.com/media/14v0b6U1vucP1m/giphy.gif",
                "https://thumbs.gfycat.com/WhirlwindHarshBighorn-size_restricted.gif",
                "https://img3.grazia.fr/var/grazia/storage/images/media/images/what-s-the-buzz/gifs-chats/gif3/13466158-1-fre-FR/Gif3_width545.gif",
                "https://static.mmzstatic.com/wp-content/uploads/2013/08/gifchat24.gif",
                "https://data.photofunky.net/output/image/b/7/9/9/b79903/photofunky.gif",
                "https://archzine.fr/wp-content/uploads/2016/01/le-plus-mignon-chaton-petit-chaton-mignon-chaton-image.jpg",
                "http://madame.legorafi.fr/wp-content/uploads/2016/10/iStock_68465967_MEDIUM-800x600.jpg",

       
            ];

            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription("Whaow, un petit chat !")
            .setImage(reponse)
            .setTimestamp()
	    .setFooter("Demandé par " + message.author.username, "https://cdn.discordapp.com/attachments/432232468465188874/506295453239869440/Screenshot_11.png")
            


        message.channel.sendEmbed(bembed)
        console.log("La commande chaton viens d'être effectuée avec succès par " + message.author.username);

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
