import { 
    SUCCESSFULLY_CREATED_USER_BOOK_CLUB,
    START_LOADING_USER_BOOK_CLUB,
    SUCCESSFULLY_LOADED_USER_BOOK_CLUB
} from "../actions";

const initialState = {
    loadingState: "notStarted",
    list: []
}

export default function userBookClubsReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESSFULLY_CREATED_USER_BOOK_CLUB:
            return {
                ...state,
                list: state.list.concat(action.payload)
            };
        case START_LOADING_USER_BOOK_CLUB:
            return { 
                ...state, loadingState: "inProgress" };
        case SUCCESSFULLY_LOADED_USER_BOOK_CLUB:
            return {
                ...state, 
                loadingState: "successful",
                list: [ ...state.list.filter(bookClub => bookClub.id !== action.payload.id), action.payload ]};
        default:
            return state;
    }   
};