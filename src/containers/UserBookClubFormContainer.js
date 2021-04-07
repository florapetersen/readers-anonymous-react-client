import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUserBookClub } from '../actions/userBookClubs';

class UserBookClubFormContainer extends Component {
    state = {
        userId: '',
        bookClubId: ''
    }

    componentDidMount() {
        dispatchCreateUserBookClub(userId, bookClubId)
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatchCreateBookClub(this.state)
            .then((bookClubJson) => {
                this.props.history.push(`/bookClubs/${bookClubJson.id}`);
            })
            .catch(errors => {
                this.setState({
                    errors
                })
            })
    }

    render() {
        return (
            <h1>Hello World!</h1>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateUserBookClub: (userId, bookClubId) => dispatch(createUserBookClub(userId, bookClubId))
    }
}

export default connect(null, mapDispatchToProps)(UserBookClubFormContainer)

