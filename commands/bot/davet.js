const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class channelinfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'davet',
			group: 'bot',
			memberName: 'davet',
			description: 'Botun Bilgilerini Gösterir.',
			guildOnly: true,
		});
	}
	
	async run(msg) {
    
        const embed = new RichEmbed()
        .setColor('RANDOM')
        .setAuthor(msg.guild.name, msg.guild.iconURL)	
	      .addField("**❯ Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=516163484388425729&scope=bot&permissions=2146958719)", )
        msg.delete();
    return msg.embed(embed)

	}
}