import { Client } from 'discord.js'
import fs from 'node:fs/promises'
import path from 'node:path'
import type { ChatInputCommand } from '../structures/ChatInputCommand'

async function loadSlashCommands (client: Client) {
    const commandPath = path.join(__dirname, '../commands')
    const files = await fs.readdir(commandPath)
    const commandFiles = files.filter(f =>
        f.endsWith('.js')
    )

    for (const f of commandFiles) {
        const fpath = path.join(commandPath, f)
        console.log('Command:', fpath)

        try {
            const module = await import(fpath)
            const command: ChatInputCommand = module.default
            console.log('  Adding command:', command.data.name)
            client.commands.set(command.data.name, command)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(`  Error registering command: ${error}`)
            }
        }
    }
}

export default loadSlashCommands
