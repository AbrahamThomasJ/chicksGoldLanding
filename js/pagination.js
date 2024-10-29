

class Pagination {
    constructor(totalPages, visiblePages = 5) {
        this.currentPage = 1;
        this.totalPages = totalPages;
        this.visiblePages = visiblePages;
        this.paginationButtonsContainer = document.getElementById('paginationButtons');
        this.prevButton = document.getElementById('prev');
        this.nextButton = document.getElementById('next');

        this.init();
    }

    init() {
        this.updatePaginationButtons();
        this.addEventListeners();
    }

    addEventListeners() {
        this.prevButton.addEventListener('click', () => this.changePage(this.currentPage - 1));
        this.nextButton.addEventListener('click', () => this.changePage(this.currentPage + 1));
    }

    changePage(page) {
        if (page < 1 || page > this.totalPages) return;
        this.currentPage = page;
        this.updatePaginationButtons();
    }

    updatePaginationButtons() {
        this.paginationButtonsContainer.innerHTML = '';
        const { startPage, endPage } = this.calculateVisiblePages();
        for (let i = startPage; i <= endPage; i++) {
            const button = this.createPageButton(i);
            this.paginationButtonsContainer.appendChild(button);
        }
        this.updateArrowButtons();
    }

    calculateVisiblePages() {
        let startPage = Math.max(1, this.currentPage - Math.floor(this.visiblePages / 2));
        let endPage = Math.min(this.totalPages, startPage + this.visiblePages - 1);
        if (endPage - startPage + 1 < this.visiblePages) {
            startPage = Math.max(1, endPage - this.visiblePages + 1);
        }
        return { startPage, endPage };
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
        this.prevButton.disabled = this.currentPage === 1;
        this.nextButton.disabled = this.currentPage === this.totalPages;
    }
}

const totalPaginas = 10;
new Pagination(totalPaginas);
