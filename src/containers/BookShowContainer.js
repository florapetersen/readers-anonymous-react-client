import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchBookClub } from "../actions/bookClubs";
import BookClub from "../components/BookClub";
import Book from "../components/Book";
import { fetchBook } from "../actions/books";

class BookShowContainer extends Component {
    state = {
        book: {},
        loading: true,
    };

    componentDidMount() {
        const bookId = this.props.match.params.id;
        this.props.dispatchFetchBook(bookId)

    }

    render() {
        if (this.props.loadingState !== "successful") {
            return <div>Loading Spinner</div>;
        } 
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                <h1 className="text-3xl font-bold text-center mb-8">
                    <Book book={this.props.book}></Book>
                </h1>
            </section>
        );
    }
}

const mapStateToProps = (state, { match }) => {
    const bookId = match.params.id
    return {
        book: state.books.list.find((book) => book.id == bookId),
        loadingState: state.books.loadingState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchBook: (bookId) => dispatch(fetchBook(bookId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShowContainer)