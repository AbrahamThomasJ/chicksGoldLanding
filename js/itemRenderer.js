class ItemRenderer {
    constructor(itemsContainerId) {
        this.itemsContainer = document.getElementById(itemsContainerId);
    }

    renderItems(items) {
        this.itemsContainer.innerHTML = '';
        items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.classList.add('product-card');

            itemCard.innerHTML = `
                <div class="product-header">
                    <div class="stock-info">
                        ${item.isOnSale ? `<div class="on-sale-advice-container"><span><div class="dot"></div>ON SALE</span></div>` : ''}
                        <span class="stock-status">${item.stockStatus}</span>
                    </div>
                    <div class="quantity-selection">
                        <div class="number-arrows"><div class="arrow down">▼</div></div>
                        <div class="quantity-input"><input type="text" value="1" min="0" max="999999"></div>
                        <div class="number-arrows"><div class="arrow up">▲</div></div>
                    </div>
                </div>
                <div class="product-image">
                    <figure class="figure-product-image">
                        <img src="${item.image}" alt="Product Image">
                    </figure>
                </div>
                <div class="product-info">
                    <div class="product-name-category">
                        <div class="product-name">${item.name}</div>
                        <div class="category-icon">
                            <img src="${item.categoryIcon}" alt="Category Icon">
                        </div>
                    </div>
                    <div class="price-container">
                        <div class="product-price">$${item.price.toFixed(2)}</div>
                        ${item.oldPrice ? `<div class="product-price old-price">$${item.oldPrice.toFixed(2)}</div>` : ''}
                    </div>
                </div>
                <div class="product-description">
                    <span class="description">${item.description}</span>
                </div>
                <div class="product-actions">
                    <div class="details-container">
                        <a href="#" class="button details-button">Details</a>
                    </div>
                    <button class="button add-button">
                        <span>Add</span>
                        <div class="cart-icon-container">
                            <img src="./src/icons/cart.svg" alt="cart">
                        </div>
                    </button>
                </div>
            `;
            this.itemsContainer.appendChild(itemCard);
        });
    }
}
