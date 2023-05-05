/**
 * Modulo para controlar los eventos del bot
 * Estos eventos son comandos recibidos por el usuario
 */

const functions = require("../modules/generic.modules")


class BotEventsHandler {
    static importe(ctx) {
        const message = ctx.message.text
        console.log(`Mensaje recibido de ${ctx.message.from.first_name}`)

        let text = message.split("\n")
        // me quedo solo con el texto, quito el comando
        text.shift()

        if (!text.length) {
            ctx.reply(global.ERR_MESSAGES.CONSTANT_ERR_COMMAND)
            return
        }

        ctx.reply(functions.importe(text))
    }

    static help(ctx) {
        ctx.reply(functions.help())
    }

    static hearsHandle(ctx) {
        const username = ctx.message.from.first_name
        ctx.reply(`Holis ${username} :)\nPara saber como usarme escribí /help`)
    }
}

module.exports = BotEventsHandler