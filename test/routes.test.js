const createJSON = require("../database.js")[2];
const app = require('../index');
const request = require('supertest');
const server = request.agent(app);
const fs = require("fs");

if (!fs.existsSync("data.json")) {
    createJSON();
}

jest.mock('fs', () => ({
    ...jest.requireActual('fs'),
    writeFileSync: jest.fn(),
    writeFile: jest.fn(),
}))


const loginUser = () => {
    return function(done) {
        server.post("/signin")
        .send({ "email": "test@test.com", "password": "test"})
        .expect(302)
        .expect("Location", "/welcome")
        .then(() => done());
    }
}

describe("Test each POST route with no user logged in", function() {

    it("Test POST /create/created - should redirect to /signin", function(done) {
        server.post('/create/created')
        .send({"file-name": "test_file"})
        .expect(302)
        .expect("Location", "/signin")
        .then(() => done());
    })

    it("Test POST /edit/page/1 - should redirect to /signin", function(done) {
        server.post("/edit/page/1")
        .send({"file-name": "test_file"})
        .expect(302)
        .expect("Location", "/signin")
        .then(() => done());
    })

    it("Test POST /register route - should work", function(done) {
        server.post("/register")
        .send({"email": "fake@fake.com", "password": "fake"})
        .expect(200)
        .then(() => done());
    })
});

describe("Test each GET route with no user logged in", function() {

    it("Test GET invalid route - should find nothing", function(done) {
        server.get("/thisroutedoesnotexist")
        .expect(404)
        .then(() => done())
    })

    it("Test GET / route - should work", function(done) {
        server.get("/")
        .expect(200)
        .then(() => done())
    })

    it("Test GET /create route - should redirect", function(done) {
        server.get("/create")
        .expect(302)
        .expect("Location", "/signin")
        .then(() => done())
    })

    it("Test GET /signin route - should work", function(done) {
        server.get("/signin")
        .expect(200)
        .then(() => done())
    })

    it("Test GET /register route - should work", function(done) {
        server.get("/register")
        .expect(200)
        .then(() => done())
    })

    it("Test GET /logout route - should redirect", function(done) {
        server.get("/logout")
        .expect(302)
        .expect("Location", "/")
        .then(() => done())
    })

    it("Test GET /view route - should redirect", function(done) {
        server.get("/view")
        .expect(302)
        .expect("Location", "/signin")
        .then(() => done())
    })

    it("Test GET /view/1 route - should redirect", function(done) {
        server.get("/view/1")
        .expect(302)
        .expect("Location", "/signin")
        .then(() => done())
    })

    it("Test GET /edit/1 route - should redirect", function(done) {
        server.get("/edit/1")
        .expect(302)
        .expect("Location", "/signin")
        .then(() => done())
    })
})

describe("Test each POST route with a user logged in", function() {
    it("Test that a user can log in", loginUser());

    it("Test POST /create/created - should redirect to /welcome", function(done) {
        server.post('/create/created')
        .send({"file-name": "test_file"})
        .expect(302)
        .expect("Location", "/welcome")
        .then(() => done());
    })

    it("Test POST /edit/page/1 - should redirect to /view/1", function(done) {
        server.post("/edit/page/1")
        .send({"file-name": "test_file"})
        .expect(302)
        .expect("Location", "/view/1")
        .then(() => done());
    })

    it("Test POST /register route - should redirect", function(done) {
        server.post("/register")
        .send({"email": "fake@fake.com", "password": "fake"})
        .expect(302)
        .expect("Location", "/welcome")
        .then(() => done());
    })
})

describe("Test each GET route with a user logged in", function() {

    it("Test that a user can log in", loginUser());

    it("Test GET invalid route - should find nothing", function(done) {
        server.get("/thisroutedoesnotexist")
        .expect(404)
        .then(() => done())
    })

    it("Test GET / route - should work", function(done) {
        server.get("/")
        .expect(200)
        .then(() => done())
    })

    it("Test GET /create route - should work", function(done) {
        server.get("/create")
        .expect(200)
        .then(() => done())
    })

    it("Test GET /signin route - should redirect", function(done) {
        server.get("/signin")
        .expect(302)
        .expect("Location", "/welcome")
        .then(() => done());
    })

    it("Test GET /register route - should redirect", function(done) {
        server.get("/register")
        .expect(302)
        .expect("Location", "/welcome")
        .then(() => done());
    })

    it("Test GET /view route - should work", function(done) {
        server.get("/view")
        .expect(200)
        .then(() => done())
    })

    it("Test GET /view/1 route - should work", function(done) {
        server.get("/view/1")
        .expect(200)
        .then(() => done())
    })

    it("Test GET /edit/1 route - should work", function(done) {
        server.get("/edit/1")
        .expect(200)
        .then(() => done())
    })

    it("Test GET /logout route - should redirect", function(done) {
        server.get("/logout")
        .expect(302)
        .expect("Location", "/")
        .then(() => done())
    })
})