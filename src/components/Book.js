import React from 'react';

const Book = ({ book }) => {
    return (
        <div> 
            <h1>{book.volumeInfo.title}</h1>
            <h2>{book.volumeInfo.authors}</h2>
            <text>{book.volumeInfo.description}</text>
            <button>Read this book!</button>
        </div>
    )
}

export default Book