import React from 'react';
import { Link } from 'react-router-dom'

const BookClubListItem = ({ bookClub }) => {
    return (
        <li className="" key={bookClub.id}>
            <Link to={`/bookClubs/${bookClub.id}`}>{bookClub.name}</Link>
        </li>
    )
}

export default BookClubListItem