import type { Client } from 'discord.js'
import fs from 'node:fs/promises'
import path from 'node:path'
import { MessageContextMenuCommand } from '../structures/MessageContextMenuCommand'
import { UserContextMenuCommand } from '../structures/UserContextMenuCommand'

async function loadAllContextMenus (client: Client) {
    const contextsPath = path.join(__dirname, '../contexts')
    const files = await fs.readdir(contextsPath)
    const contextFiles = files.filter(f =>
        f.endsWith('.js')
    )

    for (const menu of contextFiles) {
        const filePath = path.join(contextsPath, menu)
        console.log('Context menu:', filePath)

        try {
            const module = await import(filePath)
            const context: unknown = module.default

            if (context instanceof MessageContextMenuCommand) {
                // Register in messageContexts
                console.log('  Adding message-based context menu:', context.data.name)
                client.messageContexts.set(context.data.name, context)
            } else if (context instanceof UserContextMenuCommand) {
                // Register in messageContexts
                console.log('  Adding user-based context menu:', context.data.name)
                client.userContexts.set(context.data.name, context)
            } else {
                throw new TypeError('  Unknown context menu type in contexts directory.')
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(`  Error registering context menu ${menu}: ${error}`)
            }
        }
    }
}

export default loadAllContextMenus
