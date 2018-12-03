const Discord = require('discord.js');
 const bot = new Discord.Client();
 
 var prefix = ("rp!")
 var randnum = 0;
 var battle_ennemy = false;
 
 bot.on('ready', function() {
     bot.user.setUsername("RpBot")
     bot.user.setPresence({ game: { name: 'Aider le RP de Yuki'}, status: 'dnd'}) //en ligne;
     console.log("Connected")
 });
 
 bot.login(process.env.TOKEN);
 
 bot.on("guildMemberAdd", member => {
    
member.guild.channels.find("name", "entrer-hrp").send(`${member}, je te souhaite la bienvenue ! Je t'offre le pouvoir du rp (et pour l'utiliser... ah ! Tu connais pas ! Fait donc "rp!help" :3`)
    })
    bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "entrer").send(`${member} n'a plus le pouvoir du RP`)
    })
    
 

 bot.on('message', message => {
     if(message.content === "rp!help"){
 
         const embed = new Discord.RichEmbed()
         .setTitle("commandes Disponible")
         .setColor(0xD4FE00)
         .setDescription("")
         . setFooter ( "Si vous avez un problème ... index.js ne répond pas" )
         . addField ( "liste",
           "```help1.exe    _ ☐ X\nfaire apparaître des armes :\nrp!katana pour faire apparaître un katana (la logique)\nrp!hache pour faire apparaître attention suspens... une hache (bon ok j'arrète)\nrp!arc pour faire apparaître une canne a pêche... et non c'est pour un arc XD\nrp!faux pour faire apparaître une Faux et pas de Norman, merci :3\nrp!sceptre pour faire apparaître un sceptre de mage :3\nrp!couteau pour faire apparaître un couteau (poignard)\nrp!pistolet pour faire apparaître 2 Pistolet !\nrp!chaîne pour faire apparaître une chaîne en métal magique incassable\nrp!sword pour faire apparaître une épée divine ! (Aucune religion n'est visé)\nrp!dynamite pour faire apparaître des explosifs hyper puissants :3\nrp!baton pour faire apparaitre  un baton en bois... et oui un baton peux faire très mal !```" )
         . addField ( "Transition",
         "```help2.exe    _ ☐ X\nAutres commandes :\nrp!call pour que je puisse appeller mon maitre ! (commande a utiliser avec précaution)\nrp!news pour avoir les news du bot (en gros moi :3)```")
         . addField ( "transition",
         "```help3.exe    _ ☐ X\nCommandes 100% Rp\nrp!sleep pour dire a tout le monde que tu dort\nrp!eat pour dire que tu te régale !\nrp!debout pour dire que on se réveil (avec un peu de flemme)```")
         . addField ( "transition",
         "```help4.exe.   _ ☐ X\nChangement d'identité :\nrp!dark\nrp!thedeath\nrp!fury\nrp!shinji```")
         
         message.channel.send({embed});
     }
     if(message.content === "rp!news" ){ 
 
     const embed = new Discord.RichEmbed()
     .setTitle("Dernières News répertoriés :")
      .setColor(0xD4FE00)
      .setDescription("Liste")
      .setFooter("si vous avez un problème... index.js ne répond pas")
           .addField("```...```",
                     "```j'améliore... mais j'ai pas trop d'idée X)```")
  
      message.channel.send({embed});
 }
 if(message.content.startsWith("rp!warn")) {

    if(message.mentions.users.first()){

    let messageToSend = message.content.split(" ").slice(2).join(" ");
    let userToSend = message.mentions.users.first();

    userToSend.send(`Tu as reçu un avertissement de ${message.author.username}!\nraison : ${messageToSend}`);
    message.delete();
    message.channel.send(`un Warn de ${message.author.username} à été envoyé à ${message.mentions.users.first().username}`)
}else{
message.delete();
message.channel.send(`Une erreur sauvage apparaît`)

}
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
if(message.content.startsWith("rp!baton")){
    message.channel.send(`**${message.author.username}** fait apparaître son bâton !`,{
    file:"https://cdn.discordapp.com/attachments/446324148730331176/451061465764593674/1527345634780.png"
})
}
  if(message.content.startsWith("rp!sleep")){
    message.channel.send(`**${message.author.username}** fait un petit somme !`,{
    file:"http://mangasetplus.m.a.pic.centerblog.net/16dca05f.jpg"
})
}
   if(message.content.startsWith("rp!eat")){
    message.channel.send(`**${message.author.username}** Mange !`,{
    file:"https://data.photofunky.net/output/image/6/8/0/3/680323/photofunky.gif"
})
}
if(message.content === "rp!fury"){
    message.channel.send("Execution", {
    file: "https://cdn.discordapp.com/attachments/452458948700667905/452819436714328065/accelerator.gif"
}) 
}
if(message.content === "rp!thedeath"){
    message.channel.send("Execution", {
    file: "https://cdn.discordapp.com/attachments/452458948700667905/452816083653754880/mort.jpg"
}) 
}
if(message.content === "rp!shinji"){
    message.channel.send("Execution", {
    file: "https://cdn.discordapp.com/attachments/443770152777941012/452860496203218944/Ame_Fire_Rogue.jpg"
}) 
}
if(message.content === "rp!dark"){ 
    message.channel.send("Execution", {
    file: "https://cdn.discordapp.com/attachments/448162387434930176/452872167713931271/transfo.gif"
}) 
}
if(message.content.startsWith("rp!debout")){
    message.channel.send(`**${message.author.username}** Se réveil !`,{
    file:"https://data.photofunky.net/output/image/a/e/e/1/aee1cc/photofunky.gif"
})
} 
if (message.content === "<@447465854742036491>"){
    var embed = new Discord.RichEmbed()
    .setDescription("Informations sur Le Serveur Discord ^^")
    .addField("Nom du Serveur Discord :", message.guild.name)
    .addField("Date de création du serveur Discord :", message.guild.createdAt)
    .addField("Nombres de personnes sur le Discord :", message.guild.memberCount)
    .setColor(0xD4FE00)
    .setFooter("si vous avez un problème... index.js ne répond pas")
    message.channel.sendEmbed(embed)
    }
    if (message.content.startsWith("rp!sondage")){
        let args = message.content.split(" ").slice(1)
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
        .setDescription(`Sondage Par **${message.author.username}**`)
        .addField(thingToEcho, "Vous pouvez répondre par les réactions (disponible en dessous de ce message)")
        .setColor(0xD4FE00)
        .setFooter("si vous avez un problème... index.js ne répond pas")
        message.channel.send(embed)
        .then(function (message) {
    message.react("❌")
    message.react("✔")    
        }).catch(function() {
        });
    }
if (message.content.startsWith("rp!annonce")){
    if("418453389576503297 323807479651631104 234368202379886593".includes(message.author.id)){
    let args = message.content.split(" ").slice(1)
    let thingToEcho = args.join(" ")
    var embed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** Demande votre attention !`)
    .addField("[Important, Annonce]", thingToEcho)
    .setColor(0xD4FE00)
    .setFooter("si vous avez un problème... index.js ne répond pas")
    message.channel.send(embed)
    .then(function (message) {
        message.react("✔") 
    })
}else{
    return message.reply("Une Erreur à été détécté !")
}}
if (message.content.startsWith("rp!say")){
    if("234368202379886593 323807479651631104".includes(message.author.id)){
    let args = message.content.split(" ").slice(1)
    let thingToEcho = args.join(" ")
    message.delete();
    message.channel.send(`${thingToEcho}`)  
}
}
}
)
function random(min, max) {
    min = Math.ceil(0)
    max = Math.floor(3)
    test = Math.floor(Math.random() * (max - min +1) + min);
 }
