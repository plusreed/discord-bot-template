import type { ChatInputCommandInteraction } from 'discord.js'
import { ChatInputCommand } from '../structures/ChatInputCommand'

class PingCommand extends ChatInputCommand {
    constructor () {
        super('ping', 'Test that the bot works.')
    }

    async execute (interaction: ChatInputCommandInteraction) {
        await interaction.reply({ content: 'Hello!' })
    }
}

export default new PingCommand()
