// Declarations

const notes_btns = Array.from(document.getElementsByClassName("note"));
const note_modifiers_btns = Array.from(document.getElementsByClassName("modifier"));

const btns_all = concat_arrays(notes_btns, note_modifiers_btns);

// Events

window.onbeforeunload = function() { // Perguntar se a pessoa quer sair
    return "Do you want to leave?";
}

for (let obj of btns_all) {
    obj.addEventListener("click", function(e) {
        //obj.className = addClass("n-sel", obj);
        obj.classList.add("sel");    // Tá Deprecated, eu sei
        
        for (let objj of btns_all)
            if (objj !== obj)
                objj.classList.remove("sel");
    });
}

// Functions

function addClass(name, obj) {
    let cls = obj.className;
    let newc = cls.concat(" " + name);
    
    return newc;
}

function concat_arrays(arr1, arr2) {
    for (let e of arr2)
        arr1.push(e);
    
    return arr1;
}

