module.exports = {
    name: "clear",
    aliases: ["purge", "nuke"],
    category: "moderation",
    description: "Arky fais le ménage.",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Arky est obligé de te l'avouer, tu n'as pas la permission pour faire ceci !").then(m => m.delete(5000));
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Tu sais, il faut un nombre, oh, et je ne suis pas capable de supprimer 0 message, idiot.").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("...Je ne peux pas supprimer ces messages... Désolé.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Kawerick a détruit \`${deleted.size}\` messages.`))
            .catch(err => message.reply(`Arky s'excuse... une erreur s'est produite... ${err}`));
    }
}
