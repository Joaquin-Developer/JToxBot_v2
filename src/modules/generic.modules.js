/**
 * Logica de cada funcionalidad del bot
 */

const dbController = require("./db")
const utils = require("../utils/utils")


class MongoDBInsertError extends Error { }


const functions = {}


functions.importe = (text) => {
    console.log("Lista:", text)

    let resp = "Hola! Esta es la lista de productos que ingresaste:\n"
    let importeValue = 0

    for (let data of text) {
        let price = parseFloat(data.split("-")[0])
        if (isNaN(price)) {
            return global.ERR_MESSAGES.CONSTANT_ERR_COMMAND
        }

        let name = data.split("-")[1]
        resp += `- ${name} -> ${parseFloat(price)}\n`
        importeValue += price
    }

    resp += `-------------------------------------------------------------\n`
    resp += `Importe Total: $ ${importeValue}`

    return resp

}

// Mejorar esto: ver de crear un .cfg para estos datos de texto plano con formato
// y no enchastrar el modulo de fuciones
functions.help = () => {
    return `
¡Hola! Soy Tox, y estoy para servirte.

Como esta es mi versión 2.0, y mi creador tiene poco tiempo libre, solo tengo una funcion (por ahora).
/importe -> con este comando, me puedes pasar una lista de compras con su precio, y te calculo el importe total.
Ejemplo de úso:

/importe
25 - Alfajor
12.4 - Manzana
500 - Carne

Es importante que dejes un salto de línea entre el comando y los valores, y que separes el precio del nombre con un -

Tox.
    `
    // return utils.readHelpTemplate()
}


functions.savePossibleShopListForSuper = async (productsList, userId) => {
    try {
        const insertedResult = await dbController.insertOne({
            "ID_USUARIO": userId,
            "REGISTRO_ACTIVO": true,
            "LISTA_COMPRAS": productsList,
            "DATE_COMPRA": new Date()
        })
        console.log(`Documento insertado con éxito. ID: ${insertedResult}`)

    } catch (error) {
        console.log(`Error al insertar el documento: ${err}`)
        throw MongoDBInsertError("Error al insertar")
    }
}


functions.getLastListaCompras = async (userId) => {
    const result = await dbController.getLastListaCompras(userId)
    return result
}


module.exports = functions