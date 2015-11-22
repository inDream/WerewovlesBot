var TelegramBot = require('node-telegram-bot-api');
var config = require(__dirname + '/config');

var token = config.TELEGRAM_TOKEN;
var bot = new TelegramBot(token, {
  webHook: {
    port: config.port,
    key: __dirname + '/key.pem',
    cert: __dirname + '/crt.pem'
  }
});
