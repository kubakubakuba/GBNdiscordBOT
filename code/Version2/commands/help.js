const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let help = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Příkazy:')
        .addField('%balady', 'balady')
        .addField('%botinf', 'informace o botovi')
        .addField('%mc', 'aktuální informace k minecraft serveru')
        .addField('%server <IPadresa>', 'zjistit informace k jakékoli minecraft server adrese')
        .addField('%chunkbase', 'vyhodí linky podle aktuálního seedu mc serveru')
        .addField('%matika', 'vypíše příkazy matematických výpočtů')
        .addField('%conjug', 'vyhodí link na časování v němčině')

  return message.channel.send(help);
};

module.exports.help = {
    name: "help",
    aliases: ['pomoc', 'hilfe']
};
