const getElement = (element)=>{
    return document.querySelector(element);
}

const getElements = (element)=>{
    return document.querySelectorAll(element);
}

//show and hide menu on a small and medium device

let openIcon = getElement(".open-menu");
let closeIcon = getElement(".close-menu");
let container = getElement("header .container");

if (window.innerWidth <1025){
    (container.classList.contains(!"close")) &  (container.className += " close");
    openIcon.addEventListener("click", ()=>{
        container.className = container.className.replace("close", "open");
        console.log(container.classList);
    })
    
    closeIcon.addEventListener("click",()=>{
        container.className = container.className.replace("open", "close");
        console.log(container.classList);
    
    
    })
}





//active nav link
let navLinks = getElements(".nav-link");


for (let i=0; i<navLinks.length; i++){

    navLinks[i].addEventListener("click", ()=>{
        var currentPage = getElement(".active");
        currentPage.className = currentPage.className.replace("active", "");
        navLinks[i].className += " active";
    })
}


