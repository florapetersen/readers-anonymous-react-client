import React, { Component } from "react";
import { connect } from 'react-redux';
import BookClubBooksList from "../components/BookClubBooksList";
import { createBookClubBook } from "../actions/bookClubBooks";

class BookClubBooksIndexContainer extends Component {

    componentDidMount() {
        this.props.dispatchCreateBookClubBook() ;
    }

    render() {
        if (this.props.loadingState === "notStarted") {
            return null
        }
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                {this.props.loadingState === "inProgress" ? (
                    "loading spinner"
                ) : (
                    <BookClubBooksList bookClubBooks={this.props.bookClubBooks}/>
                )}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookClubBooks: state.bookClubBooks.list,
        loadingState: state.bookClubBooks.loadingState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateBookClubBook: (bookClub, book) => dispatch(createBookClubBook(bookClub, book)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookClubBooksIndexContainer)