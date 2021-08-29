import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBookClub } from '../actions/bookClubs'
import { Component } from 'react';

class UserBookClubListItem extends Component {

    /*state = {
        stars: 0
    }

    addStar = () => {
        this.setState({stars: this.state.stars + 1})
    }*/

    render() {
        return (
        <li className="" key={this.props.userBookClub.id}>
            <Link to={`/bookClubs/${this.props.userBookClub.id}`}>{this.props.userBookClub.name} </Link>
        </li>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteBookClub: (bookClubId) => dispatch(deleteBookClub(bookClubId))
    }
}

export default connect(null, mapDispatchToProps)(UserBookClubListItem)