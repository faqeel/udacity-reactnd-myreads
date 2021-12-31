import React from 'react';

import Book from './Book';

class BooksGrid extends React.Component {
	render() {
		const { books, saveBook } = this.props;

		return (
			<ol className="books-grid">
				{books &&
					books.map((book) => (
						<li key={book.id}>
							<Book book={book} saveBook={saveBook} />
						</li>
					))}
			</ol>
		);
	}
}

export default BooksGrid;
