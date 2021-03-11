import React, { Component } from 'react';
import BooksList from "../components/BooksList";

export default class BooksIndexContainer extends Component {
    
    state = {
        books: [],
        loading: true
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
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                {this.state.loading ? (
                    'loading spinner'
                ) : (
                    <BooksList books={this.state.books} />
                )}
            </section>
        )
    }
}