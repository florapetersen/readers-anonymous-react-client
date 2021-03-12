import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/fetchBooks'
import BooksList from "../components/BooksList";

class BooksIndexContainer extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchBooks()
    }

    render() {
        return (
            <section className="max-w-6xl w-11/12 mx-auto mt-16">
                <form onSubmit={this.handleSubmit} className="max-w-6xl w-3/4 mx-auto mt-16 shadow-lg px-4 py-6">
                    <h1 className="text-center text-3xl font-semibold mb-2">Find a Book</h1>
                    <fieldset>
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            placeholder="Search by keyword"
                            className="w-full border p-4 my-4"
                        />
                    </fieldset>
                    <button className="w-full p-4 bg-red-800 mt-4 hover:bg-yellow-400 transition-all duration-200" type="submit">Search</button>
                </form>
                <BooksList books={this.fetchBooks}/>
            </section>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        books: state.books.list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks: () => dispatch(fetchBooks())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksIndexContainer)