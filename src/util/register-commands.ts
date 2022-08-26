import { REST, RESTPostAPIApplicationCommandsJSONBody, Routes } from 'discord.js'
import path from 'node:path'
import fs from 'node:fs/promises'
import { MessageContextMenuCommand } from '../structures/MessageContextMenuCommand'
import { UserContextMenuCommand } from '../structures/UserContextMenuCommand'
import { ChatInputCommand } from 'structures/ChatInputCommand'

const commands: RESTPostAPIApplicationCommandsJSONBody[] = []
const commandsPath = path.join(__dirname, '../commands')
const contextsPath = path.join(__dirname, '../contexts')

async function loadCommands () {
    const fileList = await fs.readdir(commandsPath)
    const filteredCommands = fileList.filter(f => f.endsWith('.js'))

    for (const f of filteredCommands) {
        const module = await import(path.join(commandsPath, f))
        const command: ChatInputCommand = module.default
        commands.push(command.data.toJSON())
    }
}

async function loadContexts () {
    const fileList = await fs.readdir(contextsPath)
    const filteredContexts = fileList.filter(f => f.endsWith('.js'))

    for (const f of filteredContexts) {
        const module = await import(path.join(contextsPath, f))
        const command: UserContextMenuCommand | MessageContextMenuCommand = module.default
        commands.push(command.data.toJSON())
    }
}

export async function registerCommands (botToken: string, guildId: string, clientId: string) {
    await loadCommands()
    await loadContexts()

    const client = new REST({
        version: '10'
    }).setToken(botToken)

    try {
        const ok = await client.put(
            Routes.applicationGuildCommands(clientId, guildId),
            {
                body: commands
            }
        )

        if (ok) {
            console.log(`Commands registered to ${guildId} successfully.`)
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error registering commands:', error)
        }
    }
}
