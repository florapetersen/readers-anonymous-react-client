import React from 'react';
import BookListItem from './BookListItem'

const BooksList = ({books}) => {
    return (
        <>
            <h1>Books that match your search</h1>
            <ul>
                {books}
            </ul>
        </>
    )
};

export default BooksList;
