import React from 'react';

const BookClubListItem = ({ bookClub }) => {
    return <li className="" key={bookClub.id}>{bookClub.name}</li>
}

export default BookClubListItem