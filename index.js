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
     if(message.content === "rp!katana" ){ 
 
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
  if(message.content.startsWith("m!nature")){
    message.channel.send(`**${message.author.username}** lance la capacité orbe de la nature!\nDégâts : 25`,{
    file: "https://i.pinimg.com/originals/69/eb/43/69eb43047ff86ade658b2c677c0567ee.gif"
})
}
}
