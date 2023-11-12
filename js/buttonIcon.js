const button = document.querySelector('#button-email');

button.addEventListener('click', (e) => {
    const email = 'leonardoatanasiorodrigues@gmail.com';
    const image = document.querySelector('#image-email')

    navigator.clipboard.writeText(email);

    if(navigator.clipboard.writeText(email)){
        image.style.backgroundColor = 'white'
        image.style.boxShadow = '0 0 10px 2px white'
    }

    setInterval(() => {
        image.style.backgroundColor = 'transparent'
        image.style.boxShadow = 'none'
    }, 1000)
})
