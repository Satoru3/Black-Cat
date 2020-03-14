module.exports = {
    name: "clear",
    aliases: ["purge", "nuke"],
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("...Tu te croyais puissant ? Eh beh, tu ne l'es pas, repasse plus tard.").then(m => m.delete(5000));
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Es-tu idiot ?? Tu dois rentrer un nombre, et pas 0, bien entendu...").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("...Hmm, je ne peux pas supprimé ces messages... Mais je ne m'excuserais pas.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`J'ai supprimé \`${deleted.size}\` messages de ce monde.`))
            .catch(err => message.reply(`...Une erreur s'est produite, bien entendu, ce n'est pas de ma faute. ${err}`));
    }
}
