let codeManController = {
    welcome: (req, res) => {
        let userName = req.user.name;
        res.render("codeman/welcome", {nameUser: userName});
    },

    create: (req, res) => {
        res.render("codeman/create");
    },

    created: (req, res) => {
        loopCounter = 0;
        classCounter = 0;
        positionCounter = 0;

        posFileList = [];
        posClassList = [];

        fileList = [];
        classList = [];
        methodList = [];
        propertyList = [];

        fileObj = {};
        fileClass = {};
        fileMethod = {};
        fileProperty = {};

        bodylist = JSON.parse(JSON.stringify(req.body));

        for (keybody in bodylist) {
            positionCounter += 1;

            if (keybody.includes("file-name")) {
                posFileList.push(positionCounter-1);
            }

            if (keybody.includes("class-name")) {
                if (classCounter >= 1) {
                    if (posFileList.includes(positionCounter-2)){
                        posClassList.push(positionCounter-2);
                    } else {
                        posClassList.push(positionCounter-1);
                    }
                }
                classCounter += 1;
            }

            if (positionCounter == Object.keys(bodylist).length) {
                if (posFileList.length != 0) {
                    if (!(posFileList.includes(positionCounter))) {
                        posFileList.push(positionCounter);
                        posClassList.push(positionCounter);
                    }
                }
            }
        }

        for (bodykey in bodylist) {
            loopCounter += 1;

            if (bodykey.includes("file-name")) {
                fileObj = {};
                classList = [];

                fileObj.name = bodylist[bodykey][0];
                fileObj.desc = bodylist[bodykey][1];

            } else if (bodykey.includes("class-name")) {
                fileClass = {};
                methodList = [];
                propertyList = [];

                fileClass.name = bodylist[bodykey][0];
                fileClass.desc = bodylist[bodykey][1];
            
            } else if (bodykey.includes("property-name")) {
                fileProperty = {};

                fileProperty.name = bodylist[bodykey][0];
                fileProperty.type = bodylist[bodykey][1];
                propertyList.push(fileProperty);

            } else if (bodykey.includes("method-name")) {
                fileMethod = {};

                fileMethod.name = bodylist[bodykey][0];
                fileMethod.rety = bodylist[bodykey][1];
                fileMethod.args = bodylist[bodykey][2];
                fileMethod.desc = bodylist[bodykey][3];
                methodList.push(fileMethod);
            }

            if (posClassList.includes(loopCounter)) {
                fileClass.methods = methodList;
                fileClass.props = propertyList;
                classList.push(fileClass);
            }

            if (posFileList.includes(loopCounter)) {
                fileObj.classes = classList;
                fileList.push(fileObj);
            }
        }
        console.log(fileList);
        res.redirect("/welcome");
    }
};

module.exports = codeManController;
