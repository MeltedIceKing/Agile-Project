const addFileButton = document.querySelector('.add-file-button');
fileCounter = 0;
classCounter = 0;
propCounter = 0;
methodCounter = 0;
fileList = [];

// Gives the user the option to add a File with an add Class Button
// This is the start of all dynamic content for the create page
function newfile() {
    fileList.push(fileCounter);
    let newFile = document.querySelector(".add-file");

    fileDiv = document.createElement("div");
    fileDiv.classList.add(`file-div-${fileCounter}`)

    labelFileName = document.createElement("label");
    labelFileName.setAttribute("for", "file-name");
    labelFileName.classList.add(`label-filename`);
    labelFileName.innerHTML = "File name: ";
    
    inputFileName = document.createElement("input");
    inputFileName.setAttribute("type", "text");
    inputFileName.setAttribute("id", "file-name");
    inputFileName.setAttribute("name", "file-name");

    newBreak = document.createElement("br");

    inputFileName.append(newBreak)

    divAddClass = document.createElement("div");
    divAddClass.classList.add(`add-class-${fileCounter}`);
    
    buttonAddClass = document.createElement("button");
    buttonAddClass.classList.add(`${fileCounter}`);
    buttonAddClass.classList.add(`add-class-button`);
    buttonAddClass.setAttribute("type", "button")
    buttonAddClass.innerHTML = "Add Class +";

    divAddClass.append(buttonAddClass);
    divAddClass.append(newBreak);

    fileDiv.append(labelFileName);
    fileDiv.append(inputFileName);
    fileDiv.append(divAddClass);
    fileDiv.append(newBreak);

    newFile.append(fileDiv);
    fileCounter = fileCounter + 1;
}

// Adds a class with buttons for adding property and methods
function addClass(classnumber) {
    let newClass = document.querySelector(`.add-class-${classnumber}`);
    newBreak = document.createElement("br");

    divSmallClass = document.createElement("div");
    divSmallClass.classList.add(`add-small-class-${classCounter}`);

    labelClassName = document.createElement("label");
    labelClassName.setAttribute("for", "class-name");
    labelClassName.innerHTML = "Class name: ";
    
    inputClassName = document.createElement("input");
    inputClassName.setAttribute("type", "text");
    inputClassName.setAttribute("id", "class-name");
    inputClassName.setAttribute("name", "class-name");

    divAddProperty = document.createElement("div");
    divAddProperty.classList.add(`add-property-${classCounter}`);

    buttonAddProperty = document.createElement("button");
    buttonAddProperty.classList.add(`${classCounter}`);
    buttonAddProperty.classList.add(`add-property-button`);
    buttonAddProperty.setAttribute("type", "button");
    buttonAddProperty.innerHTML = "Add Property +";

    divAddProperty.append(buttonAddProperty);

    divAddMethod = document.createElement("div");
    divAddMethod.classList.add(`add-method-${classCounter}`);

    buttonAddMethod = document.createElement("button");
    buttonAddMethod.classList.add(`${classCounter}`);
    buttonAddMethod.classList.add(`add-method-button`);
    buttonAddMethod.setAttribute("type", "button");
    buttonAddMethod.innerHTML = "Add Method +";

    divAddMethod.append(buttonAddMethod);

    divSmallClass.append(labelClassName);
    divSmallClass.append(inputClassName);
    divSmallClass.append(divAddProperty);
    divSmallClass.append(divAddMethod);

    newClass.append(divSmallClass);
    newClass.append(newBreak);
}

// Adds a property and its input
function addProperty(propnumber) {
    let newProperty = document.querySelector(`.add-property-${propnumber}`);
    newBreak = document.createElement("br");

    labelPropertyName = document.createElement("label");
    labelPropertyName.setAttribute("for", "property-name");
    labelPropertyName.innerHTML = "Property name: ";
    
    inputPropertyName = document.createElement("input");
    inputPropertyName.setAttribute("type", "text");
    inputPropertyName.setAttribute("id", "property-name");
    inputPropertyName.setAttribute("name", "property-name");
    inputPropertyName.classList.add("property-input");

    labelPublicProp = document.createElement("label");
    labelPublicProp.setAttribute("for", "public-prop");
    labelPublicProp.innerHTML = "Pub"
    publicPropRadio = document.createElement("input");
    publicPropRadio.setAttribute("type", "checkbox");
    publicPropRadio.setAttribute("id", "public-prop");
    publicPropRadio.setAttribute("name", "prop-type");
    publicPropRadio.setAttribute("value", "public-property");
    
    labelPrivateProp = document.createElement("label");
    labelPrivateProp.setAttribute("for", "private-prop");
    labelPrivateProp.innerHTML = "Priv"
    privatePropRadio = document.createElement("input");
    privatePropRadio.setAttribute("type", "checkbox");
    privatePropRadio.setAttribute("id", "private-prop");
    privatePropRadio.setAttribute("name", "prop-type");
    privatePropRadio.setAttribute("value", "private-property");

    labelProtProp = document.createElement("label");
    labelProtProp.setAttribute("for", "prot-prop");
    labelProtProp.innerHTML = "Prot"
    protPropRadio = document.createElement("input");
    protPropRadio.setAttribute("type", "checkbox");
    protPropRadio.setAttribute("id", "prot-prop");
    protPropRadio.setAttribute("name", "prop-type");
    protPropRadio.setAttribute("value", "protected-property");

    newProperty.append(labelPropertyName);
    newProperty.append(inputPropertyName);
    newProperty.append(publicPropRadio);
    newProperty.append(labelPublicProp);
    newProperty.append(privatePropRadio);
    newProperty.append(labelPrivateProp);
    newProperty.append(protPropRadio);
    newProperty.append(labelProtProp);
    newProperty.append(newBreak);
}

//Adds a method and it's inputs and labels
function addMethod(methodnumber) {
    let newMethod = document.querySelector(`.add-method-${methodnumber}`);
    newBreak = document.createElement("br");
    newPar = document.createElement("p");

    labelMethodName = document.createElement("label");
    labelMethodName.setAttribute("for", "method-name");
    labelMethodName.innerHTML = "Method name: ";
    
    inputMethodName = document.createElement("input");
    inputMethodName.setAttribute("type", "text");
    inputMethodName.setAttribute("id", "method-name");
    inputMethodName.setAttribute("name", "method-name");
    inputMethodName.classList.add("method-input");

    labelMethodRT = document.createElement("label");
    labelMethodRT.setAttribute("for", "method-return-type");
    labelMethodRT.innerHTML = "Method return type: ";

    inputMethodRT = document.createElement("input");
    inputMethodRT.setAttribute("type", "text");
    inputMethodRT.setAttribute("id", "method-return-type");
    inputMethodRT.setAttribute("name", "method-return-type");

    labelMethodDef = document.createElement("label");
    labelMethodDef.setAttribute("for", "method-definition");
    labelMethodDef.innerHTML = "Method definition: ";

    inputMethodDef = document.createElement("input");
    inputMethodDef.setAttribute("type", "text");
    inputMethodDef.setAttribute("id", "method-definition");
    inputMethodDef.setAttribute("name", "method-definition");

    labelMethodArgs = document.createElement("label");
    labelMethodArgs.setAttribute("for", "method-arguments");
    labelMethodArgs.innerHTML = "Method arguments: ";

    inputMethodArgs = document.createElement("input");
    inputMethodArgs.setAttribute("type", "text");
    inputMethodArgs.setAttribute("id", "method-arguments");
    inputMethodArgs.setAttribute("name", "arguments");

    newMethod.append(labelMethodName);
    newMethod.append(inputMethodName);
    newMethod.append(labelMethodRT);
    newMethod.append(inputMethodRT);
    newMethod.append(labelMethodDef);
    newMethod.append(inputMethodDef);
    newMethod.append(labelMethodArgs);
    newMethod.append(inputMethodArgs);
    newMethod.append(newBreak);
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
        console.log(classCounter);
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
});
