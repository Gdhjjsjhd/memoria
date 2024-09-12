const input = document.querySelector('login_input');
const button = document.querySelector('login_button');
const form = document.querySelector('login-form');

const validateInput = ({target}) => {
    if(target.value.lenght > 3) {
        button.removeAttribute('disabled');
        return;
    } else {
        button.setAttribute('disabled', '');
    }

    button.setAttribute('disabled', '')
}

const handleSubmit = (event) => {
    event.preventDeFault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submt', handleSubmit);