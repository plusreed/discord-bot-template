import type { MessageContextMenuCommandInteraction } from 'discord.js'
import { MessageContextMenuCommand } from '../structures/MessageContextMenuCommand'

class MessageExampleContextMenu extends MessageContextMenuCommand {
    constructor () {
        super('Example Message Context Menu')
    }

    async execute (interaction: MessageContextMenuCommandInteraction) {
        await interaction.reply({ content: interaction.targetMessage?.id })
    }
}

export default new MessageExampleContextMenu()
