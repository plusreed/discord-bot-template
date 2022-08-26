import type { Client, MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction } from 'discord.js'

async function userContextMenuHandler (client: Client, interaction: UserContextMenuCommandInteraction) {
    const context = client.userContexts.get(interaction.commandName)
    if (context) {
        try {
            await context.execute(interaction)
        } catch (error) {
            if (error instanceof Error) {
                console.error(error)

                if (interaction.deferred) {
                    await interaction.editReply({ content: 'An error occurred while executing the command.' })
                } else {
                    await interaction.reply({ content: 'An error occurred while executing the command.', ephemeral: true })
                }
            }
        }
    }
}

async function messageContextMenuHandler (client: Client, interaction: MessageContextMenuCommandInteraction) {
    const context = client.messageContexts.get(interaction.commandName)
    if (context) {
        try {
            await context.execute(interaction)
        } catch (error) {
            if (error instanceof Error) {
                console.error(error)

                if (interaction.deferred) {
                    await interaction.editReply({ content: 'An error occurred while executing the command.' })
                } else {
                    await interaction.reply({ content: 'An error occurred while executing the command.', ephemeral: true })
                }
            }
        }
    }
}

export { userContextMenuHandler, messageContextMenuHandler }
