const assert = require("chai").assert
const helpModule = require("../../src/modules/generic.modules").help


describe("generic.modules", () => {
    describe("help()", () => {
        it("Prueba de lector de archivo template", () => {
            assert.equal(typeof helpModule(), "string")
        })
    })
})
