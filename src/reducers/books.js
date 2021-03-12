import {
    START_LOADING_BOOKS,
    SUCCESSFULLY_LOADED_BOOKS,
} from '../actions'

const initialState = {
    loadingState: 'notStarted',
    list: [],
}

export default function BooksReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_BOOKS:
            return { ...state, loadingState: 'inProgress' }
        case SUCCESSFULLY_LOADED_BOOKS:
            return {
                list: action.payload,
                loadingState: 'successful'
            }
        default:
            return state
    }
}