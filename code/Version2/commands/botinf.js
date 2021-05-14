const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let botinf = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Bot info')
        .addField('Author', 'Jakub Pelc', true)
        .addField('made', 'with <love />', true)
  return message.channel.send(botinf);
};

module.exports.help = {
    name: "botinf",
    aliases: ['binf', 'botinfo']
};