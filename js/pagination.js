class Pagination {
    constructor(totalItems, itemsPerPage, renderer, paginationButtonsId) {
        this.currentPage = 1;
        this.itemsPerPage = itemsPerPage;
        this.totalPages = Math.ceil(totalItems / itemsPerPage);
        this.renderer = renderer;
        this.paginationButtonsContainer = document.getElementById(paginationButtonsId);

        this.init();
    }

    init() {
        this.updatePaginationButtons();
        this.updateArrowButtons();
        this.renderCurrentPageItems();
        this.addEventListeners();
    }

    addEventListeners() {
        document.getElementById('prev').addEventListener('click', () => this.changePage(this.currentPage - 1));
        document.getElementById('next').addEventListener('click', () => this.changePage(this.currentPage + 1));
    }

    changePage(page) {
        if (page < 1 || page > this.totalPages) return;
        this.currentPage = page;
        this.renderCurrentPageItems();
        this.updatePaginationButtons();
        this.updateArrowButtons();
    }

    renderCurrentPageItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const currentItems = items.slice(startIndex, endIndex);
        this.renderer.renderItems(currentItems);
    }

    updatePaginationButtons() {
        this.paginationButtonsContainer.innerHTML = '';
        for (let i = 1; i <= this.totalPages; i++) {
            const button = this.createPageButton(i);
            this.paginationButtonsContainer.appendChild(button);
        }
    }

    createPageButton(pageNumber) {
        const button = document.createElement('button');
        button.textContent = pageNumber;
        button.classList.add('pagination-button');
        if (pageNumber === this.currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => this.changePage(pageNumber));
        return button;
    }

    updateArrowButtons() {
        document.getElementById('prev').disabled = this.currentPage === 1;
        document.getElementById('next').disabled = this.currentPage === this.totalPages;
    }
}










