import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBookClub } from '../actions/bookClubs';

class BookClubFormContainer extends Component {
    state = {
        name: '',
        category: '',
        meeting_time: '',
        errors: {}
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
                console.log(errors)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6">
                <h1 className="text-center text-3xl font-semibold mb-2">New Book Club</h1>
                <fieldset>
                    <p className="h-8 pl-2 text-red-400">{this.state.errors.name}</p>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="Name your book club"
                        className={`w-full border focus:outline-none focus:ring-2 p-4 mb-4  ${
                            this.state.errors.name && "focus:ring-red-400 border-red-400"
                        }`}
                    />
                    <input
                        type="text"
                        name="category"
                        onChange={this.handleChange}
                        value={this.state.category}
                        placeholder="What kind of books will you be reading?"
                        className="w-full border p-4 my-4"
                    />
                    <input
                        type="text"
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                        placeholder="Tell us some more about your book club!"
                        className="w-full border p-4 my-4"
                    />
                </fieldset>
                <button className="w-full p-4 bg-red-900 mt-4 hover:bg-yellow-400 transition-all duration-200" type="submit">Add Book Club</button>
            </form>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateBookClub: (formData) => dispatch(createBookClub(formData))
    }
}

export default connect(null, mapDispatchToProps)(BookClubFormContainer)