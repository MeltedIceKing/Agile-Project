const { Request } = require('jest-express/lib/request');
const { Response } = require('jest-express/lib/response');
const codeman_controller = require('../controller/codeman_controller');

describe('Test codeman controller', () => {

    let req;
    let res;

    beforeEach(() => {
        req = new Request();
        res = new Response();
    });

    afterEach(() => {
        req.resetMocked();
        res.resetMocked();
    })

    describe('codeman_controller.welcome', () => {

        it('should call res.render', () => {
            req.user = {name: "test"};
            codeman_controller.welcome(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith('codeman/welcome', {"nameUser": "test"});
        })
    });

    describe('codeman_controller.create', () => {

        it('should call res.render', () => {
            codeman_controller.create(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith('codeman/create');
        })
    });

    describe('codeman_controller.created', () => {

        it("Test that when you save before entering any content you get redirected", () => {
            req.body = {}
            req.user = { projects: [] }
            codeman_controller.created(req, res);

            expect(res.redirect).toHaveBeenCalled();
            expect(res.redirect).toHaveBeenCalledWith('/create');
        })

        it("Test that you get redirected to /welcome when clicking save after entering content", () => {
            req.body = {
                "file-name": "test file"
            }
            req.user = { projects: [] }
            codeman_controller.created(req, res);

            expect(res.redirect).toHaveBeenCalled();
            expect(res.redirect).toHaveBeenCalledWith('/welcome');
        })
    });
});
