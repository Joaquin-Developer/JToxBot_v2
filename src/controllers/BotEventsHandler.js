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
        ctx.reply(functions.importe(text))
    }
}

module.exports = BotEventsHandler