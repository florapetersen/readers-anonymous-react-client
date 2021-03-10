import React, { Component } from 'react';

export default class BookClubFormContainer extends Component {
    state = {
        name: '',
        category: '',
        meetingTime: ''
    }

    handleFormSubmit = () => {

    }

    render() {
        return (
            <div>
                <h1>New Book Club</h1>
                <form className="container" onSubmit={this.handleFormSubmit}>
                </form>
            </div>
        )
    }
};