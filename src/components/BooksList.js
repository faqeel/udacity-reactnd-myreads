import React from 'react';
import { Link } from 'react-router-dom';

import { Shelf, getBooksByShelf } from '../Utils';

import BookShelf from './BookShelf';

class BooksList extends React.Component {
	render() {
		const { books, saveBook } = this.props;

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					{Object.values(Shelf).map((shelf) => (
						<BookShelf
							key={shelf.code}
							title={shelf.name}
							books={getBooksByShelf(books, shelf.code)}
							saveBook={saveBook}
						/>
					))}
				</div>
				<Link to="/search">
					<div className="open-search">
						<button type="button">Add a book</button>
					</div>
				</Link>
			</div>
		);
	}
}

export default BooksList;
