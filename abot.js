// abot.js

require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();
const { prefix } = require('./config.json');
const token = process.env.TOKEN;

var counter = 0;
const abotvar = "Hi !\ni'm ABot, i hope you'll apreciate me ! 😄";
const help = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('ABot Main Functions')
  .setAuthor('ABot', 'https://ibb.co/YdQsKCN','https://abot-js.glitch.me')
  .setThumbnail('https://ibb.co/YdQsKCN')
  .setDescription('ABot is simple bot for simple people 😄')
  .addFields(
    { name: '\u200b', value: '\u200b'},
    { name: 'GET HELP', value: '`:?`'},
    { name: 'CLEAR \'X\' MESSAGES', value: '`:clear x`'},
    { name: 'GET COUNTER OF SENDED MESSAGES', value: '`:msg?`'},
    { name: '\u200b', value: '\u200b'},
  )
  .setTimestamp()
  .setFooter('ABot Productions ©2021', 'https://ibb.co/YdQsKCN');

client.login(token);

client.on('ready', callback);
client.on('message', message);


function callback()
{
  console.log('Successfully Launched !');
}

function message(msg)
{
  counter += 1;
  const member = msg.mentions.members.first();
  for(let i=0;i<counter;i++)
     if(msg.content.includes(`${prefix}`) && msg.content.includes(i) && i < counter)
       msg.channel.bulkDelete(i+1);
     else if(msg.content.includes(`${prefix}`) && msg.content.includes(i) && i > counter)
       msg.delete();

  switch (msg.content)
  {
    case `${prefix}msg?`:
      msg.channel.send('```' + counter + '```');
      counter-=1;
      break;

    case `${prefix}?`:
      msg.channel.send(help);
      counter-=1;
      break;

    case ':abot':
      msg.channel.send('```' + abotvar + '```');
      counter -=1;
      break;

    default:
      break;
  }
}
