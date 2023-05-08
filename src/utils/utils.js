const fs = require("fs")
const path = require('path');
const axios = require("axios")
const { AxiosFetchError } = require("../exceptions/exceptions")

const utils = {}


utils.readFile = (filePath) => {
    const _path = path.join(__dirname, "..", "..", filePath)
    return fs.readFileSync(_path, "utf-8")
}

utils.readHelpTemplate = () => {
    const templatePath = "templates/messages.txt"
    return utils.readFile(templatePath)
}


utils.fetch = async (url) => {
    const response = await axios.get(url)

    try {
        return await response.data()
    } catch (error) {
        console.error(error)
        throw new AxiosFetchError(`Error al realizar fetch a API: ${error}`)
    }
}


module.exports = utils