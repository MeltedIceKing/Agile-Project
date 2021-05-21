const fs = require("fs");

const fileContents = fs.readFileSync("data.json", "utf8");

let Database = JSON.parse(fileContents);

function saveDatabase() {
    console.log(Database);
    console.log("-----Stringified-----");
    console.log(JSON.stringify);
}

module.exports = Database, saveDatabase;
