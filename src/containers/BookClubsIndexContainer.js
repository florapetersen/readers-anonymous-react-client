import React, { Component } from "react"
import { connect } from 'react-redux'
import BookClubsList from "../components/BookClubsList"

export default class BookClubsIndexContainer extends Component {
    state = {
        bookClubs: []
    };

    render() {
        return (
            <BookClubsList bookClubs={this.state.bookClubs} />
        )
    }
}