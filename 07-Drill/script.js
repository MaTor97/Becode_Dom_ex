const films = document.querySelector('ul');
const list = films.childNodes;
let index;
const selectElement = document.createElement('select'); 
document.body.appendChild(selectElement);

const optionImportant = document.createElement('option'); 
optionImportant.value = 'important'; 
optionImportant.text = 'Important Franchises'; 
selectElement.appendChild(optionImportant);

const optionNormal = document.createElement('option'); 
optionNormal.value = 'normal'; 
optionNormal.text = 'Normal Franchises';
selectElement.appendChild(optionNormal);

function alertName(event) {
    if (event.target.textContent !== 'Fast and Furious') {
        alert(event.target.textContent);
    } else {
        alert('The most important franchise ever, ' + 
              'the story of DOM(inic) Toretto\'s family. ' + 
              'It\'s not about car, it\'s about family.');
    }
};

function removeDoubles() {
    const seenTexts = new Set();
    for (let i = 0; i < list.length; i++) {
        if (seenTexts.has(list[i].textContent)) {
            films.removeChild(list[i]);
            i--;
        } else {
            seenTexts.add(list[i].textContent);
        }
    }
}

function mixList(event) {
    let listCopy = Array.from(films.children);
    const fastAndFurious = listCopy.find(item => item.textContent === 'Fast and Furious');
    switch (event.key) {
        case 'r':
            listCopy = listCopy.filter(item => item !== fastAndFurious);
            for (let i = listCopy.length - 1; i > 0; i--) { 
                const j = Math.floor(Math.random() * (i + 1)); 
                [listCopy[i], listCopy[j]] = [listCopy[j], listCopy[i]]; 
            } 
            films.innerHTML = ''; 
            films.appendChild(fastAndFurious); 
            listCopy.forEach(item => films.appendChild(item)); 
            break; 
        case 'd':
            const clone = fastAndFurious.cloneNode(true); 
            films.appendChild(clone); 
            break; 
    } 
}

function toggleVisibility(selectedValue) {
    const franchiseItems = document.querySelectorAll('ul li');
    
    franchiseItems.forEach(item => {
        if (selectedValue === 'important') {
            if (item.classList.contains('important')) {
                item.style.visibility = 'visible';
            } else {
                item.style.visibility = 'hidden';
            }
        } else if (selectedValue === 'normal') {
            if (!item.classList.contains('important')) {
                item.style.visibility = 'visible';
            } else {
                item.style.visibility = 'hidden';
            }
        }
    });
}

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', alertName);
    if (list[i].textContent === 'Fast and Furious') {
        list[i].classList.add('important');
        if (films.firstChild !== list[i]) {
            films.insertBefore(list[i], list[0]);
        }
    }
    removeDoubles();
};

document.body.addEventListener('keyup', mixList);
selectElement.addEventListener('change', function() {
    toggleVisibility(selectElement.value);
});
