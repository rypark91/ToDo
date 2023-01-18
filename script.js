
var list = document.querySelector("#list");
var addButton = document.querySelector("#addButton");
var count = 0;
var textBox = document.querySelector("#message");

textBox.disabled = true;
textBox.value = "";

addButton.addEventListener("click", function(){
    count++;
    
    var newItem = document.createElement('div');
    newItem.className = "listItem";
    
    var placeHolderText = document.createElement('p');
    

    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = 'complete';
    checkBox.id = `check${count}`;
    
    
    
    
    
    placeHolderText.innerText = "...";
    newItem.appendChild(checkBox);
    newItem.appendChild(placeHolderText);
    
    checkBox.addEventListener("CheckboxStateChange",function(){
        if(this.checked === true){
            placeHolderText.classList.add("checked");

        }
        else{
            placeHolderText.classList.remove("checked");

        }
    });
    var newEditbar = document.createElement('div');
    newEditbar.className = "editBar";
    newItem.appendChild(newEditbar);
    var updateBox = document.createElement("div");
    var deleteBox = document.createElement("div");
    
    updateBox.className = "update";
    deleteBox.className = "delete";
    updateBox.innerText = "u";
    deleteBox.innerText = "d";
    newEditbar.appendChild(updateBox);
    newEditbar.appendChild(deleteBox);
    list.appendChild(newItem);

    list.classList.add("disabled");
    textBox.style.pointerEvents = "all";
    textBox.disabled = false;
    
    var addText = function(){
        placeHolderText.innerText = textBox.value;
        textBox.value = "";
        textBox.disabled = true;
        textBox.removeEventListener("change",addText);
        textBox.removeEventListener("keypress",addTextEnter);
        list.classList.remove("disabled");

    };
    var addTextEnter = function(e){
        if(e.key === 'Enter'){
            placeHolderText.innerText = textBox.value;
            textBox.value = "";
            textBox.disabled = true;
            textBox.removeEventListener("change",addText);
            textBox.removeEventListener("keypress",addTextEnter);
            list.classList.remove("disabled")
        }
    }
    textBox.addEventListener("change",addText);
    textBox.addEventListener("keypress",addTextEnter);

    updateBox.addEventListener("click",function(){
        list.classList.add("disabled");
        textBox.style.pointerEvents = "all";
        textBox.disabled = false;
        textBox.addEventListener("change",addText);
        textBox.addEventListener("keypress",addTextEnter);
    });
    deleteBox.addEventListener("click",function(){
        list.removeChild(newItem);
    });
    
});
