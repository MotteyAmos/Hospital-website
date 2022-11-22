const getElement = (element)=>{
    return document.querySelector(element);
}

const getElements = (element)=>{
    return document.querySelectorAll(element);
}

//show and hide menu 

let tooggleMenuIcon = getElement(".tooggle-menu-icon");
let container = getElement("header .container");

tooggleMenuIcon.addEventListener("click", ()=>{
    container.classList.toggle("open");

})



