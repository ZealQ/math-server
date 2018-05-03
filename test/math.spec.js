const server = require("../index.js");
const {mathify} = require("./helpers/mathHelper");

describe("Can Do Maths", () => {
    test("10 x 5 / 2", async () => {
       expect(await mathify(10, 5, 2)).toEqual(10 * 5 / 2);
    });
});

afterAll(async () => {
    await server.close()
});