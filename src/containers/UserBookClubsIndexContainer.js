import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchUserBookClubs } from "../actions/userBookClubs";
import UserBookClubsList from "../components/UserBookClubsList";
/*import { deleteBookClub } from "../actions/bookClubs";*/

class UserBookClubsIndexContainer extends Component {

    componentDidMount() {
        this.props.dispatchFetchUserBookClubs();
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
                    <UserBookClubsList userBookClubs={this.props.userBookClubs}/></div>
                )}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userBookClubs: state.userBookClubs.list,
        loadingState: state.userBookClubs.loadingState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchUserBookClubs: () => dispatch(fetchUserBookClubs()),
        /*dispatchDeleteUserBookClub: (userBookClubId) => dispatch(deleteUserBookClub(userBookClubId))*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBookClubsIndexContainer)