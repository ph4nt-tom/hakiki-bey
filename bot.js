const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag}sunucuya giriş yaptı!`);
  client.user.setActivity('Spotify', { type: 'LISTENING' }) //Dinlior
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('as');
  }
  if (msg.content.toLowerCase() === 'herkese benden çay') {
    msg.channel.sendMessage('çaylaarr');
  }
  if (msg.content.toLowerCase() === 'herkese kurabiye') {
    msg.channel.sendMessage(':cookie:');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.channel.sendMessage('iyidir koç');
  }
  if (msg.content.toLowerCase() === 'hayat nasıl') {
    msg.channel.sendMessage('olmadığı kadar kötü');
  }
  if (msg.content.toLowerCase() === 'selam') {
    msg.channel.sendMessage('aha hoşgeldin');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa gençler') {
    msg.channel.sendMessage('HOP MERABALAR AQ');
  }
  if (msg.content.toLowerCase() === 'aşk nedir') {
    msg.channel.sendMessage('acı');
  }
  if (msg.content.toLowerCase() === 'hayatın anlamı nedir') {
    msg.channel.sendMessage("Kendini ve insanları yormadan yaşamak")
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === '2+2') {
    msg.channel.sendMessage('4');
  }
  if (msg.content.toLowerCase() === 'saldır çaki') {
    msg.channel.sendMessage('Skrm belanı yvşk');
  }
  if (msg.content.toLowerCase() === "savun hakiki") {
    msg.channel.sendMessage("Adam haklı beyler dağılın.")
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi geceler') {
    msg.channel.sendMessage('iyi geceler seviliyorsun unutma');
  }
  if (msg.content.toLowerCase() === '...') {
    msg.channel.sendMessage('BOŞ YAPMA');
  }
  if (msg.content.toLowerCase() === 'nasıl rolüm yükselir') {
    msg.channel.sendMessage("sadece zaman yeterli")
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi bayramlar') {
    msg.channel.sendMessage('KOBRA NECDET iyi bayramlar diler');
  }
  if (msg.content.toLowerCase() === "iyi oyunlar") {
    msg.channel.sendMessage('DUREX GENÇLİK KOLLARI iyi oyunlar diler');
  }
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.channel.sendMessage("gülümseyen bıyıklarımın tatlı nedeni günaydın")
  }
});
client.login('NjA4MzY4MjQ0NjEyNjYxMjU4.XUnLmQ.xrW6mZOM_lNDz9uWj6amVbofZTc');
