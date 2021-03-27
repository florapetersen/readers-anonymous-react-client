import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchBookClubs } from "../actions/bookClubs";
import { createBookClubBook } from "../actions/bookClubBooks";


class BookClubDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookClubs: [],
        }
    }

    componentDidMount() {
        this.props.dispatchFetchBookClubs() ;
    }

    selectBookClub = (e) => {
        let bookClubBookId = e.target.value;
        console.log(bookClubBookId);
        this.props.dispatchCreateBookClubBook(bookClubBookId)
    }

    render() {
        let bookClubsList = this.props.bookClubs.length > 0
            && this.props.bookClubs.map((item, i) => {
                return (
                    <option key={i} value={item.id}>{item.name}</option>
                )
            }, this);

            return (
                <div>
                    <select onChange={this.selectBookClub}>
                        {bookClubsList}
                    </select>
                </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        bookClubs: state.bookClubs.list,
        loadingState: state.bookClubs.loadingState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchBookClubs: () => dispatch(fetchBookClubs()),
        dispatchCreateBookClubBook: (bookClubBookId) => dispatch(createBookClubBook(bookClubBookId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookClubDropDown);