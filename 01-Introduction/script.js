// Exercice 1
    // Point 1:
    console.log(document.title);

    // Point 2:
    document.title = 'Modifying the DOM';

    // Point 3:
    //document.body.style.backgroundColor = 'hotpink';
    document.body.style.backgroundColor = 'rgb(30, 25, 148)';
    
    // Point 4:
    const bodyChildren = document.body.children;
    const secondChild = bodyChildren[1]; 

    // Point 5:
    for (const child of secondChild.children) {
        console.log(child);
    };


