module.exports = {
	name: 'ping', 
	description: 'Ping!',
	execute(message, args,fbConnector) {
		message.channel.send(`Hey ${message.author}, RTFM, dipshit!`);
	},
};