import React from "react";
import BookClubListItem from './BookClubListItem';

const BookClubsList = ({ bookClubs }) => {
    return (
        <>
            <p><h1>Browse Book Clubs:</h1></p>
            <ul>
                {bookClubs.map(bookClub => <BookClubListItem key={bookClub.id} bookClub={bookClub}/>)} 
            </ul>
        </>
    )
}

export default BookClubsList;