const fs = require("fs");

const fileContents = fs.readFileSync("data.json", "utf8");

let Database = JSON.parse(fileContents);

function saveDatabase() {
    const dataToSave = JSON.stringify(Database);
    fs.writeFileSync("data.json", dataToSave, "utf8");
}

module.exports = [Database, saveDatabase];
