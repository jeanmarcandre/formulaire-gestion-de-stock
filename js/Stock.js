/**
 * GESTION DE STOCK
 */
 class Stock {
    /**
     * Constructeur
     */
    constructor() {
        this.stock = [];
    }

    /**
     * Ajoute un article au stock
     */
    newArticle(ref, name, price) {
        // console.log(this.stock.length);
        // Vérifie si le stock est vide
        if (this.stock.length !== 0) {
            // Parcours le tableau de stock et créer en retour un tableau contenant des
            // booleans selon si la référence que je veux ajouter est déjà prise ou non
            const articles = this.stock.map(article => article.includes(ref));
            // console.log(articles);

            // Si le tableau contient un boolean à "true", alors c'est que celui-ci contient
            // une référence déjà prise
            if (articles.includes(true)) {
                // Retourne une "erreur"
                return false;
            }
            else {
                // Sinon, je fusionne le tableau de stock avec le nouvel article à inserer
                this.stock = [...this.stock, ...[[ref, name, price]]];
            }
        }
        else {
            // Insère un article sans vérifie l'unicité de la référence, car le tableau des
            // stocks est vide
            this.stock = [[ref, name, price]];
        }

        return true;
    }

    /**
     * Retourne le stock
     */
    getStock() {
        return this.stock;
    }
 }        