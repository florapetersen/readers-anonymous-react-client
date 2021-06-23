import React, { Component } from 'react';
import FlashMessagesList from '../components/FlashMessagesList';

class FlashMessage extends Component {

    render() {
        return (
            <div id="flash-message">
                <FlashMessagesList />
            </div>
        )
    }

}

export default FlashMessage;