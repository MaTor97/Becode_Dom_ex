// Exercice 2
    // Point 1:
    const importantElement = document.querySelectorAll('.important');
    importantElement.forEach(element => {
        element.setAttribute('title', 'This is an important item');
    });

    // Point 2:
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        if (!image.classList.contains('important')) {
            image.style.display = 'none';
        }
    });

    // Point 3:
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        console.log(paragraph.innerHTML);
        if (paragraph.classList.length > 0) {
            console.log(paragraph.className);
        }
    });

    // Point 4:
    paragraphs.forEach(paragraph => {
        paragraph.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    });
