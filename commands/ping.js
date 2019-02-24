module.exports = {
	name: 'ping', description: 'Ping!',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Hey ${message.author}, RTFM, dipshit!`);
		}
		message.channel.send('Fuck off!');
	},
};