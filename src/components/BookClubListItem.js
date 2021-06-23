import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBookClub } from '../actions/bookClubs'
import { Component } from 'react';

class BookClubListItem extends Component {

    state = {
        stars: 0
    }

    addStar = () => {
        this.setState({stars: this.state.stars + 1})
    }

    render() {
        return (
        <li className="" key={this.props.bookClub.id}>
            <Link to={`/bookClubs/${this.props.bookClub.id}`}>{this.props.bookClub.name} </Link>
            <p><button onClick={() => this.props.dispatchDeleteBookClub(this.props.bookClub.id)}> DELETE</button></p>
            <p><button onClick={this.addStar}>Add a Star</button></p>
            <p>Stars: {this.state.stars}</p>
        </li>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchDeleteBookClub: (bookClubId) => dispatch(deleteBookClub(bookClubId))
    }
}

export default connect(null, mapDispatchToProps)(BookClubListItem)