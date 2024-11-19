// Variables
const actionSquares = document.querySelectorAll('.actionsquare');
const log = document.querySelector('ul');
const displayedSquareWrapper = document.querySelector('.displayedsquare-wrapper');

// Constante pour une couleur au hasard
const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// Fonctions
function createAnotherDiv(event) {
    // Récupérer le carré cliqué
    const clickedSquare = event.target;
  
    // Obtenir la couleur exacte via getComputedStyle
    const color = window.getComputedStyle(clickedSquare).backgroundColor;
  
    // Créer un nouveau carré
    const newSquare = document.createElement('div');
    newSquare.className = 'displayedsquare';
    newSquare.style.backgroundColor = color;
  
    // Ajouter un gestionnaire de clic pour afficher la couleur
    newSquare.addEventListener('click', () => {
      alert(`This square is ${color}`);
    });
  
    // Ajouter le nouveau carré dans le conteneur
    displayedSquareWrapper.appendChild(newSquare);
  
    // Ajouter une entrée dans le journal
    const listItem = document.createElement('li');
    listItem.textContent = `A square with color ${color} was created.`;
    log.appendChild(listItem);
  }
  

function handleKeypress(event) {
    switch (event.key) {
      case ' ':
        // Changer la couleur de fond de la page au hasard
        const color = randomColor();
        document.body.style.backgroundColor = color;
  
        // Ajouter un log pour indiquer le changement
        const listItem = document.createElement('li');
        listItem.textContent = `Background color changed to ${color}.`;
        log.appendChild(listItem);
        break;
  
      case 'l':
        // Effacer tous les éléments du journal
        while (log.firstChild) {
          log.removeChild(log.firstChild);
        }
        break;
  
      case 's':
        // Supprimer tous les carrés affichés
        while (displayedSquareWrapper.firstChild) {
          displayedSquareWrapper.removeChild(displayedSquareWrapper.firstChild);
        }
        break;
  
      default:
        // Si une autre touche est pressée, ne rien faire
        break;
    }
  }
  

// Ecouteur d'événements pour les carrés
actionSquares.forEach(square => {
  square.addEventListener('click', createAnotherDiv);
});

document.body.addEventListener('keypress', handleKeypress);
