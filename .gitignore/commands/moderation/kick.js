const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Expulsez un membre.",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "logs") || message.channel;

        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.reply("Tu dois obligatoirement mentionner une personne à expulser.")
                .then(m => m.delete(5000));
        }

        // Aucune raison donnée.
        if (!args[1]) {
            return message.reply("Une raison pour expulser serait utile.")
                .then(m => m.delete(5000));
        }

        // L'utilisateur n'a pas la permission.
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ Hé, tu t'es pris pour qui ? Tu n'as pas la permission d'expulser, contacte une personne t'étant supérieure.")
                .then(m => m.delete(5000));
        }

        // Le bot n'a pas la permission.
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ Hmm... C'est assez difficile à admettre, mais je n'ai pas cette permission.")
                .then(m => m.delete(5000));
        }

        const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

        // Aucun membre trouvé.
        if (!toKick) {
            return message.reply("Ce membre est inconnu au bataillon, réessaye.")
                .then(m => m.delete(5000));
        }

        // Impossible de s'auto-expulser.
        if (toKick.id === message.author.id) {
            return message.reply("Wow, plus débile, tu meurs.")
                .then(m => m.delete(5000));
        }

        // L'utilisateur est-il expulsable?
        if (!toKick.kickable) {
            return message.reply("Hm... Ça m'embête de l'admettre, mais je dois avouer que cette personne est trop haut placé.")
                .then(m => m.delete(5000));
        }
                
        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setThumbnail(toKick.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`**- Membre expulsé:** ${toKick} (${toKick.id})
            **- Expulsé par:** ${message.member} (${message.member.id})
            **- Raison:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()
            .setColor("GREEN")
            .setAuthor(`Cette vérification deviendra invalide dans 30 secondes..`)
            .setDescription(`Es-tu sûr d'expulser ${toKick}?`)

        // Envoi le message.
        await message.channel.send(promptEmbed).then(async msg => {
            // Attend la réaction.
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Vérification
            if (emoji === "✅") {
                msg.delete();

                toKick.kick(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`...L'expulsion n'a pas fonctionné, erreur: ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`Expulsion abandonnée.`)
                    .then(m => m.delete(10000));
            }
        });
    }
};
