# EXERCICE 7

## DOM drill

1. Utilisez 'childnodes' pour lister tous les enfants de ul

2. Bouclez à travers chaque enfant, dans cette boucle:

    - Utilisez une condition pour itérer seulement sur les éléments nodes.

    - Trouvez l'élément qui contient 'Fast and Furious'.

    - Si ce n'est pas le premier élément de la liste, bougez le au dessus de la liste.

    - Etant donné que 'Fast and Furious' est la plus grande franchise de tous les temps, donnez lui la classe '.important'.

    - Ajoutez un écouteur d'événements sur chaque élément de la liste.

    - Si l'utilisateur clique sur l'élément, un pop-up devra afficher le nom de l'élément cliqué.

    - Si l'élément cliqué est 'Fast and Furious', il devra afficher 'The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.'.

    - Enlevez les doublons avec 'removeChild'. (Les doublons sont les éléments avec éxactement le même contenu, isEqualNode pourrait être utile)

3. Ajoutez un écouteur d'événements 'keyup' sur le 'body' du document, quand l'utilisateur appuie sur 'r', la liste devra être réarrangée de manière aléatoire. Sauf, bien sûr, pour 'Fast and Furious' qui reste la plus grande franchise de tous les temps et devra donc rester au dessus de la liste

4. Modifiez la fonction précédente pour que quand la touche 'd' est sélectionnée, l'élément 'Fast and Furious' sois cloné.

5. En utilisant createElement, créez un tag 'select' dans la div précédente avec deux options, 'franchises importantes' et 'franchises normales'.

6. Ajoutez un écouteur d'événements 'change' sur le 'select'.

    - Si l'option 'franchise importante est choisie', n'affichez que les objets de la liste avec la classe '.important'. (Utilisez la 'visibiliy').