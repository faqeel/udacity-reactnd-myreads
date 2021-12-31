import React from 'react';
import { Routes, Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';

import BooksList from './components/BooksList';
import SearchBooks from './components/SearchBooks';

import './App.css';

class BooksApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { books: [] };
		this.saveBook = this.saveBook.bind(this);
	}

	componentDidMount() {
		this.fetchBooks();
	}

	async fetchBooks() {
		const data = await BooksAPI.getAll();
		this.setState({ books: data });
	}

	async saveBook(book) {
		await BooksAPI.update(book, book.shelf);
		await this.fetchBooks();
	}

	render() {
		const { books } = this.state;

		return (
			<div className="app">
				<Routes>
					<Route exact path="/" element={<BooksList books={books} saveBook={this.saveBook} />} />
					<Route path="/search" element={<SearchBooks books={books} saveBook={this.saveBook} />} />
				</Routes>
			</div>
		);
	}
}

export default BooksApp;
