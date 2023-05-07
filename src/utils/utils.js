const fs = require("fs")
const path = require('path');

const utils = {}


utils.readFile = (filePath) => {
    const _path = path.join(__dirname, "..", "..", filePath)
    return fs.readFileSync(_path, "utf-8")
}

utils.readHelpTemplate = () => {
    const templatePath = "templates/messages.txt"
    return utils.readFile(templatePath)
}


module.exports = utils