import React from 'react'
import { connect } from 'react-redux'
import {createUserBookClub} from "../actions/userBookClubs"
import Flash from './Flash'

const BookClub = ({ bookClub, dispatchCreateUserBookClub }) => {

    function handleClick(e) {
        dispatchCreateUserBookClub(bookClub);
        <Flash bookClub={bookClub}/>
    }

    return (
        <div> 
            <p><h1>{bookClub.name}</h1></p>
            <p><h1>Category: {bookClub.category}</h1>
            <h1>About us: {bookClub.description}</h1></p>
            <button onClick={handleClick()}>Join this club!</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateUserBookClub: (bookClub) => dispatch(createUserBookClub(bookClub))
    }
}


export default connect(null, mapDispatchToProps)(BookClub)