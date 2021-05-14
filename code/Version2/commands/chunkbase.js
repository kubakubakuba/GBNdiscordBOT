const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const fetch = require("node-fetch");
  const res2 = await fetch("https://api.swpelc.eu/mc/seed.json");
  const seeds = await res2.json();

        let chunkbase = new Discord.MessageEmbed()
        .setColor('#059c2d')
        .setTitle('Minecraft Server')
        .addField('Biome-Overworld', "https://www.chunkbase.com/apps/biome-finder#"+seeds.overworld, false)
        .addField('Slime Chunks', "https://www.chunkbase.com/apps/slime-finder#"+seeds.overworld, false)
        .addField('Biome-Nether', "https://www.chunkbase.com/apps/biome-finder#"+seeds.nether, false)
        .addField('Bastion', "https://www.chunkbase.com/apps/bastion-remnant-finder#"+seeds.nether, false)
        .addField('Nether Fortress', "https://www.chunkbase.com/apps/nether-fortress-finder#"+seeds.nether, false)
        .addField('End City', "https://www.chunkbase.com/apps/endcity-finder#"+seeds.end, false)
    return message.channel.send(chunkbase);
};

module.exports.help = {
    name: "chunkbase",
    aliases: ['cb', 'chb', 'biomes', 'worlds']
};