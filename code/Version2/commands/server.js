const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!args.length) {
			return message.channel.send(`Prosím zadejte IP adresu serveru, ${message.author}!`);
    }
      let IPadr = args[0];
      const fetch = require("node-fetch");
      const res = await fetch("https://api.mcsrvstat.us/2/"+IPadr);
      const status = await res.json();

        let mc = new Discord.MessageEmbed()
        .setColor('#059c2d')
        .setTitle('Minecraft Server')
        .addField('Verze serveru', status.software + " " + status.version, false)
        .addField('IP adresa', IPadr, false)
        .addField('Online', status.players.online + " => " + status.players.list)
    return message.channel.send(mc);
};

module.exports.help = {
    name: "server",
    aliases: ['srv']
};