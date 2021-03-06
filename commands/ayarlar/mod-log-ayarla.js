const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class ModChannelCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mod-log-ayarla',
            aliases: ['modlog'],
            group: 'ayarlar',
            memberName: 'mod-log-ayarla',
            description: 'Mod-log kanalı ayarlar.',
            guildOnly: true,
            throttling: {
                usages: 3,
                duration: 5
            },
            args: [
                {
                    key: 'channel',
                    prompt: 'Hangi kanal Mod-log olarak kullanılsın?',
                    type: 'channel'
                }
            ]
        });
    }

    hasPermission(msg) {
        if(!msg.guild) return this.client.isOwner(msg.author);
        return this.client.isOwner(msg.author) || msg.member.hasPermission('ADMINISTRATOR');
    }


    async run(msg, args) {
        const { channel }   = args;
        msg.guild.settings.set('modLog', channel.id);
        const embed = new RichEmbed()
        .setColor('RANDOM')
        .setDescription(`Mod Log Kanali <#${channel.id}> Olarak Belirlendi.`)
        .setFooter('Mod Log Ayarlandi.')
        return msg.embed(embed)
          }
};  