import React from 'react';
import BookListItem from './BookListItem'

const BooksList = ({books}) => {
    return (
        <>
            <h1>Books that match your search</h1>
            <ul>
                {books.map(book => <BookListItem key={book.id} book={book}/>)}
            </ul>
        </>
    )
};

export default BooksList;
