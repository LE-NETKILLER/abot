const Discord = require('discord.js');
const client = new Discord.Client();
const {token} = require(process.env.TOKEN);
const {prefix} = require(process.env.PREFIX)
var counter = 0;
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

  switch (msg.content)
  {
    case `${prefix}clear`:
      msg.channel.bulkDelete(100);
      counter = 0;
      break;

    case `${prefix}msg?`:
      msg.channel.send(counter);
      counter-=1;
      break;

    default:
      break;
  }
}
