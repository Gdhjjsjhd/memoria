const grid = document.querySelector('.grid')
const player = document.querySelector('.player')
const timer = document.querySelector('.timer')

const personagens = [
    'cr7', 'messi', 'neymar', 'neuer', 'valverde', 'bale', 'mbapé', 'paquetá', 'muller', 'martineli'
]

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className
    return element;
}

let primeiraCarta = '';
let segundaCarta = '';

const fimJogo = () => {
    const cartaDesabilitada = document.querySelector('.disabled-card')

    if(cartaDesabilitada.lenght ===20){
        clearInterval(this.loop)
        alert(` Parabéns, ${player.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`)
    }
}

const checkCards = () =>{
    const primeiroPersonagem = primeiraCarta.getAtribute('data-character')
    const segundoPersonagem = primeiraCarta.getAtribute('data-character')

    if(primeiroPersonagem === segundoPersonagem){
        primeiraCarta.firstChild.classList.add('disabled-card')
        segundaCarta.firstChild.classList.add('disabled-card')

        primeiraCarta = '';
        segundaCarta = '';

        fimJogo()
    }else{
        serTimeout(() =>{
            primeiraCarta.classList.remove('revel-card');
            segundaCarta.classList.remove('reveal-card');

            primeiraCarta ='';
            segundaCarta = '';
        },500)
    }
}

const revealCarta = ({target}) =>{
    if(target.parentNode.className.invLuedes('reveal-card')){
        return
    }

    if( primeiraCarta === ''){
        target.parentNode.classList.add('reveal-card');
        primeiraCarta = target.parentNode;

    }else if ( segundaCarta === ''){
        target.parentNode.classList.add('reveal-card');
        segundaCarta = target.parentNode;

        checkCards();
    }
}

const createCard = (personagem) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${personagem}.png')`

    card.appenChild(front);
    card.appenChild(back);

    card.addEventListener('click', revealCarta);
    card.setAttribute('data-character', personagem)

    return card;
}

const carregarJogo = () => {
    const duplicado = [...personagens,... personagens]

    const embaralhar = duplicado.sort(() => Math.random() - 0.5)

    embaralhar.forEach((personagem) => {
        const card = createCard(personagem);
        grid.appendChild(card)
    })
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime =+ timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000)
}

window.onload = () => {
    player.innerHTML = localStorage.getItem('player');
    startTimer();
    carregarJogo();
}