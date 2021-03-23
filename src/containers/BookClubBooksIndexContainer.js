import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchBookClubBooks } from "../actions/bookClubBooks";
import BookClubBooksList from "../components/BookClubBooksList";

class BookClubBooksIndexContainer extends Component {

    componentDidMount() {
        const bookClubId = this.props.match.params.id;
        this.props.dispatchFetchBookClubBooks(bookClubId) ;
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
                  <BookClubBooksList />  
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
        dispatchFetchBookClubBooks: (bookClubId) => dispatch(fetchBookClubBooks(bookClubId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookClubBooksIndexContainer)