const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let help = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Matematické příkazy:')
        .addField('%vektsouc <u1> <u2> <u3> <v1> <v2> <v3>', 'vrátí vektor rovný vektorovému součinu zadaných vektorů')
        .addField('%skalsouc <u1> <u2> <u3> <v1> <v2> <v3>', 'vrátí skalární součin zadaných vektorů')
        .addField('%vektvel <u1> <u2> <u3>', 'vrátí velikost vektoru')
        .addField('%odchylka <u1> <u2> <u3> <v1> <v2> <v3>', 'vrátí odchylku ve stupních podle dvou vstupních vektorů')
  return message.channel.send(help);
};

module.exports.help = {
    name: "matika",
    aliases: ['maths', 'mat']
};