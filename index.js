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
        .setTitle("voilà les commandes")
        .setColor(0xD4FE00)
        .setDescription("")
        .setFooter("Si vous avez un probleme... index.js ne répond pas")
        .addField("Commandes du bot",
          "bon... c'est un test ok ?")
    
        message.channel.send({embed});
    }
}
)
