let img = document.querySelectorAll('img')[0];
let img2 = document.querySelectorAll('img')[1];
let botao = document.querySelector('.myButton');

function jogaDado() {
    // Declara as variáveis fora para ambos acessarem
    let num, num2;

    img.classList.add('dado-rolando');
    img2.classList.add('dado-rolando');

    img.addEventListener('animationend', () => {
        num = Math.floor(Math.random() * 6) + 1;
        img.setAttribute('src', 'images/dice' + num + '.png');
        img.classList.remove('dado-rolando');

        if (num2 !== undefined) {
            document.getElementById("result").innerHTML = num + num2;
        }
    }, { once: true });

    img2.addEventListener('animationend', () => {
        num2 = Math.floor(Math.random() * 6) + 1;
        img2.setAttribute('src', 'images/dice' + num2 + '.png');
        img2.classList.remove('dado-rolando');

        if (num !== undefined) {
            document.getElementById("result").innerHTML = num + num2;
        }
    }, { once: true });
}

botao.addEventListener('click', jogaDado);
jogaDado();