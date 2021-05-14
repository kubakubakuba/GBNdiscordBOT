const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botinf = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Linky na Google Meet')
        .addField('Angličtina A2', 'https://meet.google.com/ycc-scyz-ukm')
        .addField('Němčina', 'https://meet.google.com/euy-gswx-qpz')
        .addField('Čeština', 'https://meet.google.com/ahc-zcih-cox')
        .addField('VKM', 'https://meet.google.com/nsd-ghmm-yug')
  return message.channel.send(botinf);
};

module.exports.help = {
    name: "meet",
    aliases: ['googlemeet', 'odkazy', 'hodiny']
};