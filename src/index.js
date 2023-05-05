const config = require("../config")
const { Telegraf } = require('telegraf')
const botEvents = require("./controllers/BotEventsHandler")

const bot = new Telegraf(config.bot.TELEGRAM_TOKEN)

bot.help(botEvents.help)
bot.command("importe", botEvents.importe)
bot.hears(/.*/, botEvents.hearsHandle)

console.log("Iniciando bot...")
bot.launch()
