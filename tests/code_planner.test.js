
//const create_controller = require('../public/main');

// const mockHTML = `
//     <div class="add-file">
//         <button class="add-file-button" type="button">> Add File +</button><br>
//     </div>
//     `;

describe('Test main.js (create page controller)', () => {

    it('Test new file button', () => {
        document.body.innerHTML = `
            <div class="add-file">
                <button class="add-file-button" type="button">> Add File +</button><br>
            </div>
        `;
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
        document.body.innerHTML = `
            <div class="add-file">
                <button class="add-file-button" type="button">> Add File +</button><br>
            </div>
        `;
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
})