const perfil = document.querySelector("#perfil-image");
const apresentation = document.querySelector("#apresentation");

perfil.addEventListener("click", e => {
    perfil.classList.toggle("flip");
    apresentation.classList.toggle("apresentation2")
})


const linksMenu = document.querySelectorAll('.header__container a');

linksMenu.forEach(item => {
    item.addEventListener('click', scrollToOnIdClick)
})

function scrollToOnIdClick(e) { 
    e.preventDefault();
    const to = getScrollTop(e.target);
    
    scrollToPosition(to);
}

function getScrollTop(e){
    const id = e.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: 'smooth'
    })
}