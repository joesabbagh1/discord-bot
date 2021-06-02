console.log('bogg');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('ODE4ODQ3MDk1NTQ5MDY3MzA1.YEeAyQ.-9Wh2y65od79ivuZAlnt4yhWEvY')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', gotMessage);

function gotMessage(msg){
    console.log(msg.content);
    if (msg.content.startsWith('im')||msg.content.startsWith('Im')||msg.content.startsWith("I'm")) {
        const user = msg.author;
        msg.channel.send(`Hi <@${user.id}>, I'm bogg`);
    }
}