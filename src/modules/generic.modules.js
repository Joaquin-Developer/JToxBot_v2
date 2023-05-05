/**
 * Logica de cada funcionalidad del bot
 */


const functions = {}

functions.importe = (text) => {
    console.log("Lista:")
    console.log(text)

    let resp = "Hola! Esta es la lista de productos que ingresaste:\n"
    let importeValue = 0

    for (let data of text) {
        let price = parseFloat(data.split("-")[0])
        let name = data.split("-")[1]
        resp += `- ${name} -> ${parseFloat(price)}\n`
        importeValue += price
    }

    resp += `-------------------------------------------------------------\n`
    resp += `Importe Total: $ ${importeValue}`

    return resp

}



module.exports = functions