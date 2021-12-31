import React from 'react';

import { Link } from 'react-router-dom';

class SearchBooksBar extends React.Component {
	render() {
		const { onSearch } = this.props;

		return (
			<div className="search-books-bar">
				<Link to="/">
					<button className="close-search" type="button">
						Close
					</button>
				</Link>
				<div className="search-books-input-wrapper">
					<input type="text" onChange={onSearch} placeholder="Search by title or author" />
				</div>
			</div>
		);
	}
}

export default SearchBooksBar;
