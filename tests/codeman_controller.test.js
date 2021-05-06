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

            codeman_controller.welcome(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith('codeman/welcome');
        })
    });

    describe('codeman_controller.create', () => {

        it('should call res.render', () => {
            codeman_controller.create(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith('codeman/create');
        })
    });
});
