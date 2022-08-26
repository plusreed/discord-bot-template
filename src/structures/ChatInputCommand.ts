import { SlashCommandBuilder } from 'discord.js'
import type { ChatInputCommandInteraction } from 'discord.js'

export class ChatInputCommand {
    data: SlashCommandBuilder

    constructor (name: string, description: string) {
        this.data = new SlashCommandBuilder()
            .setName(name)
            .setDescription(description)
    }


    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    async execute (interaction: ChatInputCommandInteraction): Promise<any> {
        return
    }
}
