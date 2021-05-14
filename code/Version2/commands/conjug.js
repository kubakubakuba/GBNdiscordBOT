const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args.length){
        let cj = new Discord.MessageEmbed()
          .setColor("#9c1e3b")
          .setTitle("Časování v němčině")
          .addField("Prosím zadejte", "sloveso")
        return message.channel.send(cj);
      }
      else{
        let odkaz = "https://cs.bab.la/casovani/nemecky/" + args[0];
        let casovani = new Discord.MessageEmbed()
          .setColor("#9c1e3b")
          .setTitle("Časování slovesa " + args[0])
          .addField("Odkaz ", odkaz)
        return message.channel.send(casovani);
      }
};

module.exports.help = {
    name: "conjug",
    aliases: ['casovani', 'cjg', 'deutsch', 'de']
};