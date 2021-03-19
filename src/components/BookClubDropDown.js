import React, { Component } from 'react';

class BookClubDropDown extends Component {
    constructor() {
        super();
        
        this.state = {
            showDropDown: false,
        }

        this.showDropDown = this.showDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
    }

    showDropDown(event) {
        event.preventDefault();
        this.setState({ showDropDown: true }, () => {
            document.addEventListener('click', this.closeDropDown);
        });
    };

    closeDropDown() {
        this.setState({ showDropDown: false }, () => {
            document.removeEventListener('click', this.closeDropDown);
        });
    }
    
    render() {
        return (
            <div>
                <button onClick={this.showDropDown}>
                    Select book club
                </button>  
            {          
                this.state.showDropDown
                    ? (
                        <div className="bookClubList">
                            <button> Book club 1 </button>
                            <button> Book club 2 </button>
                        </div>
                    )    
                    : (
                     null
                    )
            }
            </div>
        )
    }
}

export default BookClubDropDown;