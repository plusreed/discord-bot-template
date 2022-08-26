import { Client, Collection } from 'discord.js'
import setPresence from './util/set-presence'
import loadAllContextMenus from './util/load-context-menus'
import loadSlashCommands from './util/load-slash-commands'
import { registerCommands } from './util/register-commands'
import chatInputHandler from './handlers/chat-input'
import { messageContextMenuHandler, userContextMenuHandler } from './handlers/context-menu'

import type { ChatInputCommand } from './structures/ChatInputCommand'
import type { MessageContextMenuCommand } from './structures/MessageContextMenuCommand'
import type { UserContextMenuCommand } from './structures/UserContextMenuCommand'

const bot = new Client({
    intents: [
        'GuildMembers',
        'GuildMessages',
        'Guilds'
    ]
})

bot.commands = new Collection<string, ChatInputCommand>()
bot.messageContexts = new Collection<string, MessageContextMenuCommand>()
bot.userContexts = new Collection<string, UserContextMenuCommand>()

bot.once('ready', () => {
    console.log(`The bot is ready. (user ID: ${bot.user?.id}, guild count: ${bot.guilds.cache.size})`)
    setPresence(bot)
})

bot.on('interactionCreate', async interaction => {
    if (interaction.isChatInputCommand()) {
        await chatInputHandler(bot, interaction)
    } else if (interaction.isUserContextMenuCommand()) {
        await userContextMenuHandler(bot, interaction)
    } else if (interaction.isMessageContextMenuCommand()) {
        await messageContextMenuHandler(bot, interaction)
    }
})

export async function init () {
    const { BOT_TOKEN, GUILD_ID, CLIENT_ID } = process.env

    await loadSlashCommands(bot)
    await loadAllContextMenus(bot)
    await registerCommands(BOT_TOKEN, GUILD_ID, CLIENT_ID)

    await bot.login(BOT_TOKEN)
}

export default bot
