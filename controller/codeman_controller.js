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
        fileCounter = 0;
        classCounter = 0;
        filenameCounter = 0;
        classnameCounter = 0;
        positionFileCounter = 0;
        positionClassCounter = 0;

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
            positionFileCounter += 1;
            if (keybody.includes("file-name")) {
                if (filenameCounter >= 1) {
                    posFileList.push(positionFileCounter-1);
                }
                filenameCounter += 1;
            }
            if (positionFileCounter == Object.keys(bodylist).length) {
                if (posFileList.length != 0) {
                    if (!(posFileList.includes(positionFileCounter))) {
                        posFileList.push(positionFileCounter);
                    }
                }
            }
        }

        for (classbody in bodylist) {
            positionClassCounter += 1;
            if (keybody.includes("class-name")) {
                if (classnameCounter >= 1) {
                    posClassList.push(positionClassCounter-1);
                }
                classnameCounter += 1;
            }
            if (positionClassCounter == Object.keys(bodylist).length) {
                if (posClassList.length != 0) {
                    if (!(posClassList.includes(positionClassCounter))) {
                        posClassList.push(positionClassCounter);
                    }
                }
            }
        }

        // console.log(posFileList);
        // console.log(posClassList);

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

            for (posic in posClassList) {
                if (posic == loopCounter) {
                    fileClass.properties = propertyList;
                    fileClass.methods = methodList;
                    classList.push(fileClass);
                }
            }

            for (posi in posFileList) {
                if (posi == loopCounter) {
                    fileObj.classes = classList;

                    fileList.push(fileObj);
                }
            }
        }
        console.log(fileList);
        res.redirect("/welcome");
    }
};

module.exports = codeManController;
