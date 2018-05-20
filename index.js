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
     .setTitle("Apparition")
     .setAuthor("RpBot")
      .setColor(0xD4FE00)
      .setDescription("Arme")
      .setFooter("si vous avez un problème... index.js ne répond pas")
           .addField("génération du Katana",
       " A fait apparaître son Katana")
  
      message.channel.send({embed});
 }
  if(message.content.startsWith("rp!katana")){
    message.channel.send(`**${message.author.username}** fait apparaître son Katana !`,{
    file:"https://orig00.deviantart.net/8300/f/2007/171/b/e/katana_by_vyrosia.jpg"
})
}
if(message.content.startsWith("rp!hache")){
    message.channel.send(`**${message.author.username}** fait apparaître sa Hache !`,{
    file:"https://i.pinimg.com/originals/71/02/0b/71020b0b0f15002ef877deb3f716dad6.jpg"
})
}
}
)
