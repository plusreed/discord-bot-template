import { ActivitiesOptions, ActivityType, Client, PresenceStatusData } from 'discord.js'

const STATUS: PresenceStatusData = 'online'
const ACTIVITY: ActivitiesOptions = {
    type: ActivityType.Watching,
    name: 'the server'
}

function setPresence (client: Client) {
    console.log(`Setting bot presence. Status = ${STATUS}, Activity = ${JSON.stringify(ACTIVITY)}`)
    client.user?.setPresence({
        status: STATUS,
        activities: [
            ACTIVITY
        ]
    })
}

export default setPresence
