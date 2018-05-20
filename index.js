const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("RpBot!")

bot.on('ready', function() {
    bot.user.setUsername("RpBot")
    bot.user.setPresence({ game: { name: 'Griller des mages con'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if(message.content === "rp!help"){

        const embed = new Discord.RichEmbed()
        .setTitle("commandes Disponible")
        .setColor(0xD4FE00)
        .setDescription("")
        . setFooter ( "Si vous avez un problème ... index.js ne répond pas" )
        . addField ( "liste",
          "Ça arrive :)" )
    
        message.channel.send({embed});
 }
if(message.content.startsWith("rp!Katana"){
    message.channel.send("**${message.author.username}** fait apparaître son katana !",{
    file: "https://orig00.deviantart.net/8300/f/2007/171/b/e/katana_by_vyrosia.jpg"
})
}
}
