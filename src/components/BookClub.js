import React from 'react';
import { connect } from 'react-redux';
import { deleteBookClub } from '../actions/bookClubs';

const BookClub = ({ bookClub, dispatchDeleteBookClub }) => {
    console.log(bookClub)
    return (
        <div> 
            <p><h1>{bookClub.name}</h1></p>
            <p><h1>Category: {bookClub.category}</h1>
            <h1>About us: {bookClub.description}</h1></p>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteBookClub: (bookClubId) => dispatch(deleteBookClub(bookClubId))
    }
}

export default connect(null, mapDispatchToProps)(BookClub)

//<h1>{bookClub.bookClub.meeting_time}</h1>