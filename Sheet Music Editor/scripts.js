"use strict";

// Declarations

const notes_btns = Array.from(document.getElementsByClassName("note"));
const note_modifiers_btns = Array.from(document.getElementsByClassName("modifier"));
const rests_btns = Array.from(document.getElementsByClassName("rest"));

const notes_modifiers = concat_arrays(notes_btns, note_modifiers_btns);
const btns_all = concat_arrays(notes_modifiers, rests_btns);

// ----

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

// ---- Resources ---- //

const sheet = document.getElementById("sheet-img");

// Events

window.onload = init;

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

/*function addClass(name, obj) {
    let cls = obj.className;
    let newc = cls.concat(" " + name);
    
    return newc;
}*/

function concat_arrays(arr1, arr2) {
    for (let e of arr2)
        arr1.push(e);
    
    return arr1;
}

// -- Tick & Render

function tick() {
    
}

function render() {
    ctx.drawImage(sheet, 5, 10);
}

// - Init Functions

function loop() {
    tick();
    render();
    
    window.requestAnimationFrame(loop);
}

function init() {
    window.requestAnimationFrame(loop);
}
