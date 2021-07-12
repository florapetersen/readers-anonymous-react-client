import React from 'react'
import { connect } from 'react-redux'
import {createUserBookClub} from "../actions/userBookClubs"
import { useContext } from "react";
import { FlashProviderContext } from "react-simple-widgets";

const BookClub = ({ bookClub, dispatchCreateUserBookClub}) => {

    const { flashError, flashWarning, flashInfo, flashSuccess } = useContext(FlashProviderContext);
    const message = "You have joined this book club!";

    function handleClick(e) {
        dispatchCreateUserBookClub(bookClub);
        flashSuccess("Success", <u>{message}</u>, () => alert("Success flash message"))
        flashError("Error", <u>{message}</u>, () => alert("Error!"))
    }

    return (
        <div> 
            <p><h1>{bookClub.name}</h1></p>
            <p><h1>Category: {bookClub.category}</h1>
            <h1>About us: {bookClub.description}</h1></p>
            <button 
                className="btn btn-success btn-sm"
                onClick={handleClick()}>
                Join this club!
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateUserBookClub: (bookClub) => dispatch(createUserBookClub(bookClub)),
    }
}


export default connect(null, mapDispatchToProps)(BookClub)