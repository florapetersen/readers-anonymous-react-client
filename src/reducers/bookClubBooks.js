import { 
    START_LOADING_BOOK_CLUB_BOOKS,
    SUCCESSFULLY_LOADED_BOOK_CLUB_BOOKS,
    SUCCESSFULLY_CREATED_BOOK_CLUB_BOOK
} from "../actions";

const initialState = {
    loadingState: 'notStarted',
    list: [],
}

export default function bookClubBooksReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_BOOK_CLUB_BOOKS:
            return { ...state, loadingState: 'inProgress' }
        case SUCCESSFULLY_LOADED_BOOK_CLUB_BOOKS:
            return {
                list: action.payload,
                loadingState: 'successful'
            }
        case SUCCESSFULLY_CREATED_BOOK_CLUB_BOOK:
            return {
                ...state,
                list: state.list.concat(action.payload)
            }
    default:
        return state;
    }
}
          