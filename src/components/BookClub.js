import React from 'react';

const BookClub = ({ bookClub }) => {
    console.log(bookClub)
    return (
        <div> 
            <h1>{bookClub.bookClub.name}</h1>
            <h1>{bookClub.bookClub.category}</h1>
            <h1>{bookClub.bookClub.description}</h1>
            <h1>{bookClub.bookClub.meeting_time}</h1>
        </div>
    )
}

export default BookClub