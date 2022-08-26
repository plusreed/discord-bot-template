import { ChatInputCommandInteraction, Client } from 'discord.js'

async function chatInputHandler (client: Client, interaction: ChatInputCommandInteraction) {
    const command = client.commands.get(interaction.commandName)
    if (command) {
        try {
            await command.execute(interaction)
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

export default chatInputHandler
