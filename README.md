# LeagueBot To Discord

LeagueBot To Discord is a server which will act as a middleman for the LeagueBot Webhook to be able to recieve messages in Discord.

## Installation

1. Make sure to have [Node.js](https://nodejs.org/en/)
2. Clone or download the repository
3. For Windows Users open up either `PowerShell` or `Command Prompt`
4. Type `cd path_to_project` path_to_project is going to be the location of where you saved the project
5. From here run the following command: `npm install` this is going to install the necessairy packages.
6. After that quickly run `tsc` this will transpile the TypeScript code to JavaScript.

## Run

1. Open the `.env` file with a text editor

2. Configure the `.env` file

```dotenv
WEBHOOK_URL=YOUR_URL_HERE
PORT=3000
```

3. The `WEBHOOK_URL` is going to be your webhook url which you get from Discord so let's quickly do that.

4. If you do not know how to create a webhook Discord has a guide to that [here](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) you only need the steps up untill copying the webhook url

5. After you've set the webhook url in the `.env` file the steps we've got left is to add the server to your LeagueBot panel so head over to Bot Panel > Config and under WebHook Events add http://yourip:3000/webhook (You can find your ip through a Google search) if you DID NOT change the PORT in the `.env` file if you did put whatever number you changed it to after the colon

6. Finally you can go ahead and start the server using `npm run start` in your terminal, this is going to start the server and it can now handle requests.

7. NOTE: If you're hosting this locally you're going to have to open up the port on your router to allow it to recieve requests. I can not cover this here since every router is different. You can look up port forwarding for your router if you know what you're doing.

## Features Or Contributing

This repository is open for requesting features, if you wish to request a feature you can do so by opening an issue and marking it with REQUEST in the title, if you wan't to contribute feel free to open a Pull Request.
