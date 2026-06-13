let img = document.querySelector('img');
let botao = document.querySelector('.myButton');

function jogaDado () { 

let num = Math.floor(Math.random() * 6) + 1;
let ramdomDiceImg = 'images/' + 'dice' + num + '.png'; 
img.setAttribute('src', ramdomDiceImg);

}

botao.addEventListener('click', jogaDado);
jogaDado()