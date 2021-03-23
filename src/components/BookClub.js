import React from 'react';

const BookClub = ({ bookClub }) => {
    console.log(bookClub)
    return (
        <div> 
            <p><h1>{bookClub.name}</h1></p>
            <p><h1>Category: {bookClub.category}</h1>
            <h1>About us: {bookClub.description}</h1></p>
        </div>
    )
}

export default BookClub

//<h1>{bookClub.bookClub.meeting_time}</h1>