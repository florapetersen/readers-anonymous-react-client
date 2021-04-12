import React, { Component } from 'react';
import { fetchUserBookClub } from "../actions/userBookClubs";
import { connect } from "react-redux";

class BookClubShowContainer extends Component {
    state = {
        userBookClub: {},
        loading: true,
    };

    componentDidMount() {
        const userBookClubId = this.props.match.params.id;
        this.props.dispatchFetchUserBookClub(userBookClubId)
    }

    render() {
        if (this.props.loadingState !== "successful") {
            return <div>Loading Spinner</div>;
        } 
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                <h1 className="text-3xl font-bold text-center mb-8">
                    You are now a member of {this.state.userBookClub.name}!
                </h1>
            </section>
        );
    }
}

const mapStateToProps = (state, { match }) => {
    const userBookClubId = match.params.id
    return {
        userBookClub: state.userBookClubs.list.find(userBookClub => userBookClub.id == userBookClubId),
        loadingState: state.userBookClubs.loadingState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchUserBookClub: (userBookClubId) => dispatch(fetchUserBookClub(userBookClubId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookClubShowContainer)