const books = require('../model/books');
class booksController {
    async getAll() {
        // return all 
        return new Promise((resolve, _) => resolve(books));
    }

    // getting a single book
    async getBook(id) {
        return new Promise((resolve, reject) => {
            // get the book
            let book = books.find((book) => book.id === parseInt(id));
            if (book) {
                // return the book
                resolve(book);
            } else {
                // return an error
                reject(`book with id ${id} not found `);
            }
        });
    }

    // Getting a page of a book
    async getBookPage(id,number) {
        let book = await this.getBook(id)
        return new Promise((resolve, reject) => {
            // get the page
            let page = book.pages.find((page) => page.number === parseInt(Number));
            if (page) {
                // return the page
                resolve(page);
            } else {
                // return an error
                reject(`page with number ${page} not found `);
            }
        });
    }
}
module.exports = booksController;