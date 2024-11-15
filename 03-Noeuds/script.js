// Exercice 3
    // Déclaration des constantes
    const students = ["Angélique", "Antoine", "Arnaud", "Benjamin", "Corentin", "Cristelle", "Diana", "Donatien", "Edouard", "Farid", "Hakim", "Hugo", "Jason", "Josias", "Matteo", "Maxime", "Mohab", "Mohamed", "Nora", "Olivia", "Pierre", "Reda", "René", "Séba", "Stéphen", "Théo", "Thibaut", "Vincent"]
    const article = document.querySelector('article');

    // Déclaration des fonctions
    // Fonction pour déterminer si une couleur est sombre
     function isColorDark(r, g, b) { 
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
         return luminance < 0.5; 
     }
    
    // Fonction pour extraire les valeurs RGB d'une chaîne RGB
    function getRgbValues(rgbString) { 
        rgbString = rgbString.replace('rgb(', '').replace(')', '')
        const valuesArray = rgbString.split(',');
        const r = parseInt(valuesArray[0].trim()); 
        const g = parseInt(valuesArray[1].trim()); 
        const b = parseInt(valuesArray[2].trim());
        return [r, g, b]
    }

    // Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
    function shuffleArray(array) { 
        for (let i = array.length - 1; i > 0; i--) {
             const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]]; 
            } 
        }
    
    // Mélanger le tableau des étudiants (POINT 3)
    shuffleArray(students);

    // Créer les sections (POINT 1)
    students.forEach(student => {
        const newSection = document.createElement('section')
        newSection.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        
        const newParagraph = document.createElement('p')
        newParagraph.textContent = student

        newSection.appendChild(newParagraph)
        article.appendChild(newSection)

        // Changer la couleur du texte en fonction de la luminance relative du background (POINT 2)
        const [r, g, b] = getRgbValues(newSection.style.backgroundColor); 
        isColorDark(r, g, b) ?
            newSection.style.color = 'white' : 
            newSection.style.color = 'black';
    });
    
    
    
    