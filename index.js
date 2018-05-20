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
    if(message.content === "rp!test" ){ 

    const embed = new Discord.RichEmbed()
    .setTitle("Test d'image")
    .setAuthor("RpBot")
    .setColor(0xD4FE00)
    .setDescription("test")
    .setFooter("si vous avez un problème... index.js ne répond pas")
          .addField("test du lien",
      "donnée test")
      .setImage("https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/EGy7pjQwl/multicolor-video-with-text-error-404-not-found_skwt525re_thumbnail-small01.jpg")
  
    message.channel.send({embed});
}
}
)
