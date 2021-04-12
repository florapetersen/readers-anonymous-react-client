import React from 'react'
import { Link } from 'react-router-dom'

const BookClub = ({ bookClub }) => {
    return (
        <div> 
            <p><h1>{bookClub.name}</h1></p>
            <p><h1>Category: {bookClub.category}</h1>
            <h1>About us: {bookClub.description}</h1></p>
            <Link to={`/userBookClubs/new`} bookClub={bookClub}>Join this club!</Link>
        </div>
    )
}

export default BookClub