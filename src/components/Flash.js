import React from 'react';
import { render } from 'react-dom';
import FlashMessage from 'react-flash-message';

const Flash = ({bookClub}) => (
    <FlashMessage duration={5000}>
        <strong>You are now a member of {bookClub.name}!</strong>
    </FlashMessage>
)

render(Flash, document.body);

export default Flash