import { ContextMenuCommandBuilder, ApplicationCommandType } from 'discord.js'
import type { UserContextMenuCommandInteraction } from 'discord.js'

export class UserContextMenuCommand {
    data: ContextMenuCommandBuilder

    constructor (name: string) {
        this.data = new ContextMenuCommandBuilder()
            .setName(name)
            .setType(ApplicationCommandType.User)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    async execute (interaction: UserContextMenuCommandInteraction): Promise<any> {
        return
    }
}
