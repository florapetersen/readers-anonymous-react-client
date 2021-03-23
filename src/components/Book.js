import React from 'react';
import { Link } from 'react-router-dom';
import BookClubBookFormContainer from '../containers/BookClubBookFormContainer';
import BookClubsDropDown from "./BookClubsDropDown";

const Book = ({ book }) => {
    return (
        <div> 
            <p><h1>{book.volumeInfo.title}</h1></p>
            <p><h2>by {book.volumeInfo.authors[0]}</h2></p>
            <p>Synopsis: {book.volumeInfo.description}</p>
            <p>Would you like to assign this book to a book club? Choose a club!<BookClubsDropDown /></p>
        </div>
    )
}

export default Book