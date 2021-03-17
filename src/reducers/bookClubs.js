import { 
    START_LOADING_BOOK_CLUBS,
    SUCCESSFULLY_LOADED_BOOK_CLUBS,
    START_LOADING_BOOK_CLUB,
    SUCCESSFULLY_LOADED_BOOK_CLUB, 
    SUCCESSFULLY_CREATED_BOOK_CLUB,
    DELETE_BOOK_CLUB
} from "../actions";

const initialState = {
    loadingState: "notStarted",
    list: []
}

export default function bookClubsReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_BOOK_CLUBS:
            return { ...state, loadingState: "inProgress" };
        case SUCCESSFULLY_LOADED_BOOK_CLUBS:
            return {
            list: action.payload,
            bookClubsLoadingState: "successful",
            };
        case START_LOADING_BOOK_CLUB:
            return { 
                ...state, loadingState: "inProgress" };
        case SUCCESSFULLY_LOADED_BOOK_CLUB:
            return {
                ...state, 
                loadingState: "successful",
                list: action.payload
                };
        case SUCCESSFULLY_CREATED_BOOK_CLUB:
            return {
            ...state,
            list: state.list.concat(action.payload)
            }
        case DELETE_BOOK_CLUB:
            return {
                ...state,
                list: state.list.filter(bookClub => bookClub.id !== action.payload)
            }
    
      default:
        return state;
    }
  }
  