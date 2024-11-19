// Variables
const firstname = document.getElementById('firstname');
const age =  document.getElementById('age');
const pwd = document.getElementById('pwd');
const pwdConfirm = document.getElementById('pwd-confirm');
const toggle = document.querySelector('select');
const hardTruth = document.getElementById('a-hard-truth');
const displayFirstname = document.getElementById('display-firstname');

// Fonctions
function isEighteen(age) {
    return parseInt(age, 10) >= 18;
}

function postMessage(event) {
    displayFirstname.textContent = event.target.value;
}

function showTruth(event) {
    // Montre ou cache le message en fonction de l'âge
    if (isEighteen(event.target.value)) {
        hardTruth.style.visibility = 'visible';
    } else {
        hardTruth.style.visibility = 'hidden';
    }
}

function validPwd() {

    switch (true) {
        case pwd.value.length < 6:
            pwd.style.color = 'red';
            break;
        case pwd.value === pwdConfirm.value:
            pwd.style.color = 'green';
            pwdConfirm.style.color = 'green';
            break;
        default:
            pwd.style.color = 'black';
            break;
    }
}


function darkMode(event) {
    switch(event.target.value) {
        case 'dark':
            console.log('inswitch');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            break;
        case 'light':
            console.log('inswitch');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            break;
    }
}
// Ecouteurs d'événements
firstname.addEventListener('keyup', postMessage);
age.addEventListener('keyup', showTruth);
pwd.addEventListener('keyup', validPwd);
pwdConfirm.addEventListener('keyup', validPwd);
toggle.addEventListener('change', darkMode);