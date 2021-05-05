const addFileButton = document.querySelector('.add-file-buton');



function newfile() {
    let newNote = document.querySelector(".add-file")
    newNote.insertAdjacentHTML("beforeend", `
    <label for="file-name">File name</label>
    <input type="text" id="file-name" name="file-name"><br>
    <div class="add-class">
        <button class="toggle-button" type="button" onclick="addClass()">> Add Class +</button>
    </div>
</div>`);
}

function addClass() {
    let newNote = document.querySelector(".input")
    newNote.insertAdjacentHTML("beforeend", `
    
    <div>
        <label for="class-name">Class name</label>
        <br>
        <input type="text" id="class-name" name="class-name">   
        <br>
        <div>
            <button class="toggle-button" type="button" onclick="addProperty()">> Add Property +</button>
    </div>`);
}


function addProperty() {
    let newNote = document.querySelector(".input")
    newNote.insertAdjacentHTML("beforeend", `<label for="property-name">Property Name</label>
    <br>
    <input type="text" id="property-name" name="property-name">
    <br>
    <div>
        <button class="toggle-button" type="button" onclick="addMethod">> Add Method +</button><br>
    </div>`);

}

function addMethod() {
    let newNote = document.querySelector(".input")
    newNote.insertAdjacentHTML("beforeend", `<div>
    <label for="method-name">Methond name</label>
        <input type="text" id="method-name" name="method-name">
         <br>
            <div>
                <label for="return-type">Return type</label>
                <input type="text" id="return-type" name="return-type"> 
            </div>
            <label for="method-def">Methond Definition</label>
            <input type="text" id="method-def" name="method-def"><br>
            <label for="method-arg">Methond Arguments</label>
            <input type="text" id="method-arg" name="method-arg">
            <br>
    </div>`);
}

addFileButton.addEventListener('click', newfile);