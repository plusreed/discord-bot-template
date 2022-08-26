import type { Collection } from 'discord.js'
import type { ChatInputCommand } from '../structures/ChatInputCommand'
import type { MessageContextMenuCommand } from '../structures/MessageContextMenuCommand'
import type { UserContextMenuCommand } from '../structures/UserContextMenuCommand'

declare module 'discord.js' {
    interface Client {
        commands: Collection<string, ChatInputCommand>,
        messageContexts: Collection<string, MessageContextMenuCommand>,
        userContexts: Collection<string, UserContextMenuCommand>
    }
}
