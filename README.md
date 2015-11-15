# WerewovlesBot
A Telegram Bot to play Werewovles. 
Built with [Node.js](http://nodejs.org), [Redis](http://redis.io/) and [PostgreSQL](http://www.postgresql.org/).

## Modules
- Game Lobby
- Game Room
  - Group announcement
  - Private message
- Auto action
- Game History
- Chat History

## Commands
- Group commands
  - `/start`
    - To start a new round and generate gameid 
  - `/guess [playername]`
    - To guess [playername] to be the killer
    - System will broadcast the result to group, if true, the round is ended.
- Private commands
  - `/playerlist [gameid]`
    - Display current alive player for specific game
  - `/choose [gameid] [n]`
    - To choose nth player to perform action
- Game Initiator (Admin) commands
  - `/timeout [gameid]`
    - Set action timeout (in seconds) for specific game
  - `/cardset [gameid] [n]`
    - Set predefined cardset for specific game
  - `/end [gameid]`
    - End the specfic game
  
## Game Default Config
- Action Timeout: 5 mins
- Card set: 2 Werewolves, 1 Seer / Fortune Teller, 1 Witch, 1 Cupid / Lovers, the rest Villagers

[![Analytics](https://ga-beacon.appspot.com/UA-63394763-2/WerewovlesBot/readme?pixel)](https://github.com/igrigorik/ga-beacon)
