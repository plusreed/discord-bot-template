import { envAnyDefined } from './util/env'
import { init } from './bot'

if (!envAnyDefined('BOT_TOKEN', 'GUILD_ID', 'CLIENT_ID')) {
    console.log('Please set BOT_TOKEN, GUILD_ID and CLIENT_ID.')
    process.exit(1)
}

init()
