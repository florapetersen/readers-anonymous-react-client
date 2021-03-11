import React from 'react';

const BookListItem = ({book}) => {
    return <li className="" key={book.id}>{book.title}</li>
}

export default BookListItem;