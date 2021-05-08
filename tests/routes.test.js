
const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);


let token;
const user = "testuser";
const pw = "testpassword";

beforeAll((done) => {
    request
        .post('/login')
        .send({
            username: user,
            password: pw,
        })
        .end((err, response) => {
            token = response.body.token; // save the token
            done();
        });
});


describe('Test each GET route', () => {

    // First test - invalid route
    it("Test GET invalid route - should find nothing", async () => {
        const res = await request.get("/thisroutedoesnotexist");
        expect(res.status).toBe(404);
    })

    // Second test - / route with no login
    it("Test GET / route - no user logged in - should work", async () => {
        const res = await request.get("/");
        expect(res.status).toBe(200);
    })

    // Third test - / route with login
    it("Test GET / route - logged in - should work", async () => {
        const res = await request.get("/").set('Authorization', `Bearer ${token}`)
        expect(res.status).toBe(200);
    })

    // Fourth test - /codeman route with no login
    it("Test GET /codeman route - no user logged in - should redirect", async () => {
        const res = await request.get("/codeman");
        expect(res.status).toBe(300);
    })

    // Fifth test - /codeman route with login
    it("Test GET /codeman route - loggin in - should work", async () => {
        const res = await request.get("/codeman").set("Authorization", `Bearer ${token}`)
        expect(res.status).toBe(200);
    })

    // Sixth test - /create route with no login
    it("Test GET /create route - no user logged in - should redirect", async () => {
        const res = await request.get("/create");
        expect(res.status).toBe(300);
    })

    // Seventh test - /create route with login
    it("Test GET /create route - logged in - should work", async () => {
        const res = await request.get("/create").set("Authorization", `Bearer ${token}`)
        expect(res.status).toBe(200);
    })

    // Eighth test - /signin route with no login
    it("Test GET /signin route - no user logged in - should work", async () => {
        const res = await request.get("/signin");
        expect(res.status).toBe(200);
    })

    // Ninth test - /signin route with login
    it("Test GET /signin route - logged in - should redirect", async () => {
        const res = await request.get("/signin").set("Authentication", `Bearer ${token}`)
        expect(res.status).toBe(300);
    })
})
