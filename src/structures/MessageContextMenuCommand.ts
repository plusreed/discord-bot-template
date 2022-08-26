import { ContextMenuCommandBuilder, ApplicationCommandType } from 'discord.js'
import type { MessageContextMenuCommandInteraction } from 'discord.js'

export class MessageContextMenuCommand {
    data: ContextMenuCommandBuilder

    constructor (name: string) {
        this.data = new ContextMenuCommandBuilder()
            .setName(name)
            .setType(ApplicationCommandType.Message)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    async execute (interaction: MessageContextMenuCommandInteraction): Promise<any> {
        return
    }
}
