module.exports = {
    inProduction: true,
    api: {},
    bot: {
        TELEGRAM_TOKEN: process.env["TELEGRAM_BOT_TOKEN"] || "PONER_TOKEN_ACA",
        DB_NAME: process.env["TELEGRAM_BOT_DB_NAME"] || "telegram_bot",
        DB_COLLECTION: process.env["TELEGRAM_BOT_DB_COLLECTION"] || "lista_candidatos_compra",
        DB_USER: "root",
        DB_PASSWORD: "",
        DB_HOST: process.env["TELEGRAM_BOT_DB_HOST"] || "localhost"
    },
    ERR_MESSAGES: {
        CONSTANT_ERR_COMMAND: "Modo incorrecto de úso.\nEscribe /help para mas información."
    }
}