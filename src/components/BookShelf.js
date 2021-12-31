import React from 'react';

import BooksGrid from './BooksGrid';

class BookShelf extends React.Component {
	render() {
		const { title, books, saveBook } = this.props;

		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{title || ''}</h2>
				<div className="bookshelf-books">
					<BooksGrid books={books} saveBook={saveBook} />
				</div>
			</div>
		);
	}
}

export default BookShelf;
