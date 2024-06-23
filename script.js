const button1 = document.querySelector('#triangulo');

button1.addEventListener('click', () => {
    let altura = document.querySelector('#altura').value;
    let largura = document.querySelector('#largura').value;
    document.querySelector('#triangulop').textContent = (altura * largura) / 2
})

const button2 = document.querySelector('#retangulo');

button2.addEventListener('click', () => {
    let altura = document.querySelector('#altura1').value;
    let largura = document.querySelector('#largura1').value;
    document.querySelector('#retangulop').textContent = (altura * largura)
})