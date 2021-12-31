import React from 'react';

import BookCover from './BookCover';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {
	constructor(props) {
		super(props);
		this.state = { shelf: this.props.book.shelf || 'none', isLoading: false };
		this.onShelfChange = this.onShelfChange.bind(this);
	}

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	onShelfChange(e) {
		this.setState({ isLoading: true });
		const book = this.props.book;
		const shelf = e.target.value;
		book.shelf = shelf;
		this.props.saveBook(book).then(() => {
			if (this._isMounted) {
				this.setState({ shelf, isLoading: false });
			}
		});
	}

	render() {
		const { isLoading } = this.state;
		const { book } = this.props;

		const imageUrl = book.imageLinks ? book.imageLinks.smallThumbnail : '';
		const title = book.title || '';
		const authors = book.authors ? book.authors.join(' | ') : '';

		return (
			<div className="book">
				<div className="book-top">
					{isLoading && (
						<div className="spinner">
							<div className="bounce1"></div>
							<div className="bounce2"></div>
							<div className="bounce3"></div>
						</div>
					)}
					<BookCover imageUrl={imageUrl} />
					<BookShelfChanger value={this.state.shelf} onChange={this.onShelfChange} />
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{authors}</div>
			</div>
		);
	}
}

export default Book;
