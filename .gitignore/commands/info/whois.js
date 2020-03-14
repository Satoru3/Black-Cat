const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "whois",
    aliases: ["who", "user", "info"],
    description: "Informations de l'utilisateur",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('Information du membre:', stripIndents`**- Nom:** ${member.displayName}
            **- A rejoins le serveur le:** ${joined}
            **- Rôles:** ${roles}`, true)

            .addField('User information:', stripIndents`**- ID:** ${member.user.id}
            **- Nom d'utilisateur**: ${member.user.username}
            **- Tag**: ${member.user.tag}
            **- Compte créé le**: ${created}`, true)
            
            .setTimestamp()

        if (member.user.presence.game) 
            embed.addField('En train de jouer à', stripIndents`** Nom:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
}
