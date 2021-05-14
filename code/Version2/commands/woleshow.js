const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args.length){
        let ws = new Discord.MessageEmbed()
          .setColor("#951cd6")
          .setTitle("Wole Show - příkazy")
          .addField("%woleshow eps / woleshow episodes", "vypíše epizody woleshow")
          .addField("%woleshow ep <#>", "zobrazí informace k dané epizodě woleshow")
        return message.channel.send(ws);
      }
      else if((args[0] == "eps") || (args[0] == "episodes")){
        const fetch = require("node-fetch");
        const res = await fetch("https://api.swpelc.eu/discord/woleshow/config.json");
        const wshow = await res.json();
        const episodeCount = wshow.woleshow.episodes.length;
        let episodes = new Discord.MessageEmbed()
          .setColor("#951cd6")
          .setTitle("Wole Show - epizody")
          .addField("Počet epizod: ", episodeCount)
        return message.channel.send(episodes);
      }
      else if(((args[0] == "ep") || (args[0] == "episode")) && !args[1] == ""){
        const fetch = require("node-fetch");
        const res = await fetch("https://api.swpelc.eu/discord/woleshow/config.json");
        const wshow = await res.json();
        
        episode(args[1] - 1, wshow);
      }

      async function episode(number, json){

      let episode = new Discord.MessageEmbed()
          .setColor("#951cd6")
          .setTitle("Wole Show - epizoda " + (number + 1))
          .addField("Host: ", json.woleshow.episodes[number].host)
          for(let i = 0; i < json.woleshow.episodes[number].links.length; i++){
            episode.addField(json.woleshow.episodes[number].links[i].name, json.woleshow.episodes[number].links[i].url)
          }
        return message.channel.send(episode);
    }
};

module.exports.help = {
    name: "woleshow",
    aliases: ['herdyn', 'ws']
};