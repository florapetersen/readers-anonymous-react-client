import { ADD_FLASH_MESSAGE } from '../actions'
import shortid from 'shortid';

export default function flashMessagesReducer(state = [], action) {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.payload.type,
                    text: action.payload.text
                }
            ]
        default:
            return state;
    }
}