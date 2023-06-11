const request = require('supertest');

describe("Has a homepage...", () => {
    
    it("...responds with status 200.", async() => {
        const response = await request(app).get('/');

        expect(response.statusCode).toEqual(200);
    })

    it("...it responds with a JSON object.", async() => {
        const response = await request(app).get('/');

        const responseBodyDataType = typeof(response.body);
        console.log(responseBodyDataType);

        expect(response.body).toEqual("object");
    });
});
