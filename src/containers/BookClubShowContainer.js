import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchBookClub } from "../actions/bookClubs";
import BookClub from "../components/BookClub";

class BookClubShowContainer extends Component {
    state = {
        bookClub: {},
        loading: true,
    };

    componentDidMount() {
        const bookClubId = this.props.match.params.id;
        this.props.dispatchFetchBookClub(bookClubId)
    }

    render() {
        if (this.props.loadingState !== "successful") {
            return <div>Loading Spinner</div>;
        } 
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                <h1 className="text-3xl font-bold text-center mb-8">
                    <BookClub bookClub={this.props.bookClub}></BookClub>
                </h1>
            </section>
        );
    }
}

const mapStateToProps = (state, { match }) => {
    const bookClubId = match.params.id
    return {
        bookClub: state.bookClubs.list.find(bookClub => bookClub.id == bookClubId),
        loadingState: state.bookClubs.loadingState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchBookClub: (bookClubId) => dispatch(fetchBookClub(bookClubId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookClubShowContainer)

