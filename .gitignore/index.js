const { Client, RichEmbed } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
    disableEveryone: true
})

client.on("ready", () => {
    console.log(`${client.user.username} est désormais connecté.`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "*help | V2",
            type: "WATCHING"
        }
    }); 
})

client.on("message", async message => {
    const prefix = "*";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") {

        const msg = await message.channel.send(`Calcul en cours...`);

        msg.edit(`Poooong ! Arky a fini ses calculs !\n La latence est de ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\n La latence de l'API est: ${Math.round(client.ping)}ms`);
    }

    if (cmd === "say") {

        if (message.deletable) message.delete();

        if (args.length < 0) return message.reply(`Tu n'as rien à dire ?`).then(m => m.delete(5000));
        
        const roleColor = message.guild.me.highestRole.hexColor;


        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" :  roleColor)
                .setTimestamp()
                .setImage(client.user.displayAvatarURL)
                .setAuthor(message.author.username, message.author.displayAvatarURL);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
});

client.login(process.env.TOKEN);
