const keepAlive = require("./server.js");

const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = '%';

client.on("ready", () => {
    (async () => {/* ... */})()
      .catch(console.log);
});
keepAlive();
client.on('message', async message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        let help = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Příkazy:')
        .addField('%balady', 'balady')
        .addField('%botinf', 'informace o botovi')
        .addField('%mc', 'aktuální informace k minecraft serveru')
        .addField('%server <IPadresa>', 'zjistit informace k jakékoli minecraft server adrese')
        .addField('%chunkbase', 'vyhodí linky podle aktuálního seedu mc serveru')
        .addField('%matika vypíše příkazy matematických výpočtů')

        message.channel.send(help);
    }
    if(command === 'matika'){
        let help = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Matematické příkazy:')
        .addField('%vektsouc <u1> <u2> <u3> <v1> <v2> <v3>', 'vrátí vektor rovný vektorovému součinu zadaných vektorů')
        .addField('%skalsouc <u1> <u2> <u3> <v1> <v2> <v3>', 'vrátí skalární součin zadaných vektorů')
        .addField('%vektvel <u1> <u2> <u3>', 'vrátí velikost vektoru')
        .addField('%odchylka <u1> <u2> <u3> <v1> <v2> <v3>', 'vrátí odchylku ve stupních podle dvou vstupních vektorů')
        message.channel.send(help);
    }
    if(command === 'botinf'){
        let botinf = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Bot info')
        .addField('Author', 'Jakub Pelc', true)
        .addField('made', 'with <love />', true)
        message.channel.send(botinf);
    }
    if(command === 'mc'){
      let IPadr = "109.238.11.12";
      let MCport = "21335";
      let adress = IPadr+":"+MCport;
      //let DYNport = "21333";
      const fetch = require("node-fetch");
      const res = await fetch("https://api.mcsrvstat.us/2/"+IPadr+":"+MCport);
      const status = await res.json();
      const fetch2 = require("node-fetch");
      const res2 = await fetch("https://api.swpelc.eu/mc/seed.json");
      const seeds = await res2.json();

        let mc = new Discord.MessageEmbed()
        .setColor('#059c2d')
        .setTitle('Minecraft Server')
        .addField('Aktuální season', 'SEASON6', false)
        .addField('Verze serveru', status.software + " " + status.version, false)
        .addField('IP adresa', IPadr + ":" + MCport, false)
        .addField('Dynmapa', "http://dynmap.swpelc.eu", false)
        .addField('Seed-Overworld', seeds.overworld, false)
        .addField('Seed-Nether', seeds.nether, false)
        .addField('Seed-End', seeds.end, false)
        .addField('Online', status.players.online + " => " + status.players.list)
        message.channel.send(mc);
        message.channel.send("", {files: ["https://api.swpelc.eu/mc/icon.png"]});
    }
    if(command === 'pi'){
      let pi = '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892';
      let pivalue = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Pí')
        .addField('hodnota', pi)
        message.channel.send(pivalue);
    }
    if(command === 'chunkbase'){
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
        message.channel.send(chunkbase);
    }
    /*if(command === 'uuid'){
      if (!args.length) {
			return message.channel.send(`Proším zadejte username, ${message.author}!`);
    }
      const fetch = require("node-fetch");
      const res2 = await fetch("http://tools.glowingmines.eu/convertor/nick/"+args[0]);
      const uuidjson = await res2.json();
    let uuid = new Discord.MessageEmbed()
        .setColor('#059c2d')
        .setTitle('UUID for username finder')
        .addField('Username', args[0], false)
        .addField('UUID', uuidjson.uuid, false)
        message.channel.send(uuidjson);
    }*/
    if(command === 'server'){
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
        message.channel.send(mc);
    }
    if (command === "meet"){
      let botinf = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Linky na Google Meet')
        .addField('Angličtina A2', 'https://meet.google.com/ycc-scyz-ukm')
        .addField('Němčina', 'https://meet.google.com/euy-gswx-qpz')
        .addField('Čeština', 'https://meet.google.com/ahc-zcih-cox')
        .addField('VKM', 'https://meet.google.com/nsd-ghmm-yug')
        message.channel.send(botinf);
    }
    if(command === 'balady'){
      
      let balady = new Discord.MessageEmbed()
      .setColor('#fcba03')
      .setTitle('Balady:')
      .addField('Příběh života', 'https://www.youtube.com/watch?v=RWbexwi9T_4')
      .addField('Jedou sem benga', 'https://www.youtube.com/watch?v=2F-6UT9-BxI')
      .addField('Mamutí křik', 'https://www.youtube.com/watch?v=5aUO8Kp-T4Q')
      message.channel.send(balady);
    }

    if(command === 'woleshow'){
      if(!args.length){
        let ws = new Discord.MessageEmbed()
          .setColor("#951cd6")
          .setTitle("Wole Show - příkazy")
          .addField("%woleshow eps / woleshow episodes", "vypíše epizody woleshow")
          .addField("%woleshow ep <#>", "zobrazí informace k dané epizodě woleshow")
        message.channel.send(ws);
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
        message.channel.send(episodes);
      }
      else if(((args[0] == "ep") || (args[0] == "episode")) && !args[1] == ""){
        const fetch = require("node-fetch");
        const res = await fetch("https://api.swpelc.eu/discord/woleshow/config.json");
        const wshow = await res.json();
        
        episode(args[1] - 1, wshow);
      }
    }

    if(command === 'conjug'){
      if(!args.length){
        let cj = new Discord.MessageEmbed()
          .setColor("#9c1e3b")
          .setTitle("Časování v němčině")
          .addField("Prosím zadejte", "sloveso")
        message.channel.send(cj);
      }
      else{
        let odkaz = "https://cs.bab.la/casovani/nemecky/" + args[0];
        let casovani = new Discord.MessageEmbed()
          .setColor("#9c1e3b")
          .setTitle("Časování slovesa " + args[0])
          .addField("Odkaz ", odkaz)
        message.channel.send(casovani);
      }
    }

    async function episode(number, json){

      let episode = new Discord.MessageEmbed()
          .setColor("#951cd6")
          .setTitle("Wole Show - epizoda " + (number + 1))
          .addField("Host: ", json.woleshow.episodes[number].host)
          for(let i = 0; i < json.woleshow.episodes[number].links.length; i++){
            episode.addField(json.woleshow.episodes[number].links[i].name, json.woleshow.episodes[number].links[i].url)
          }
        message.channel.send(episode);
    }

    if(command === 'vektsouc'){
    if (!args.length) {
			return message.channel.send(`Prosím zadejte argumenty funkce, ${message.author}!`);
    }
      let u1 = args[0];
      let u2 = args[1];
      let u3 = args[2];
      let v1 = args[3];
      let v2 = args[4];
      let v3 = args[5];

      vektsouc(u1, u2, u3, v1, v2, v3);
    }

    if(command === 'vektvel'){
    if (!args.length) {
			return message.channel.send(`Prosím zadejte argumenty funkce, ${message.author}!`);
    }
      let u1 = args[0];
      let u2 = args[1];
      let u3 = args[2];

      velikostVektoru(u1, u2, u3, "Velikost vektoru");
    }

    if(command === 'skalsouc'){
    if (!args.length) {
			return message.channel.send(`Prosím zadejte argumenty funkce, ${message.author}!`);
    }
      let u1 = args[0];
      let u2 = args[1];
      let u3 = args[2];
      let v1 = args[3];
      let v2 = args[4];
      let v3 = args[5];

      skalarniSoucin(u1, u2, u3, v1, v2, v3);
    }

    if(command === 'odchylka'){
    if (!args.length) {
			return message.channel.send(`Prosím zadejte argumenty funkce, ${message.author}!`);
    }
      let u1 = args[0];
      let u2 = args[1];
      let u3 = args[2];
      let v1 = args[3];
      let v2 = args[4];
      let v3 = args[5];

      odchylka(u1, u2, u3, v1, v2, v3);
    }

    async function vektsouc(u1, u2, u3, v1, v2, v3){
      let w1 = u2*v3 - u3*v2;
      let w2 = u3*v1 - u1*v3;
      let w3 = u1*v2 - u2*v1;
      let out = new Discord.MessageEmbed()
            .setColor("#2fd6c8")
            .setTitle(`Výsledný vektor`)
            .addField('𝓌₁', w1)
            .addField('𝓌₂', w2)
            .addField('𝓌₃', w3)
    
            await message.channel.send(out);
    }

    async function skalarniSoucin(u1, u2, u3, v1, v2, v3){
      let velikost = u1*v1 + u2*v2 + u3*v3;
      let out = new Discord.MessageEmbed()
            .setColor("#2fd6c8")
            .setTitle("Skalární součin")
            .addField("=", velikost)
            await message.channel.send(out);
    }

    async function velikostVektoru(u1, u2, u3, text){
      let soucin = u1*u1 + u2*u2 + u3*u3;
      let velikost = Math.sqrt(soucin);
      let out = new Discord.MessageEmbed()
            .setColor("#2fd6c8")
            .setTitle(text)
            .addField("=", velikost)
            await message.channel.send(out);
    }

    async function odchylka(u1, u2, u3, v1, v2 , v3){
      let velu = Math.sqrt(u1*u1 + u2*u2 + u3*u3);
      let velv = Math.sqrt(v1*v1 + v2*v2 + v3*v3);
      let skalSoucin = u1*v1 + u2*v2 + u3*v3;
      let zlomek = skalSoucin / (velu * velv);
      let odchylka = Math.acos(zlomek) * (180 / Math.PI);
      
      let out = new Discord.MessageEmbed()
            .setColor("#2fd6c8")
            .setTitle("Odchylka")
            .addField("=", odchylka + "°")
            await message.channel.send(out);
    }
});

client.login(process.env.TOKEN);

// https://api.coindesk.com/v1/bpi/currentprice/CZK.json
