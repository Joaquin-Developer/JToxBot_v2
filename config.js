module.exports = {
    inProduction: true,
    api: {},
    bot: {
        // Only in development
        TELEGRAM_TOKEN: "",
        DB_NAME: "database",
        DB_USER: "root",
        DB_PASSWORD: "",
        DB_HOST: "localhost"
    },
    ERR_MESSAGES: {
        CONSTANT_ERR_COMMAND: "Modo incorrecto de úso.\nEscribe /help para mas información."
    }
}