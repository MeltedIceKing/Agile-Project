
//const create_controller = require('../public/main');

const mockHTML = `
    <div class="add-file">
        <button class="add-file-button" type="button">> Add File +</button><br>
    </div>
    `;

describe('Test main.js (create page controller)', () => {

    it('Test new file button', () => {
        document.body.innerHTML = mockHTML;
        require('../public/main.js');

        const addFileButtons = document.getElementsByClassName("add-file-button");
        let newFileDiv = document.getElementsByClassName('file-div-0');

        // Test that the stuff to be added does not exist yet
        expect(newFileDiv).toHaveLength(0);


        addFileButtons[0].click();

        setTimeout(() => {
            // Grab all the new stuff that should have been created
            newFileDiv = document.getElementsByClassName("file-div-0");

            // Test that this exists
            expect(newFileDiv[0]).toBeDefined();
            expect(newFileDiv).toHaveLength(1);

            // Check that it contains the correct stuff
            newFileDivText = newFileDiv[0].outerHTML;

            expect(newFileDivText).toContain("<div");
            expect(newFileDivText).toContain("<label");
            expect(newFileDivText).toContain("<input");
            expect(newFileDivText).toContain("<button");

            addClassButtons = document.getElementsByClassName("add-class-button");
            expect(addClassButtons).toHaveLength(1);

            // Check that clicking the button again does not add to the "file-div-0" classlist
            addFileButtons[0].click();
            newFileDiv = document.getElementsByClassName("file-div-0");
            expect(newFileDiv).toHaveLength(1);

            // Test that there is now an element with the class "file-div-1"
            const otherNewFileDiv = document.getElementsByClassName("file-div-1");
            expect(otherNewFileDiv).toHaveLength(1);
        }, 100);
    })

    it('Test new class button', () => {
        document.body.innerHTML = mockHTML;
        require('../public/main.js');

        const addFileButtons = document.getElementsByClassName("add-file-button");

        // Test that the new stuff does not already exist
        let newClassDiv = document.getElementsByClassName("add-small-class-0");
        expect(newClassDiv).toHaveLength(0);

        addFileButtons[0].click();

        setTimeout(() => {
            // Grab all the new stuff that should have been created
            newClassDiv = document.getElementsByClassName("add-small-class-0");

            // Test that this exists
            expect(newClassDiv[0]).toBeDefined();
            expect(newClassDiv).toHaveLength(1);

            // Check that it contains the correct stuff
            newClassDivText = newClassDiv[0].outerHTML;

            expect(newFileDivText).toContain("<div");
            expect(newFileDivText).toContain("<label");
            expect(newFileDivText).toContain("<input");
            expect(newFileDivText).toContain("<button");

            addPropertyButtons = document.getElementsByClassName("add-property-button");
            expect(addPropertyButtons).toHaveLength(1);

            // Check that clicking the button again does not add to the "add-small-class-0" classlist
            addPropertyButtons[0].click();
            newClassDiv = document.getElementsByClassName("add-small-class-0");
            expect(newFileDiv).toHaveLength(1);

            // Test that there is now an element with the class "add-small-class-1"
            const otherNewFileDiv = document.getElementsByClassName("add-small-class-1");
            expect(otherNewFileDiv).toHaveLength(1);
        }, 100);
    })

    it('Test new property button', () => {
        document.body.innerHTML = mockHTML;
        require('../public/main.js');

        const addFileButtons = document.getElementsByClassName("add-file-button");
        addFileButtons[0].click();

        setTimeout(() => {
            addPropertyButtons = document.getElementsByClassName("add-property-button");

            // Check that the new property stuff does not exist yet
            let newPropertyInput = document.getElementsByClassName("property-input");
            expect(newPropertyInput).toHaveLength(0);

            addPropertyButtons[0].click();

            // Check that the new stuff has been created
            newPropertyInput = document.getElementsByClassName("property-input");
            expect(newPropertyInput).toHaveLength(1);

            // Check that after clicking the button again we have two properties
            addPropertyButtons[0].click();
            newPropertyInput = document.getElementsByClassName("property-input");
            expect(newPropertyInput).toHaveLength(2);
        }, 100);
    })

    it('Test new method button', () => {
        document.body.innerHTML = mockHTML;
        require('../public/main.js');

        const addFileButtons = document.getElementsByClassName("add-file-button");
        addFileButtons[0].click();

        setTimeout(() => {
            addMethodButtons = document.getElementsByClassName("add-method-button");

            // Check that the new method stuff does not exist yet
            let newMethodInput = document.getElementsByClassName("method-input");
            expect(newMethodInput).toHaveLength(0);

            let methodReturnType = document.getElementById("method-return-type");
            let methodDef = document.getElementById("method-definition");
            let methodArgs = document.getElementById("method-arguments");
            expect(methodReturnType).toBeUndefined();
            expect(methodDef).toBeUndefined();
            expect(methodArgs).toBeUndefined();

            addMethodButtons[0].click();

            // Check that the new stuff has been created
            newMethodInput = document.getElementsByClassName("method-input");
            expect(newMethodInput).toHaveLength(1);

            methodReturnType = document.getElementById("method-return-type");
            methodDef = document.getElementById("method-definition");
            methodArgs = document.getElementById("method-arguments");
            expect(methodReturnType).toBeDefined();
            expect(methodDef).toBeDefined();
            expect(methodArgs).toBeDefined();

            // Check that after clicking the button again we have two methods
            addMethodButtons[0].click();
            newMethodInput = document.getElementsByClassName("method-input");
            expect(newMethodInput).toHaveLength(2);
        }, 100);
    })
})