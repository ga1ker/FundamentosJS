const container = document.querySelector('.container');
const image = document.querySelector('#image')
const guardar = document.querySelector('#guardadito')

function setImage(e){
    const imageSrc= e.target.src;
    image.src= imageSrc;
}


container.addEventListener('click', setImage)

