const fileSystem = require('fs');
const Discord = require('discord.js');
const {prefix} = require('./config.json');
const {token, fbToken} = require('./secrets.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();

const fbConnector = FB.init({
	appId      : fbToken,
	status     : true,
	xfbml      : true,
	version    : 'v2.7' // or v2.6, v2.5, v2.4, v2.3
  });

const commandFiles = fileSystem.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, fbConnector);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
	
});

client.login(token);
