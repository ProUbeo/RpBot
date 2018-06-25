const Discord = require('discord.js');
 const bot = new Discord.Client();
 
 var prefix = ("a_")
 var randnum = 0;
 
 bot.on('ready', function() {
     bot.user.setUsername("FunBot")
     bot.user.setPresence({ game: { name: 'Procurer du fun'}, status: 'dnd'}) //en ligne;
     console.log("Connected")
 });
 
 bot.login(process.env.TOKEN);
 
 bot.on("guildMemberAdd", member => {


member.guild.channels.find("name", "général").send(`Bienvenue ${member} sur le serveur ${message.guild.name}`)
    })
    bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "général").send(`${member} est parti... Au moins on s'amusera entre nous, sans lui ^^`)
    })
    
 

 bot.on('message', message => {

    if (message.content === "a_hug"){
        let args = message.content.split(" ").slice(1)
        let thingToEcho = args.join(" ")
        random();
        if (hug == 1)
        const embed = new Discord.RichEmbed()
        .setColor(0xD4FE00)
        .setFooter("si vous avez un problème... index.js ne répond pas")
        .addField(`${message.author.username} fait un calin à ${thingToEcho}`,"*Apparition de l'image...*")
        .setImage("https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif?itemid=3532079")
        message.channel.send({embed});

        if (hug == 2)
        const embed = new Discord.RichEmbed()
        .setColor(0xD4FE00)
        .setFooter("si vous avez un problème... index.js ne répond pas")
        .addField(`${message.author.username} fait un calin à ${thingToEcho}`,"*Apparition de l'image...*")
        .setImage("https://78.media.tumblr.com/5dfb67d0a674fe5f81950478f5b2d4ed/tumblr_ofd4e2h8O81ub9qlao1_500.gif")
        message.channel.send({embed});
    }

if(message.content.startsWith("a_test")){
    message.channel.send(`**${message.author.username}** fait apparaître un test avec succéés !`)
}
}
)

function random(min, max) {
    min = Math.ceil(1)
    max = Math.floor(2)
    hug = Math.floor(Math.random() * (max - min +1) + min);
 }
