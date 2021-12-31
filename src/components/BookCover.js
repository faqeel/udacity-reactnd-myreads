import React from 'react';

class BookCover extends React.Component {
	render() {
		const { imageUrl } = this.props;

		return (
			<div
				className="book-cover"
				style={{
					width: 128,
					height: 193,
					backgroundImage: `url("${imageUrl || ''}")`,
				}}
			></div>
		);
	}
}

export default BookCover;
