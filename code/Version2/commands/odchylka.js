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

      odchylka(u1, u2, u3, v1, v2, v3);

      async function odchylka(u1, u2, u3, v1, v2 , v3){
      let velu = Math.sqrt(u1*u1 + u2*u2 + u3*u3);
      let velv = Math.sqrt(v1*v1 + v2*v2 + v3*v3);
      let skalSoucin = u1*v1 + u2*v2 + u3*v3;
      let zlomek = skalSoucin / (velu * velv);
      let odchylka = Math.acos(zlomek) * (180 / Math.PI);
      
      let out = new Discord.MessageEmbed()
            .setColor("#2fd6c8")
            .setTitle("Odchylka")
            .addField("=", odchylka + "°")
      return message.channel.send(out);
    }
};

module.exports.help = {
    name: "odchylka",
    aliases: ['odch']
};