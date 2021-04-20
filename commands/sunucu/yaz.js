const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class YazCommand extends Command{
    constructor(client){

        super(client, {

            name: 'yaz',
            group: 'sunucu',
            memberName: 'yaz',
            description: 'Bota yazı yazdırırsınız.',

            args: [
                {
                    key: 'yazilan',
                    prompt: 'Bota ne yazdırmak istersin?',
                    type: 'string'
                }
            ]
        })
    }

    run(msg, args) {
    const { yazilan } = args;
    const embed = new RichEmbed()
    .setColor('RANDOM')
    .setDescription(yazilan)
    .setFooter(`${msg.author.username} tarafından yazdırıldı.`, msg.author.avatarURL);
    msg.delete();
    return msg.embed(embed)

    }
}
