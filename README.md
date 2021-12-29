### 📻 Simple Radio Bot 📻
<div align="center">
  <br/>
  <p>
    <a href="https://discord.gg/JPbv9gHDmp"><img src="https://i.imgur.com/aHtZnti.jpg" alt="Radio Logo" /></a>
  </p>
  <br/>
  <p>
    <a href="https://github.com/Elioking1/Simple-Radio-Bot"><img src="https://badgen.net/github/commits/Elioking1/Simple-Radio-Bot"/></a>
    <a href="https://github.com/Elioking1/Simple-Radio-Bot"><img src="https://badgen.net/github/watchers/Elioking1/Simple-Radio-Bot"></a>
  </p>
</div>

This bot is a simple radio bot made with [Discord JS](https://discord.js.org/) that plays a radio station in a voice channel all the time.

## 📥 Installation
Let's start by clone the github repo:
```py
git clone https://github.com/Elioking1/Simple-Radio-Bot.git
```

Now let's install the necessary npm modules:
```js
npm install
```

> ⚠️ **Before starting the bot**: Be sure to download [ffmpeg](https://fr.wikihow.com/installer-FFmpeg-sur-Windows)

## ⚙️ Configuration
Let's go to the `setup.json` file and change the different settings:

```json
{
    "token": "",
    "voiceChannelID": "",
    "radioStationLink": "",
    "displayIfError": true,
    "addCredits": true,
    "activity": "",
    "autoReboot": true
}
```

* **token**: This is the token of the discord bot (go check in [Discord Developers](https://discord.com/developers/applications)).
* **voiceChannelID**: This a the voice channel that the bot will join when he is ready. You need to put the ID of the voice channel and check if the bot has the see, connect and speak permission in this channel. If he hasn't the required permission and **displayIfError** is enabled, it will displays an error in the console.
* **radioStationLink**: This is the link of the radio station that the bot will play all the time. If the bot isn't playing the link, check that is valid. The link should be the same format as this example: http://icecast.skyrock.net/s/natio_mp3_128k
* **displayIfError**: If this parameter is enabled, any error in the bot (connection, permissions, etc..) will be displayed in the console.
* **addCredits**: If this parameter is enabled, it will add credits in the activity and the console to support me ❤️. I hope you will enable this parameter ❤️.
* **activity**: This is what the bot will display in his status as activity.
* **autoReboot**: If you host the bot with glitch or using pm2, enable this parameter so that the bot will stay all the time connected in the voice channel without having bugs.

*Here is an example of setup:*

```json
{
    "token": "...",
    "voiceChannelID": "695855928196464664",
    "radioStationLink": "http://icecast.skyrock.net/s/natio_mp3_128k",
    "displayIfError": true,
    "addCredits": true,
    "activity": "Playing Skyrock 🎵",
    "autoReboot": true
}
```

## 💚 Starting the bot

With nodejs:
```js
node index.js
```
With pm2
```js
pm2 start index.js --name "Radio Bot"
```