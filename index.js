const Discord = require('discord.js');
const client = new Discord.Client();
const setup = require("./setup.json")
if(setup.token && setup.token.length == 0 && setup.displayIfError) return new Error("[ERROR] The token in the setup.json file is empty! Please fill it.")
client.login(setup.token);
let activity = ""
if(setup.activity) {
    if(setup.activity.length > 20 && setup.displayIfError) return new Error("[ERROR] The activity is too long! Please go to the setup.json file and try with less characters.")
    activity = setup.activity
    if(setup.addCredits) activity += " | Github: Elioking1"
} else {
    if(setup.addCredits) activity = "Github: Elioking1"
}

client.on("ready", async () => {
    console.log("Radio Bot is now connected and ready for playing")
    if(activity.length && activity.length > 0) client.user.setActivity(activity)
    if(setup.voiceChannelID && setup.voiceChannelID.length == 0 && setup.displayIfError) return new Error("[ERROR] The voiceChannelID in the setup.json file is empty! Please fill it.")
    if(isNaN(setup.voiceChannelID) && setup.displayIfError) return new Error("[ERROR] The voiceChannelID must be a number!")
    if(!client.channels.cache.get(setup.voiceChannelID) && setup.displayIfError) return new Error("[ERROR] The voice channel cannot be found! Check that the bot is in the same discord server than the voice channel.")
    const connection = await client.channels.cache.get(setup.voiceChannelID).join()
    if(!connection) {
        if(setup.displayIfError) return new Error("[ERROR] The bot can't make a connection, try checking the permissions in the channel or if the channel's ID is valid.")
        else return
    }
    if(setup.radioStationLink && setup.radioStationLink.length == 0 && setup.displayIfError) return new Error("[ERROR] The radioStationLink in the setup.json file is empty! Please fill it.")
    connection.play(setup.radioStationLink)
    if(setup.autoReboot) setTimeout(() => process.exit(), 3600000)
})