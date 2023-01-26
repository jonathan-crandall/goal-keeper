const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('this is a test command!'),
	async execute(interaction) {
		await interaction.reply('ITS WORKING!!');
	},
};
