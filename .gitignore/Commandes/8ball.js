const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.reply("Tu veux me poser une question ? =) :8ball:");
    let replies = ["Oui.", "Non.", "Je ne sais pas.", "Je n'en suis pas sûr...", "Redemande moi plus tard !", "Exactement !"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setDescription(":8ball: 8ball")
    .setColor("#FF9900")
    .addField("Question :", question)
    .addField("Réponse :", replies[result])
    .setAuthor(message.author.tag);

    message.channel.send(ballembed);



}

module.exports.help = {
    name: "8ball"
}
