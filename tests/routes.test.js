
const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);


describe('Verify each GET route', () => {

    // First test - /codeman route
    it("Test GET /codeman route", async () => {

        const res = await request.get("/codeman");

        expect(res.status).toBe(200);
    })

    // Second test - / route
    it("Test GET / route", async () => {

        const res = await request.get("/");

        expect(res.status).toBe(200);
    })
})