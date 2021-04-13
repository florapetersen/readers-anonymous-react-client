import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchBookClubs } from "../actions/bookClubs";
import BookClubsList from "../components/BookClubsList";
import { deleteBookClub } from "../actions/bookClubs";

class BookClubsIndexContainer extends Component {

    componentDidMount() {
        this.props.dispatchFetchBookClubs();
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
                    <div><p><h1>Welcome to Readers Anonymous!</h1></p>
                    <BookClubsList bookClubs={this.props.bookClubs}/></div>
                )}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookClubs: state.bookClubs.list,
        loadingState: state.bookClubs.loadingState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchBookClubs: () => dispatch(fetchBookClubs()),
        dispatchDeleteBookClub: (bookClubId) => dispatch(deleteBookClub(bookClubId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookClubsIndexContainer)