import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserBookClubFormContainer extends Component {
    state = {
        userId: '',
        bookClubId: ''
    }

    componentDidMount() {
        dispatchCreateUserBookClub()
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

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateUserBookClub: () => dispatch(createUserBookClub())
    }
}

export default connect(null, mapDispatchToProps)(UserBookClubFormContainer)

