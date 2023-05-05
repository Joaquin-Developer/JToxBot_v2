const config = require("../config")
const { Telegraf } = require('telegraf')
const botEvents = require("./controllers/BotEventsHandler")


const bot = new Telegraf(config.bot.TELEGRAM_TOKEN)


bot.command("importe", botEvents.importe)

console.log("Iniciando bot...")
bot.launch()