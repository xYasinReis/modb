const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class channelinfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'yardım',
      aliases: ['h', 'y'],
			group: 'bot',
			memberName: 'yardım',
			description: 'Botun Tüm Komutlarını Gösterir.',
			guildOnly: true,
		});
	}
	
	async run(msg) {
    
        const embed = new RichEmbed()
        .setColor('RANDOM')
        .setAuthor(msg.guild.name, msg.guild.iconURL)	
        .addField(`_» Moderasyon Komutları «_`, `
    .**kick** = İstediğiniz kişiyi sunucudan atar.
.**ban** = İstediğiniz kişiyi sunucuda yasaklar.
.**uyar** = İstediğiniz kişiyi uyarır.
.**sustur** = İstediğiniz kişiyi susturur.
.**temizle** = İstediğiniz kadar mesajı siler.
.**modlog** = Etiketlediğiniz kanalı modlog kanalı olarak belirler.
.**anonskanal** = Etiketlediğiniz kanalı anons kanalı olarak belirler.
.**anons** = Yazdığınız mesajı bot sahibine gönderir.
.**ayarlar** = Sunucu ayarlarını gösterir.`,) 
        .addField(`_» Kullanıcı Komutları «_`, `
    .**avatar** = İstediğiniz kişinin avatarını gösterir.
.**yaz** = Bota istediğiniz şeyi yazdırır.`,)
        .addField(`_» Bot Komutları «_`, `
.**bilgi** = Botun bilgilerini gösterir.
.**tavsiye** = Yazdığınız mesajı yapımcıma iletir.`)
        .addField(`_» Sunucu Komutları «_`, `
.**sunucu-ikon** = Mesajın yazıldığı sunucunun ikonunu gösterir.`)
        .addField(`_» Başvuru Komutları«_`, `
.**başvuruyap** = Başvuru yapmanızı sağlar.
.**başvurukanal** = Başvuruların gideceği kanalı belirlemenizi sağlar. `) 
		return msg.embed(embed)

	}
}