auth_controller = require("../controller/auth_controller");
const { Request } = require('jest-express/lib/request');
const { Response } = require('jest-express/lib/response');

describe("Test auth_controller", () => {

    let req;
    let res;

    beforeEach(() => {
        req = new Request();
        res = new Response();
    })

    afterEach(() => {
        req.resetMocked();
        res.resetMocked();
    })

    describe("Test authController.login", () => {

        it("should call res.render", () => {
            auth_controller.login(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith('auth/signin');
        });
    });

    describe("Test authController.register", () => {

        it("should call res.render to auth/signin if email already exists in database", () =>{
            req.query = {email: "test@test.com"};

            auth_controller.register(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith("auth/signin");
        });

        it("should call res.render to auth/register if email does not already exist in database", () => {
            req.query = {email: "fake@fake.com"};

            auth_controller.register(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith("auth/register", {"email": "fake@fake.com"});
        });
    });

    describe("Test authController.registerSubmit", () => {

        it("should add user to fake database", () => {
            req.body = {
                email: "bryan@test.com",
                name: "bryan",
                password: "password"
            };

            auth_controller.registerSubmit(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith("auth/signin");
        })

        it("should not add user if email already exists", () => {
            req.body = {
                email: "test@test.com",
                name: "test",
                password: "test"
            };

            auth_controller.registerSubmit(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith("auth/register");
        })
    })
});