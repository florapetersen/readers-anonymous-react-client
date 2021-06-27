import React from 'react'
import { connect } from 'react-redux'
import {createUserBookClub} from "../actions/userBookClubs"
import {addFlashMessage} from "../actions/flash"
import { useContext } from "react";
import { FlashProviderContext } from "react-simple-widgets";

const BookClub = ({ bookClub, dispatchCreateUserBookClub, dispatchAddFlashMessage }) => {

    function handleClick(e) {
        dispatchCreateUserBookClub(bookClub); //adds UserBookClub object to database 
        //dispatchAddFlashMessage({ //calls dispatchAddFlashMessage function in action creator 
            //type: 'success', //function has two parameters: type and text
            //text: 'You have joined this book club'
        //});

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
        dispatchCreateUserBookClub: (bookClub) => dispatch(createUserBookClub(bookClub)),
        dispatchAddFlashMessage: (message) => dispatch(addFlashMessage(message))
    }
}

export default connect(null, mapDispatchToProps)(BookClub)