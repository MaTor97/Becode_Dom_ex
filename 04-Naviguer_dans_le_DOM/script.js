// Exercice 4
    // Point 1:
    const ol = document.querySelector('ol');
    ol.insertBefore(ol.lastElementChild, ol.firstElementChild);

    // Point 2:
    const sections = document.querySelectorAll('section');
    const thirdSectionH2 = sections[2].querySelector('h2');
    const secondSectionH2 = sections[1].querySelector('h2')

    sections[1].replaceChild(thirdSectionH2, secondSectionH2);
    sections[2].appendChild(secondSectionH2);

    // Point 3:
    sections[2].remove();