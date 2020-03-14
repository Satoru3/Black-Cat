const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name: "love",
    aliases: ["crush"],
    category: "fun",
    description: "Calcule ton affinité avec une autre personne !",
    usage: "[mention | id | username]",
    run: async (client, message, args) => {

        let person = getMember(message, args[0]);

        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`L'affinité entre **${person.displayName}** et **${message.member.displayName}** est de:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}. Quel amour !`);

        message.channel.send(embed);
    }
}
