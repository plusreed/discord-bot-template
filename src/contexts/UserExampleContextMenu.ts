import type { UserContextMenuCommandInteraction } from 'discord.js'
import { UserContextMenuCommand } from '../structures/UserContextMenuCommand'

class UserExampleContextMenu extends UserContextMenuCommand {
    constructor () {
        super('Example User Context Menu')
    }

    async execute (interaction: UserContextMenuCommandInteraction) {
        await interaction.reply({ content: interaction.targetMember?.user.id ?? 'wat' })
    }
}

export default new UserExampleContextMenu()
