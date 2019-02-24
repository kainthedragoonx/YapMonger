const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (message.author.username == 'prpht9') {
		return message.reply('01101000 01110101 01100111 01110011 00100000 01100001 01101110 01100100 00100000 01101011 01101001 01110011 01110011 01100101 01110011');
	}
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		if (!args.length) {
			return message.channel.send(`Hey ${message.author}, RTFM, dipshit!`);
		}
		message.channel.send('Fuck off!');
	}
	else if (command === 'server') {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nAlso Fuck Off`);
	}
});

client.login(token);
