const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548911181046349827")
setInterval(function() {
channel.send(`xD`);
}, 9999999999999)
})

client.login(process.env.BOT_TOKEN);
