/*
ColorPicker
Copyright (C) Simon Raichl 2018
MIT License
Use this as you want, share it as you want, do basically whatever you want with this :)
*/

export default class ColorPicker{
    constructor(){
        this.picked = false;
        this.init();
    }
    init(){
        let input = document.getElementById("color-input");
        document.body.addEventListener("click", (e) => {
            e.target.id !== "color-code" || !this.picked ? input.click() : null;
        });
        input.addEventListener("change", (e) => {
            let code = document.getElementById("color-code");
            !this.picked ? (() => {this.picked = true; code.parentElement.classList.add("default")})() : null;
            code.innerHTML = e.target.value;
            document.body.style.background = e.target.value;
            code.innerHTML += "<br>" + document.body.style.background;
        });
    }
}

new ColorPicker();
