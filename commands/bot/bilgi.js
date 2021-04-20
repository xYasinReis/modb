const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class channelinfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'bilgi',
			group: 'bot',
			memberName: 'bilgi',
			description: 'Botun Bilgilerini Gösterir.',
			guildOnly: true,
		});
	}
	
	async run(msg) {
    
        const embed = new RichEmbed()
        .setColor('RANDOM')
        .setAuthor(msg.guild.name, msg.guild.iconURL)	
        .addField("**❯ Yapımcı**", "<@386145085601087489>", )
        .addField("**❯ Sürüm**", " v0.0.1 ", )
        .addField("**❯ Kütüphane ( Commando ) Sürüm**", " v0.10.0 ", )
        .addField("**❯ Yapım Tarihi**", " 10 Kasım 2018 ", )
	      .addField("**❯ Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=516163484388425729&scope=bot&permissions=2146958719)", )
        .addField("**❯ Destek sunucusu**", " [Sunucumuza Katıl](https://discord.gg/rU8xN9F) ", )
	      .setThumbnail("https://forum.gamer.com.tr/attachments/bilgi-png.55209/");
		return msg.embed(embed)

	}
}