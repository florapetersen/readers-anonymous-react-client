import React from 'react';
import BookClubDropDown from './BookClubDropDown';

const Book = ({ book }) => {
    return (
        <div> 
            <h1>{book.volumeInfo.title}</h1>
            <h2>{book.volumeInfo.authors}</h2>
            <text>{book.volumeInfo.description}</text>
            <BookClubDropDown/>Read this book!
        </div>
    )
}

export default Book