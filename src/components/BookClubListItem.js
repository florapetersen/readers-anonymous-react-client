import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBookClub } from '../actions/bookClubs'

const BookClubListItem = ({ bookClub, dispatchDeleteBookClub }) => {
    return (
        <li className="" key={bookClub.id}>
            <Link to={`/bookClubs/${bookClub.id}`}>{bookClub.name}</Link>
            <button onClick={() => dispatchDeleteBookClub(bookClub.id)}>DELETE</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteBookClub: (bookClubId) => dispatch(deleteBookClub(bookClubId))
    }
}

export default connect(null, mapDispatchToProps)(BookClubListItem)