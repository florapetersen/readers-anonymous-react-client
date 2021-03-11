import React, { Component } from 'react';

export default class BookClubFormContainer extends Component {
    state = {
        name: '',
        category: '',
        meetingTime: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6">
                <h1 className="text-center text-3xl font-semibold mb-2">New Book Club</h1>
                <fieldset>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="Name your book club"
                        className="w-full border p-4 my-4"
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
                        name="meeting_time"
                        onChange={this.handleChange}
                        value={this.state.meetingTime}
                        placeholder="When will your book club meet?"
                        className="w-full border p-4 my-4"
                    />
                </fieldset>
                <button className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-400 transition-all duration-200" type="submit">Add Book Club</button>
            </form>
        )
    }
};