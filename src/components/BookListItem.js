import React from 'react';
import { Link } from 'react-router-dom'

const BookListItem = ({book}) => {
    return (
        <li className="" key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
        </li>
    );
}

export default BookListItem