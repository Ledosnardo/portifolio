const perfil = document.querySelector("#perfil-image");

perfil.addEventListener("click", e => {
    perfil.classList.toggle("flip");
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


document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }
    
    window.addEventListener('mouseover', (e) => {
        tgX = e.clientX;
        tgY = e.clientY;
    })

    move();
})
