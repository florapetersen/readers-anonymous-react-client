import React from "react";
import BookClubListItem from './BookClubListItem';

const BookClubsList = (props) => {
    return (
        <>
            <h1>Book Clubs List</h1>
            <ul>
                {props.bookClubs.map(bookClub => <BookClubListItem key={bookClub.id} bookClub={bookClub}/>)} 
            </ul>
        </>
    )
}

export default BookClubsList;