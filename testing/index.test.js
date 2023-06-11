const request = require('supertest');

const { app } = require('../src/server')

describe("Has a homepage...", () => {
    
    it("...responds with status 200.", async() => {
        const response = await request(app).get('/');

        expect(response.statusCode).toEqual(200);
    })

    it("...it responds with a JSON object.", async () => {
        const response = await request(app).get('/');

        const responseBodyDataType = typeof(response.body);
        console.log(responseBodyDataType);

        expect(response.body).toEqual("object");
    });
});

describe ("User...", () => {
    describe("...can sign up...", () => {
        it("...with a valid email address and password", async () => {
            const response = await request(app)
            .post('/users/signup')
            .send({
                email: "test@email.com",
                password: "blahblah"
            })

            expect(response.body).toEqual({message:"Sign up success!"})

            })
        })

    describe("...can NOT sign up...", () => {
        it("...with an invalid email address", async () => {
            const response = await request(app)
            .post('/users/signup')
            .send({
                email: "blahblah",
                password: "blahblah"
            })

            expect(response.body).toEqual({message:"Sign up failure!"});
            expect(response.statusCode).toEqual(400);

        })

        // it("...with an invalid password", async () => {
            
        // })

        // it("...with an invalid email address and invalid password", async () => {
            
        // })
    })
})