
/*

Pagination Class
Encapsulates all the pagination logic, making the code modular and easy to manage.

currentPage: Tracks the currently active page.

totalPages and visiblePages: Set the total number of pages and define the number of visible page buttons.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Methods
init: Initializes pagination by setting up page buttons and event listeners.

addEventListeners: Adds click events to the left (prevButton) and right (nextButton) arrow buttons for navigation.

changePage: Switches to the requested page if it falls within a valid range.

updatePaginationButtons: Updates the displayed page buttons based on the current page.

calculateVisiblePages: Determines which page buttons to display according to the current page, centering when possible.

createPageButton: Creates and configures a page number button.

updateArrowButtons: Disables arrow buttons if the user is on the first or last page.




*/
/*

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
*/



/*



*/ 


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
