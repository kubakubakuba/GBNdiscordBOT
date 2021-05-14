const keepAlive = require("./server.js");

const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const token = process.env.TOKEN;
const bot = new Discord.Client({
  disableEveryone: true
});

// When bot ready
bot.on("ready", async () => {
  console.log(`${bot.user.username} is ready for action!`);
  if (config.activity.streaming == true) {
    bot.user.setActivity(config.activity.game, {
      url: 'https://twitch.tv/username'
    });
  } else {
    bot.user.setActivity(config.activity.game, {
      type: 'WATCHING'
    }); //PLAYING, LISTENING, WATCHING
    bot.user.setStatus('dnd'); // dnd, idle, online, invisible
  }
});
// Load commands
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("There are no commands to load...");

  console.log(`Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
        bot.aliases.set(alias, props.help.name);
    });
  });
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    let command;

    if (!message.content.startsWith(prefix)) return;

    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else {
        command = bot.commands.get(bot.aliases.get(cmd));
    }

    if (command) command.run(bot, message, args);
});

bot.login(token);