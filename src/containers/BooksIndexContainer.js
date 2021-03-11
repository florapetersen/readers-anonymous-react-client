import React, { Component } from 'react';
import BooksList from "../components/BooksList";

export default class BooksIndexContainer extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/books', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(booksJson => {
            console.log('books', booksJson)
            this.setState({
                books: booksJson,
                loading: false
            })
        })
    }

    render() {
        return (
            <BooksList books={this.state.books} />
        )
    }
}