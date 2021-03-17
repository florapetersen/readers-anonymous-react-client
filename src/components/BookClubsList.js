import React from "react";
import BookClubListItem from './BookClubListItem';

const BookClubsList = (props) => {
    return (
        <>
            <h1>Book Clubs List</h1>
            <ul>
                {bookClubs.map(bookClub => <BookClubListItem key={bookClub.id} bookClub={bookClub}/>)} 
                <button onClick={() => props.delete(bookClub)}>DELETE</button>
            </ul>
        </>
    )
}

export default BookClubsList;