const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


const developers = ["527925159546454026"]
const adminprefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**👌 تم **`)
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**👌تم **`)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**👌تم **`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/M3roof");
      message.channel.send(`**👌 تم  **`)
  }
  if (message.content.startsWith( 'av')) {
client.user.setAvatar(argresult);
 message.channel.sendMessage(`👌 `);
  }
  if (message.content.startsWith(adminprefix + '1')) {
       message.channel.send(`**الاسم : اشرف | من تونس | العمر : 16 | ❤💖🌹 **`)
  }
  if (message.content.startsWith(adminprefix + '2')) {
       message.channel.send(`**وعليكم السلام ورحمة الله تعال وبركاته  | ❤💖🌹 **`)
  }
  if (message.content.startsWith('مين حبيبتي')) {
       message.channel.send(`** آلاء حبيبتي | ❤💖🌹 **`)
  }
   if (message.content.startsWith('مين اختي')) {
       message.channel.send(`** منولة اكيد | ❤💖🌹 **`)
  }
   if (message.content.startsWith('111036hack')) {
       message.channel.send(`** made hacker proda .....5858585858.....++--**`)
  }
   if (message.content.startsWith('111036close')) {
       message.channel.send(`** made hacker closed ......++--**`)
  }
});

client.login(process.env.BOT_TOKEN);
