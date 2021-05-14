const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!args.length) {
			return message.channel.send(`Prosím zadejte argumenty funkce, ${message.author}!`);
    }
      let u1 = args[0];
      let u2 = args[1];
      let u3 = args[2];
      let v1 = args[3];
      let v2 = args[4];
      let v3 = args[5];

      vektsouc(u1, u2, u3, v1, v2, v3);

    async function vektsouc(u1, u2, u3, v1, v2, v3){
      let w1 = u2*v3 - u3*v2;
      let w2 = u3*v1 - u1*v3;
      let w3 = u1*v2 - u2*v1;
      let out = new Discord.MessageEmbed()
            .setColor("#2fd6c8")
            .setTitle(`Výsledný vektor`)
            .addField('𝓌₁', w1)
            .addField('𝓌₂', w2)
            .addField('𝓌₃', w3)
    
      return message.channel.send(out);
    }
};

module.exports.help = {
    name: "vektsouc",
    aliases: ['vs', 'vsouc']
};