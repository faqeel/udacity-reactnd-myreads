export class Shelf {
	static CURRENTLY_READING = new Shelf('currentlyReading', 'Currently Reading');
	static WANT_TO_READ = new Shelf('wantToRead', 'Want to Read');
	static READ = new Shelf('read', 'Read');

	constructor(code, name) {
		this.code = code;
		this.name = name;
	}
}

export function getBookById(booksList, bookId) {
	if (!Array.isArray(booksList) || !bookId) {
		return null;
	}
	return booksList.find((book) => book.id === bookId);
}

export function getBooksByShelf(booksList, shelf) {
	if (!Array.isArray(booksList)) {
		return [];
	}
	return booksList.filter((book) => book.shelf === shelf);
}
