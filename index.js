 const Discord = require('discord.js');
 const bot = new Discord.Client();
 
 var prefix = ("RpBot!")
 
 bot.on('ready', function() {
     bot.user.setUsername("RpBot")
     bot.user.setPresence({ game: { name: 'Griller des mages con'}, status: 'dnd'}) //en ligne;
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
           "```help1.exe                                              _ ☐ X\nfaire apparaître des armes :\nrp!katana pour faire apparaître un katana (la logique)\nrp!hache pour faire apparaître attention suspens... une hache (bon ok j'arrète)\nrp!arc pour faire apparaître une canne a pêche... et non c'est pour un arc XD\nrp!faux pour faire apparaître une Faux et pas de Norman, merci :3\nrp!sceptre pour faire apparaître un sceptre de mage :3\nrp!couteau pour faire apparaître un couteau (poignard)\nrp!pistolet pour faire apparaître 2 Pistolet !\nrp!chaîne pour faire apparaître une chaîne en métal magique incassable\nrp!sword pour faire apparaître une épée divine ! (Aucune religion n'est visé)\nrp!dynamite pour faire apparaître des explosifs hyper puissants :3```" )
    
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
if(message.content.startsWith("rp!arc")){
    message.channel.send(`**${message.author.username}** fait apparaître son arc !`,{
    file:"http://img4.hostingpics.net/pics/484588arc.png"
})
}
if(message.content.startsWith("rp!faux")){
    message.channel.send(`**${message.author.username}** fait apparaître sa Faux !`,{
    file:"https://cdn.discordapp.com/attachments/448046019301736452/448060981978071040/th.jpg"
})
}
if(message.content.startsWith("rp!sceptre")){
    message.channel.send(`**${message.author.username}** fait apparaître son Sceptre !`,{
    file:"https://i.skyrock.net/4010/71994010/pics/3154696378_1_6_CYLmvdbs.png"
})
}
if(message.content.startsWith("rp!couteau")){
    message.channel.send(`**${message.author.username}** fait apparaître son Couteau (poignard) !`,{
    file:"http://img.hebus.com/hebus_2010/06/03/preview/100603180307_19.jpg"
})
}
if(message.content.startsWith("rp!pistolet")){
    message.channel.send(`**${message.author.username}** fait apparaître son Pistolet (x2) !`,{
    file:"https://i.skyrock.net/1287/90701287/pics/3220760413_1_16_rngUeCl8.jpg"
})
}
if(message.content.startsWith("rp!chaîne")){
    message.channel.send(`**${message.author.username}** fait apparaître sa chaîne !`,{
    file:"https://cdn.discordapp.com/attachments/448162387434930176/448162555165409281/38_elingue-chaine-d16-lg-2m50.jpg"
})
}
if(message.content.startsWith("rp!sword")){
    message.channel.send(`**${message.author.username}** fait apparaître son épée !`,{
    file:"https://cdn.discordapp.com/attachments/448128099247456256/448131072887357440/unknown.png"
})
}
if(message.content.startsWith("rp!dynamite")){
    message.channel.send(`**${message.author.username}** fait apparaître sa dynamite!`,{
    file:"https://cdn.discordapp.com/attachments/449255475389661204/449255515596259330/telechargement_2.jpeg"
})
}
}
)
