/**
 * GESTION DE STOCK
 */

// Création de l'objet "magasin"
let magasin = new Stock();

/**
 * Affiche la liste des articles
 */
 let viewArticles = function() {
    // Récupère la liste des stocks
    let stock = magasin.getStock();

    // Récupère l'élément DOM où je souhaite afficher mes articles
    let list = document.querySelector('#viewArticles');

    // Si le tableau n'est pas vide...
    if (stock.length !== 0) {
        // ... alors, on vide l'élément HTML (on vide la liste)
        list.innerHTML = '';

        // On boucle sur le tableau des stocks
        stock.forEach(article => {
            // Remplissage de la liste UL avec du code HTML
            list.innerHTML += `<li>Réf. : ${article[0]}; ${article[1]}, ${article[2]}€</li>`;
        });
    }
    else {
        // ... on affiche un message d'erreur si le stock est vide
        list.innerHTML = '<li>Aucun article</li>';
    }
}

// Récupération du formulaire d'ajout
let formNewArticle = document.querySelector('#newArticle');

// Mise en place d'un écouteur d'évènement sur le formulaire
formNewArticle.addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des éléments du DOM qui m'intéresse
    let alert = document.querySelector('#errorNewArticle');
    let ref = document.querySelector('#ref').value;
    let name = document.querySelector('#name').value;
    let price = document.querySelector('#price').value;

    // Passage des valeurs du formulaire afin d'ajouter un nouvel article
    let response = magasin.newArticle(ref, name, price);

    // Si la réponse est fausse...
    if (response === false) {
        // ... on retire la classe CSS "d-none" du message d'erreur
        alert.classList.remove('d-none');
    }

    console.log(magasin.getStock());
}); 