const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("*help | V.2.0 |");
    console.log("Connecté avec succès.");
});

bot.login(process.env.TOKEN);

bot.on('message', msg => {
    if(msg.content[0] === prefix) {
       if(msg.content === prefix + 'gros château') {
	  let role = msg.guild.roles.find('name', 'gros château')
	  
	  if(msg.member.roles.find('name', 'gros château')) {
	      msg.member.removeRole(role)
	      msg.reply(`Rôle retiré Gros Château`)
	  }
	   else {
	      msg.member.addRole(role)
	      msg.reply(`Ajout du rôle Gros Château`)
	   }
       }
    }
})


       
      
       
