import React from 'react';

class BookShelfChanger extends React.Component {
	render() {
		const { value, onChange } = this.props;

		return (
			<div className="book-shelf-changer">
				<select value={value} onChange={onChange}>
					<option value="move" disabled>
						Move to...
					</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		);
	}
}

export default BookShelfChanger;
