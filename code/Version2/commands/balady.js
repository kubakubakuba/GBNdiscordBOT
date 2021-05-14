const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let balady = new Discord.MessageEmbed()
      .setColor('#fcba03')
      .setTitle('Balady:')
      .addField('Příběh života', 'https://www.youtube.com/watch?v=RWbexwi9T_4')
      .addField('Jedou sem benga', 'https://www.youtube.com/watch?v=2F-6UT9-BxI')
      .addField('Mamutí křik', 'https://www.youtube.com/watch?v=5aUO8Kp-T4Q')
  return message.channel.send(balady);
};

module.exports.help = {
    name: "balady",
    aliases: ['balad','bal']
};