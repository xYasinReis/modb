const { Command } = require('discord.js-commando');
const moment = require('moment');
const { stripIndents } = require('common-tags');

module.exports = class ServerInfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'sunucu',
			aliases: ['sunucubilgi', 'sunucu-bilgi'],
			group: 'sunucu',
			memberName: 'sunucu',
			description: 'Mesajın kullanıldığı sunucu hakkında bilgi verir.',
			details: `Mesajın kullanıldığı sunucu hakkında bilgi verir.`,
			guildOnly: true,
			throttling: {
				usages: 2,
				duration: 3
			}
		});
	}

	run(msg) {
		return msg.embed({
			color: 3447003,
			description: `**${msg.guild.name}** Sunucusu bilgileri (ID: ${msg.guild.id})`,
			fields: [
				{
					name: '❯ Kanallar',
					/* eslint-disable max-len */
					value: stripIndents`
						• ${msg.guild.channels.filter(ch => ch.type === 'text').size} Metin Kanalı, ${msg.guild.channels.filter(ch => ch.type === 'voice').size} Ses Kanalı
						• Ana Kanal: ${msg.guild.defaultChannel}
						• AFK: ${msg.guild.afkChannelID ? `<#${msg.guild.afkChannelID}> after ${msg.guild.afkTimeout / 60}min` : 'Ayarlanmamış.'}
					`,
					/* eslint-enable max-len */
					inline: true
				},
				{
					name: '❯ Üyeler',
					value: stripIndents`
						• ${msg.guild.memberCount} üye
						• Sunucu Sahibi: <@${msg.guild.owner.user.id}>
						(ID: ${msg.guild.ownerID})
					`,
					inline: true
				},
				{
					name: '❯ Ekstra',
					value: stripIndents`
						• Roller: ${msg.guild.roles.size}
						• Bölge: ${msg.guild.region}
						• Oluşturulma Tarihi: ${moment.utc(msg.guild.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss ZZ')}
					`
				}
			],
			thumbnail: { url: msg.guild.iconURL }
		});
	}
};
