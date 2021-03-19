import {
    START_LOADING_BOOKS,
    SUCCESSFULLY_LOADED_BOOKS,
    START_LOADING_BOOK,
    SUCCESSFULLY_LOADED_BOOK
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
        case START_LOADING_BOOK:
            return {
                ...state, loadingState: 'inProgress'
            }
        case SUCCESSFULLY_LOADED_BOOK:
            const foundBook = state.list.find(book => book.id === action.payload.id)
            if (foundBook) {
                return {
                    ...state, loadingState: 'successful'
                }
            } 
            return {
                ...state, loadingState: 'successful',
                list: state.list.concat(action.payload)
            }   
        default:
            return state
    }
}