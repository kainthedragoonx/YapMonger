module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send(`Hey ${message.author}, RTFM, dipshit!`);
	},
};