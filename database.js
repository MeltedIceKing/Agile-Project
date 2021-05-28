const fs = require("fs");

if (!fs.existsSync("data.json")) {
    createJSON();
}

const fileContents = fs.readFileSync("data.json", "utf8");

let Database = JSON.parse(fileContents);

function saveDatabase() {
    const dataToSave = JSON.stringify(Database);
    fs.writeFileSync("data.json", dataToSave, "utf8");
}

function createJSON() {
    data = 
        [
            {  
                "name":"test",
                "id":1,
                "email":"test@test.com",
                "password":"test",
                "projects":[
                    {
                        "name":"Project 1",
                        "id":1,
                        "files":[
                            {
                                "name":"test file 1",
                                "desc":"test file desc 1",
                                "classes":[
                                    {
                                        "name":"test class 1",
                                        "desc":"test class desc 1",
                                        "methods":[
                                            {
                                                "name":"test method 1",
                                                "rety":"test method rety 1",
                                                "args":"test method args 1",
                                                "desc":"test method desc 1"
                                            }
                                        ],
                                        "props":[
                                            {
                                                "name":"test property 1",
                                                "type":"private-property"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    fs.writeFileSync("data.json", JSON.stringify(data));
}

module.exports = [Database, saveDatabase, createJSON];
