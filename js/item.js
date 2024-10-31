class Item {
    constructor(id, name, image, categoryIcon, price, oldPrice, description, isOnSale, stockStatus) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.categoryIcon = categoryIcon;
        this.price = price;
        this.oldPrice = oldPrice;
        this.description = description;
        this.isOnSale = isOnSale;
        this.stockStatus = stockStatus;
    }
}

// Clase ItemRenderer (responsable de renderizar los elementos en pantalla)

// Clase Pagination (responsable de la lógica de la paginación)

// Datos de ejemplo
const items = Array.from({ length: 30 }, (v, i) => new Item(
    i + 1,
    `Dragon Ball Item ${i + 1}`,
    "./src/img/dragon-ball.jpg",
    "./src/icons/dragon.svg",
    450.55,
    522.50,
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    i % 2 === 0,  // Si es par, está en oferta
    "In stock"
));