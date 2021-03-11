import React, { Component } from 'react';
import BooksList from "../components/BooksList";

export default class BooksIndexContainer extends Component {
    state = {
        books: []
    }

    render() {
        return (
            <BooksList books={this.state.books} />
        )
    }
}