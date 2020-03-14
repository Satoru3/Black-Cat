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
       if(msg.content === prefix + '7DS') {
	  let role = msg.guild.roles.find('name', '')
	  
	  if(msg.member.roles.find('name', '7DS: Grand Cross')) {
	      msg.member.removeRole(role)
	      msg.reply(`Le rôle @7DS: Grand Cross t'a été retiré.`)
	  }
	   else {
	      msg.member.addRole(role)
	      msg.reply(`Le rôle @7DS: Grand Cross t'a été ajouté.`)
	   }
       }
    }
})


       
      
       
