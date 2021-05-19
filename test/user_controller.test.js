const user_controller = require("../controller/user_controller");

describe("Test getUserByEmailIdAndPassword", () => {

    it("Test valid email and password", () => {
        user = user_controller.getUserByEmailIdAndPassword("test@test.com", "test");

        expect(user).toBeDefined();
    });

    it("Test invalid email and password", () => {
        expect(() => {
            user_controller.getUserByEmailIdAndPassword("fail", "fail");
        }).toThrow("Couldn't find user with email: fail");
    });
});


describe("Test getUserById", () => {

    it("Test valid user id", () => {
        user = user_controller.getUserById(1);

        expect(user).toBeDefined();
    });

    it("Test invalid user id", () => {
        expect(() => {
            user_controller.getUserById("invalid");
        }).toThrow("Couldn't find user with id: invalid");
    });
});