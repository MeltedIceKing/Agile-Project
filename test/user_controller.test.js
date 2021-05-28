const user_controller = require("../controller/user_controller");
const createJSON = require("../database.js")[2];
const fs = require("fs");

if (!fs.existsSync("data.json")) {
    createJSON();
}

describe("Test getUserByEmailIdAndPassword", () => {

    it("Test valid email and password", () => {
        user = user_controller.getUserByEmailIdAndPassword("test@test.com", "test");

        expect(user).toBeDefined();
        expect(user).not.toBe(null);
    });

    it("Test invalid email and password", () => {
        user = user_controller.getUserByEmailIdAndPassword("fail", "fail");
        
        expect(user).toBe(null);
    });
});


describe("Test getUserById", () => {

    it("Test valid user id", () => {
        user = user_controller.getUserById(1);

        expect(user).toBeDefined();
        expect(user).not.toBe(null);
    });

    it("Test invalid user id", () => {
        user = user_controller.getUserById("invalid");
        
        expect(user).toBe(null);
    });
});