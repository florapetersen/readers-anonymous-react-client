import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUserBookClub } from '../actions/userBookClubs';

class UserBookClubFormContainer extends Component {
    state = {
        userBookClub: this.props.bookClub,
        name: '',
        errors: {}
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatchCreateUserBookClub(this.state.userBookClub)
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
        console.log("hi")
        return (
            <form onSubmit={this.handleSubmit} className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6">
                <h1 className="text-center text-3xl font-semibold mb-2">Join Book Club</h1>
                <fieldset>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="What is your name?"
                        className={`w-full border focus:outline-none focus:ring-2 p-4 mb-4  ${
                            this.state.errors.name && "focus:ring-red-400 border-red-400"
                        }`}
                    />
                </fieldset>
                <button className="w-full p-4 bg-red-900 mt-4 hover:bg-yellow-400 transition-all duration-200" type="submit">Join Book Club</button>
            </form>
    
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateUserBookClub: (bookClub) => dispatch(createUserBookClub(bookClub))
    }
}

export default connect(null, mapDispatchToProps)(UserBookClubFormContainer)

