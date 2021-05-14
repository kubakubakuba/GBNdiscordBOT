const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!args.length) {
			return message.channel.send(`Prosím zadejte argumenty funkce, ${message.author}!`);
    }
      let u1 = args[0];
      let u2 = args[1];
      let u3 = args[2];

      velikostVektoru(u1, u2, u3, "Velikost vektoru");
    
      async function velikostVektoru(u1, u2, u3, text){
      let soucin = u1*u1 + u2*u2 + u3*u3;
      let velikost = Math.sqrt(soucin);
      let out = new Discord.MessageEmbed()
            .setColor("#2fd6c8")
            .setTitle(text)
            .addField("=", velikost)
      return message.channel.send(out);
    }
};

module.exports.help = {
    name: "vektvel",
    aliases: ['velikostv', 'vv', 'velvekt']
};