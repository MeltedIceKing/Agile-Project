const addFileButton = document.querySelector('.add-file-button');
fileCounter = 0;    //counts amount of files created
classCounter = 0;   //counts amount of classes created
propCounter = 0;    //counts amount of properties created
methodCounter = 0;  //counts amount of methods created

// So the edit page buttons work correctly
const divList = document.querySelectorAll("div");
divList.forEach((division) => {
    divClass = division.className;
    if (divClass.includes("file-div")) {
        fileCounter += 1;
    } else if (divClass.includes("add-small-class")) {
        classCounter += 1;
    } else if (divClass.includes("add-property")) {
        propCounter += 1;
    } else if (divClass.includes("add-method")) {
        methodCounter += 1;
    }
});

// Gives the user the option to add a File with an add Class Button
function newfile() {
    let newFile = document.querySelector(".add-file");

    fileDiv = document.createElement("div");
    fileDiv.classList.add(`file-div-${fileCounter}`);

    buttonRemoveFile = document.createElement("button");
    buttonRemoveFile.classList.add(`file-div-${fileCounter}`);
    buttonRemoveFile.setAttribute("type", "button");
    buttonRemoveFile.innerHTML = "Remove File -";

    labelFileComplete = document.createElement("label");
    labelFileComplete.setAttribute("for", "completed-file");
    labelFileComplete.innerHTML = "Completed"
    fileCompleteRadio = document.createElement("input");
    fileCompleteRadio.setAttribute("type", "checkbox");
    fileCompleteRadio.setAttribute("id", "completed-file");
    fileCompleteRadio.setAttribute("name", `file-name-${fileCounter}`);
    fileCompleteRadio.setAttribute("value", "completed");
    fileCompleteRadio.classList.add("create-checkbox");

    labelFileName = document.createElement("label");
    labelFileName.setAttribute("for", "file-name");
    labelFileName.classList.add(`label-filename`);
    labelFileName.innerHTML = "File name: ";
    
    inputFileName = document.createElement("input");
    inputFileName.setAttribute("type", "text");
    inputFileName.setAttribute("id", `file-name-${fileCounter}`);
    inputFileName.setAttribute("name", `file-name-${fileCounter}`);
    inputFileName.setAttribute("size", "50.5");

    labelFileDesc = document.createElement("label");
    labelFileDesc.setAttribute("for", "file-desc");
    labelFileDesc.classList.add("label-filedesc");
    labelFileDesc.innerHTML = "File Description: ";

    inputFileDesc = document.createElement("textarea");
    inputFileDesc.setAttribute("id", `file-desc`);
    inputFileDesc.setAttribute("name", `file-name-${fileCounter}`);

    newBreak = document.createElement("br");
    oneMoreBreak = document.createElement("br");
    secMoreBreak = document.createElement("br");

    inputFileName.append(newBreak);

    divAddClass = document.createElement("div");
    divAddClass.classList.add(`add-class-${fileCounter}`, "add-class");
    
    buttonAddClass = document.createElement("button");
    buttonAddClass.classList.add(`${fileCounter}`);
    buttonAddClass.classList.add(`add-class-button`);
    buttonAddClass.setAttribute("type", "button");
    buttonAddClass.innerHTML = "Add Class +";

    divAddClass.append(buttonAddClass);
    divAddClass.append(newBreak);
    fileDiv.append(labelFileName);
    fileDiv.append(inputFileName);
    fileDiv.append(fileCompleteRadio);
    fileDiv.append(labelFileComplete);
    fileDiv.append(buttonRemoveFile);
    fileDiv.append(secMoreBreak);
    fileDiv.append(labelFileDesc);
    fileDiv.append(oneMoreBreak);
    fileDiv.append(inputFileDesc);
    fileDiv.append(divAddClass);
    fileDiv.append(newBreak);
    newFile.append(fileDiv);
    fileCounter = fileCounter + 1;
}

// Adds a class with buttons for adding property and methods
function addClass(classnumber) {
    let newClass = document.querySelector(`.add-class-${classnumber}`);
    newBreak = document.createElement("br");
    oneMoreBreak = document.createElement("br");
    secMoreBreak = document.createElement("br");

    buttonRemoveClass = document.createElement("button");
    buttonRemoveClass.classList.add(`add-small-class-${classCounter}`);
    buttonRemoveClass.setAttribute("type", "button");
    buttonRemoveClass.innerHTML = "Remove Class -";

    divSmallClass = document.createElement("div");
    divSmallClass.classList.add(`add-small-class-${classCounter}`);

    labelClassName = document.createElement("label");
    labelClassName.setAttribute("for", "class-name");
    labelClassName.classList.add("label-classname");
    labelClassName.innerHTML = "Class name: ";
    
    inputClassName = document.createElement("input");
    inputClassName.setAttribute("type", "text");
    inputClassName.setAttribute("id", "class-name");
    inputClassName.setAttribute("name", `class-name-${classCounter}`);
    inputClassName.setAttribute("size", "47.5");

    labelClassDesc = document.createElement("label");
    labelClassDesc.setAttribute("for", "class-desc");
    labelClassDesc.classList.add("label-classdesc");
    labelClassDesc.innerHTML = "Class Description: "

    inputClassDesc = document.createElement("textarea");
    inputClassDesc.setAttribute("id", `class-desc`);
    inputClassDesc.setAttribute("name", `class-name-${classCounter}`);

    divAddProperty = document.createElement("div");
    divAddProperty.classList.add(`add-property-${classCounter}`, "add-property");

    buttonAddProperty = document.createElement("button");
    buttonAddProperty.classList.add(`${classCounter}`);
    buttonAddProperty.classList.add(`add-property-button`);
    buttonAddProperty.setAttribute("type", "button");
    buttonAddProperty.innerHTML = "Add Property +";

    divAddProperty.append(buttonAddProperty);

    divAddMethod = document.createElement("div");
    divAddMethod.classList.add(`add-method-${classCounter}`, "add-method");

    buttonAddMethod = document.createElement("button");
    buttonAddMethod.classList.add(`${classCounter}`);
    buttonAddMethod.classList.add(`add-method-button`);
    buttonAddMethod.setAttribute("type", "button");
    buttonAddMethod.innerHTML = "Add Method +";

    divAddMethod.append(buttonAddMethod);

    divSmallClass.append(labelClassName);
    divSmallClass.append(inputClassName);
    divSmallClass.append(buttonRemoveClass);
    divSmallClass.append(oneMoreBreak);
    divSmallClass.append(labelClassDesc);
    divSmallClass.append(secMoreBreak);
    divSmallClass.append(inputClassDesc);
    divSmallClass.append(divAddProperty);
    divSmallClass.append(divAddMethod);
    divSmallClass.append(newBreak);
    newClass.append(divSmallClass);
    
    //classCounter = classCounter + 1;
}

// Adds a property and its input
function addProperty(propnumber) {
    let newProperty = document.querySelector(`.add-property-${propnumber}`);
    newBreak = document.createElement("br");

    buttonRemoveProperty = document.createElement("button");
    buttonRemoveProperty.classList.add(`add-small-property-${propCounter}`);
    buttonRemoveProperty.setAttribute("type", "button");
    buttonRemoveProperty.innerHTML = "Remove Property -";

    smallProperty = document.createElement("div");
    smallProperty.classList.add(`add-small-property-${propCounter}`);

    labelPropertyName = document.createElement("label");
    labelPropertyName.setAttribute("for", "property-name");
    labelPropertyName.classList.add("label-propname");
    labelPropertyName.innerHTML = "<br> Property name: <br>";
    
    inputPropertyName = document.createElement("input");
    inputPropertyName.setAttribute("type", "text");
    inputPropertyName.setAttribute("id", "property-name");
    inputPropertyName.setAttribute("name", `property-name-${propCounter}`);
    inputPropertyName.classList.add("property-input");

    labelPublicProp = document.createElement("label");
    labelPublicProp.setAttribute("for", "public-prop");
    labelPublicProp.innerHTML = "Pub"
    publicPropRadio = document.createElement("input");
    publicPropRadio.setAttribute("type", "radio");
    publicPropRadio.setAttribute("id", "public-prop");
    publicPropRadio.setAttribute("name", `property-name-${propCounter}`);
    publicPropRadio.setAttribute("value", "public-property");
    publicPropRadio.setAttribute("checked", "true");
    publicPropRadio.classList.add("create-checkbox");
    
    labelPrivateProp = document.createElement("label");
    labelPrivateProp.setAttribute("for", "private-prop");
    labelPrivateProp.innerHTML = "Priv"
    privatePropRadio = document.createElement("input");
    privatePropRadio.setAttribute("type", "radio");
    privatePropRadio.setAttribute("id", "private-prop");
    privatePropRadio.setAttribute("name", `property-name-${propCounter}`);
    privatePropRadio.setAttribute("value", "private-property");
    privatePropRadio.classList.add("create-checkbox");

    labelProtProp = document.createElement("label");
    labelProtProp.setAttribute("for", "prot-prop");
    labelProtProp.innerHTML = "Prot"
    protPropRadio = document.createElement("input");
    protPropRadio.setAttribute("type", "radio");
    protPropRadio.setAttribute("id", "prot-prop");
    protPropRadio.setAttribute("name", `property-name-${propCounter}`);
    protPropRadio.setAttribute("value", "protected-property");
    protPropRadio.classList.add("create-checkbox");

    smallProperty.append(labelPropertyName);
    smallProperty.append(inputPropertyName);
    smallProperty.append(publicPropRadio);
    smallProperty.append(labelPublicProp);
    smallProperty.append(privatePropRadio);
    smallProperty.append(labelPrivateProp);
    smallProperty.append(protPropRadio);
    smallProperty.append(labelProtProp);
    smallProperty.append(buttonRemoveProperty);
    smallProperty.append(newBreak);
    newProperty.append(smallProperty);

    //propCounter = propCounter + 1;
}

//Adds a method and it's inputs and labels
function addMethod(methodnumber) {
    let newMethod = document.querySelector(`.add-method-${methodnumber}`);
    newBreak = document.createElement("br");
    oneMoreBreak = document.createElement("br");
    newPar = document.createElement("p");

    buttonRemoveMethod = document.createElement("button");
    buttonRemoveMethod.classList.add(`add-small-method-${methodCounter}`);
    buttonRemoveMethod.setAttribute("type", "button");
    buttonRemoveMethod.innerHTML = "Remove Method -";

    smallMethod = document.createElement("div");
    smallMethod.classList.add(`add-small-method-${methodCounter}`);

    labelMethodName = document.createElement("label");
    labelMethodName.setAttribute("for", "method-name");
    labelMethodName.classList.add("label-methname");
    labelMethodName.innerHTML = "<br>Method name: ";
    
    inputMethodName = document.createElement("input");
    inputMethodName.setAttribute("type", "text");
    inputMethodName.setAttribute("id", "method-name");
    inputMethodName.setAttribute("name", `method-name-${methodCounter}`);
    inputMethodName.setAttribute("size", "39.5");
    inputMethodName.classList.add("method-input");

    labelMethodRT = document.createElement("label");
    labelMethodRT.setAttribute("for", "method-return-type");
    labelMethodRT.innerHTML = "<br>Method return type: <br>";

    inputMethodRT = document.createElement("input");
    inputMethodRT.setAttribute("type", "text");
    inputMethodRT.setAttribute("id", "method-return-type");
    inputMethodRT.setAttribute("name", `method-name-${methodCounter}`);
    inputMethodRT.setAttribute("size", "39.5");
    inputMethodRT.classList.add("method-return-input");

    labelMethodArgs = document.createElement("label");
    labelMethodArgs.setAttribute("for", "method-arguments");
    labelMethodArgs.innerHTML = "<br>Method arguments: <br>";

    inputMethodArgs = document.createElement("input");
    inputMethodArgs.setAttribute("type", "text");
    inputMethodArgs.setAttribute("id", "method-arguments");
    inputMethodArgs.setAttribute("name", `method-name-${methodCounter}`);
    inputMethodArgs.setAttribute("size", "39.5");
    inputMethodArgs.classList.add("method-args-input");

    labelMethodDef = document.createElement("label");
    labelMethodDef.setAttribute("for", "method-definition");
    labelMethodDef.innerHTML = "<br>Method definition: ";

    inputMethodDef = document.createElement("textarea");
    inputMethodDef.setAttribute("id", `method-definition`);
    inputMethodDef.setAttribute("name", `method-name-${methodCounter}`);
    inputMethodDef.classList.add("method-def-input");

    smallMethod.append(labelMethodName);
    smallMethod.append(inputMethodName);
    smallMethod.append(buttonRemoveMethod);
    smallMethod.append(labelMethodRT);
    smallMethod.append(inputMethodRT);
    smallMethod.append(labelMethodArgs);
    smallMethod.append(inputMethodArgs);
    smallMethod.append(labelMethodDef);
    smallMethod.append(oneMoreBreak);
    smallMethod.append(inputMethodDef);
    smallMethod.append(newBreak);
    newMethod.append(smallMethod);

    //methodCounter = methodCounter + 1;
}

// This waits for the user to click the newfile button
addFileButton.addEventListener('click', newfile);

//This file is an even listener for all newly added buttons and text areas
docAddFile = document.querySelector('.add-file');
docAddFile.addEventListener('click', (e) => {
    AddFileInnerHtml = e.target.innerHTML;
    if (AddFileInnerHtml == "Add Class +"){
        classNum = e.target.className.substring(0,1);
        addClass(classNum);
        classCounter = classCounter + 1;
    }
    if (AddFileInnerHtml == "Add Property +"){
        propNum = e.target.className.substring(0,1);
        addProperty(propNum);
        propCounter = propCounter + 1;
    }
    if (AddFileInnerHtml == "Add Method +"){
        methodNum = e.target.className.substring(0,1);
        addMethod(methodNum);
        methodCounter = methodCounter + 1;
    }
    if (AddFileInnerHtml == "Remove File -"){
        removeFileName = e.target.className;
        fileToRemove = document.getElementsByClassName(removeFileName);
        fileToRemove[0].remove();
    }
    if (AddFileInnerHtml == "Remove Class -"){
        removeFileClass = e.target.className;
        classToRemove = document.getElementsByClassName(removeFileClass);
        classToRemove[0].remove();
    }
    if (AddFileInnerHtml == "Remove Property -"){
        removeFileProp = e.target.className;
        propToRemove = document.getElementsByClassName(removeFileProp);
        propToRemove[0].remove();
    }
    if (AddFileInnerHtml == "Remove Method -"){
        removeFileMeth = e.target.className;
        methToRemove = document.getElementsByClassName(removeFileMeth);
        methToRemove[0].remove();
    }
});
