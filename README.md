# Messenger Spam Bot

A Facbook Messenger spam bot using Node.js with the Facebook Chat API

## Installation

Use the `git clone` command. To install needed packages use `npm install`.

```
git clone https://github.com/kubiGamer6000/messenger-spam-bot.git
cd messenger-spam-bot
npm install
```

## Usage

You need to have [Node.js](https://nodejs.org/en/) v10 or higher.

```bash
node app.js <fb_email> <fb_password> <msg_content> <recipient_userid> <timeout>
```  
## Arguments

Facebook email and password: `Your facebook account credentials are needed`

MSG content: `The content of the spam message`

Victim UserID: `The facebook user ID of the recipient` [How do I get it?](https://findmyfbid.in/)

Timeout: `Timeout between sending messages (in miliseconds)`
