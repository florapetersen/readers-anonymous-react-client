import React from 'react'
import { connect } from 'react-redux'
import {createUserBookClub} from "../actions/userBookClubs"

const BookClub = ({ bookClub, dispatchCreateUserBookClub }) => {

    return (
        <div> 
            <p><h1>{bookClub.name}</h1></p>
            <p><h1>Category: {bookClub.category}</h1>
            <h1>About us: {bookClub.description}</h1></p>
            <button onClick={() => dispatchCreateUserBookClub(bookClub)}>Join this club!</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateUserBookClub: (bookClub) => dispatch(createUserBookClub(bookClub))
    }
}


export default connect(null, mapDispatchToProps)(BookClub)