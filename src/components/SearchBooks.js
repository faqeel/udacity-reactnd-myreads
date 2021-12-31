import React from 'react';
import debounce from 'lodash.debounce';

import * as BooksAPI from '../BooksAPI';
import * as Utils from '../Utils';

import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';

class SearchBooks extends React.Component {
	constructor(props) {
		super(props);
		this.state = { results: [] };
		this.onSearch = this.onSearch.bind(this);
		this.search = this.search.bind(this);
	}

	debounceSearch = debounce(this.search, 500);

	async search(query) {
		if (!query) {
			this.setState({ results: [] });
			return;
		}

		const data = await BooksAPI.search(query);

		if (data.error) {
			this.setState({ results: [] });
			return;
		}

		this.setState({ results: data.map((book) => Utils.getBookById(this.props.books, book.id) || book) });
	}

	onSearch(e) {
		this.debounceSearch(e.target.value.trim());
	}

	render() {
		const { saveBook } = this.props;
		const { results } = this.state;

		return (
			<div className="search-books">
				<SearchBooksBar onSearch={this.onSearch} />
				<SearchBooksResults books={results} saveBook={saveBook} />
			</div>
		);
	}
}

export default SearchBooks;
