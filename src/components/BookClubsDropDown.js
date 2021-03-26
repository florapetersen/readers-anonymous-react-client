import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchBookClubs } from "../actions/bookClubs";


class BookClubDropDown extends Component {
    constructor(props) {
        super(props);
        //this.selectBookClub = this.selectBookClub.bind(this);
        this.state = {
            bookClubs: [],
        }
    }

    componentDidMount() {
        this.props.dispatchFetchBookClubs() ;
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
                    <select>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookClubDropDown);