
const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);


describe('Test each GET route with no user logged in', () => {

    // First test - invalid route
    it("Test GET invalid route", async () => {

        const res = await request.get("/thisroutedoesnotexist");

        expect(res.status).toBe(404);
    })

    // Second test - / route
    it("Test GET / route", async () => {

        const res = await request.get("/");

        expect(res.status).toBe(200);
    })

    // Third test - /codeman route
    it("Test GET /codeman route", async () => {

        const res = await request.get("/codeman");

        expect(res.status).toBe(200);
    })

    // Fourth test - /create route
    it("Test GET /create route", async () => {

        const res = await request.get("/create");

        expect(res.status).toBe(200);
    })

    // Fifth test - /signin route
    it("Test GET /signin route", async () => {

        const res = await request.get("/signin");

        expect(res.status).toBe(200);
    })
})
