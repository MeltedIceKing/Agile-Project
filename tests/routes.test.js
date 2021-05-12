
const app = require('../index');
const request = require('supertest');
const server = request.agent(app);


const loginUser = () => {
    return function(done) {
        server.post("/signin")
        .send({ email: "test@test.com", password: "test"})
        .expect(302)
        .expect("Location", "/welcome")
        .then(() => done());
    }
}

describe("Test each GET route with no user logged in", function() {

    it("Test GET invalid route - should find nothing", function(done) {
        server.get("/thisroutedoesnotexist")
            .then((res) => {
                expect(res.statusCode).toBe(404);
            }).then(() => done())
    })

    it("Test / route - should work", function(done) {
        server.get("/")
            .then((res) => {
                expect(res.statusCode).toBe(200);
            }).then(() => done())
    })

    it("Test /create route - should redirect", function(done) {
        server.get("/create")
            .then((res) => {
                expect(res.statusCode).toBe(302);
            }).then(() => done())
    })

    it("Test /signin route - should work", function(done) {
        server.get("/signin")
            .then((res) => {
                expect(res.statusCode).toBe(200);
            }).then(() => done())
    })

    it("Test /logout route - should redirect", function(done) {
        server.get("/logout")
            .then((res) => {
                expect(res.statusCode).toBe(302);
            }).then(() => done())
    })
})

describe("Test each GET route with a user logged in", function() {

    it("Test that a user can log in", loginUser());

    it("Test GET invalid route - should find nothing", function(done) {
        server.get("/thisroutedoesnotexist")
            .then((res) => {
                expect(res.statusCode).toBe(404);
            }).then(() => done())
    })

    it("Test / route - should work", function(done) {
        server.get("/")
            .then((res) => {
                expect(res.statusCode).toBe(200);
            }).then(() => done())
    })

    it("Test /create route - should work", function(done) {
        server.get("/create")
            .then((res) => {
                expect(res.statusCode).toBe(200);
            }).then(() => done())
    })

    it("Test /signin route - should redirect", function(done) {
        server.get("/signin")
            .then((res) => {
                expect(res.statusCode).toBe(302);
            }).then(() => done())
    })

    it("Test /logout route - should redirect", function(done) {
        server.get("/logout")
            .then((res) => {
                expect(res.statusCode).toBe(302);
            }).then(() => done())
    })
})