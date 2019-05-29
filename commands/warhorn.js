module.exports = {
	name: 'warhorn',
	description: 'Warhorn!',
	execute(message, args) {
		message.channel.send(`Hey ${message.author}, Blorg!`);
	},
};