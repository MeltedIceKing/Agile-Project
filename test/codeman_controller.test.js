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

    describe("codeman_controller.view", () => {

        it("should call res.render", () => {
            req.user = { projects: []}
            codeman_controller.view(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith('codeman/view-projects', {projects: []});
        })
    });

    describe("codeman_controller.viewOne", () => {

        it("should call res.render", () => {
            req.user = { projects: [{
                id: 1
            }] }
            req.params = { id: 1 }
            codeman_controller.viewOne(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith("codeman/single-view", { projectItem: { id: 1}});
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

        it("Test content of req.user after clicking save with 1 of each (file, class, property, and method)", () => {
            req.body = {
                "file-name-0": ["test file 1", "test file desc 1"],
                "class-name-0": ["test class 1", "test class desc 1"],
                "property-name-0": ["test property 1", "private-property"],
                "method-name-0": ["test method 1", "str", "int, int", "test def"]
            }
            req.user = { projects: [] }
            codeman_controller.created(req, res);

            expect(req.user.projects).toHaveLength(1);

            projectObj = req.user.projects[0]

            // Test project name and id
            expect(projectObj.name).toEqual("Project 1");
            expect(projectObj.id).toBe(1);

            // Test project file list
            expect(projectObj.files).toHaveLength(1);
            expect(projectObj.files[0].name).toEqual("test file 1");
            expect(projectObj.files[0].desc).toEqual("test file desc 1");


            // Test project classes of the first (only) file
            projectClasses = projectObj.files[0].classes

            expect(projectClasses).toHaveLength(1);
            expect(projectClasses[0].name).toEqual("test class 1");
            expect(projectClasses[0].desc).toEqual("test class desc 1");

            // Test methods of first (only) class
            expect(projectClasses[0].methods).toHaveLength(1);
            expect(projectClasses[0].methods[0].name).toEqual("test method 1");
            expect(projectClasses[0].methods[0].rety).toEqual("str");
            expect(projectClasses[0].methods[0].args).toEqual("int, int");
            expect(projectClasses[0].methods[0].desc).toEqual("test def");

            // Test properties of first (only) class
            expect(projectClasses[0].props).toHaveLength(1);
            expect(projectClasses[0].props[0].name).toEqual("test property 1");
            expect(projectClasses[0].props[0].type).toEqual("private-property");
        })

        it("Test content of req.user after clicking save with unequal amounts of data", () => {
            req.body = {
                "file-name-0": ["test file 1", "test file desc 1"],
                "file-name-1": ["test file 2", "test file desc 2"],
                "class-name-0": ["test class 1", "test class desc 1"],
                "property-name-0": ["test property 1", "private-property"],
                "method-name-0": ["test method 1", "str", "int, int", "test def"],
                "file-name-2": ["test file 3", "test file desc 3"],
                "class-name-1": ["test class 2", "test class desc 2"],
                "class-name-2": ["test class 3", "test class desc 3"]
            }
            req.user = { projects: [] }
            codeman_controller.created(req, res);

            expect(req.user.projects).toHaveLength(1);

            projectObj = req.user.projects[0]

            // Test each of the files
            expect(projectObj.files).toHaveLength(3);

            expect(projectObj.files[0].name).toEqual("test file 1");
            expect(projectObj.files[0].desc).toEqual("test file desc 1");
            expect(projectObj.files[0].classes).toHaveLength(0);

            expect(projectObj.files[1].name).toEqual("test file 2");
            expect(projectObj.files[1].desc).toEqual("test file desc 2");
            expect(projectObj.files[1].classes).toHaveLength(1);

            expect(projectObj.files[2].name).toEqual("test file 3");
            expect(projectObj.files[2].desc).toEqual("test file desc 3");
            expect(projectObj.files[2].classes).toHaveLength(2);


            // Test first class object and sub-objects
            projectClasses = projectObj.files[1].classes
            expect(projectClasses[0].name).toEqual("test class 1");
            expect(projectClasses[0].desc).toEqual("test class desc 1");
            expect(projectClasses[0].methods).toHaveLength(1);
            expect(projectClasses[0].methods[0].name).toEqual("test method 1");
            expect(projectClasses[0].methods[0].rety).toEqual("str");
            expect(projectClasses[0].methods[0].args).toEqual("int, int");
            expect(projectClasses[0].methods[0].desc).toEqual("test def");
            expect(projectClasses[0].props).toHaveLength(1);
            expect(projectClasses[0].props[0].name).toEqual("test property 1");
            expect(projectClasses[0].props[0].type).toEqual("private-property");

            // Test last two classes from the last file object
            projectClasses = projectObj.files[2].classes
            expect(projectClasses[0].name).toEqual("test class 2");
            expect(projectClasses[0].desc).toEqual("test class desc 2");
            expect(projectClasses[0].methods).toHaveLength(0);
            expect(projectClasses[0].props).toHaveLength(0);

            expect(projectClasses[1].name).toEqual("test class 3");
            expect(projectClasses[1].desc).toEqual("test class desc 3");
            expect(projectClasses[1].methods).toHaveLength(0);
            expect(projectClasses[1].props).toHaveLength(0);
        })
    });
});
