const saveDatabase = require("../database")[1];

let codeManController = {
    welcome: (req, res) => {
        let userName = req.user.name;
        res.render("codeman/welcome", {nameUser: userName});
    },

    view: (req, res) => {
        res.render("codeman/view-projects", {projects: req.user.projects});
    },

    editOne: (req, res) => {
        let projectToFind = req.params.id;
        let searchResult = req.user.projects.find(function (project) {
            return project.id == projectToFind;
        });
        res.render("codeman/edit-view", { projectItem: searchResult});
    },

    viewOne: (req, res) => {
        let projectToFind = req.params.id;
        let searchResult = req.user.projects.find(function (project) {
            return project.id == projectToFind;
        });
        res.render("codeman/single-view", { projectItem: searchResult});
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

        // If user has not added any content to page, redirect and exit function
        // We should probably add a message of some kind.
        if (Object.keys(bodylist).length == 0) {
            return res.redirect('/create');
        }

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
                
                if (bodylist[bodykey].length >= 3) {
                    fileObj.name = bodylist[bodykey][0];
                    fileObj.comp = bodylist[bodykey][1];
                    fileObj.desc = bodylist[bodykey][2];
                } else {
                    fileObj.name = bodylist[bodykey][0];
                    fileObj.comp = "Pending"
                    fileObj.desc = bodylist[bodykey][1];
                }

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
        projectID = req.user.projects.length+1;
        projectName = "Project " + projectID;
        projectObj = {
            name: projectName,
            id: projectID,
            files: fileList,
        };
        req.user.projects.push(projectObj);
        saveDatabase();
        res.redirect("/welcome");
    },

    edited: (req, res) => {
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

        // If user has not added any content to page, redirect and exit function
        // We should probably add a message of some kind.
        if (Object.keys(bodylist).length == 0) {
            return res.redirect('/create');
        }

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

                if (bodylist[bodykey].length >= 3) {
                    fileObj.name = bodylist[bodykey][0];
                    fileObj.comp = bodylist[bodykey][1];
                    fileObj.desc = bodylist[bodykey][2];
                } else {
                    fileObj.name = bodylist[bodykey][0];
                    fileObj.comp = "Pending"
                    fileObj.desc = bodylist[bodykey][1];
                }

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
                console.log(bodylist[bodykey]);
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
        projectID = req.params.id;
        projectName = "Project " + projectID;
        projectObj = {
            name: projectName,
            id: projectID,
            files: fileList,
        };
        noIdObj = req.user.projects.filter(projectItem => projectItem.id != req.params.id);
        noIdObj.push(projectObj);
        req.user.projects = noIdObj;
        saveDatabase();
        res.redirect("/view/" + req.params.id);
    },
};

module.exports = codeManController;
