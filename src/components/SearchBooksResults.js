import React from 'react';

import BooksGrid from './BooksGrid';

class SearchBooksResults extends React.Component {
	render() {
		const { books, saveBook } = this.props;

		return (
			<div className="search-books-results">
				<BooksGrid books={books} saveBook={saveBook} />
			</div>
		);
	}
}

export default SearchBooksResults;
