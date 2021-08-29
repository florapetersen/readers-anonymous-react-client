import { 
    SUCCESSFULLY_CREATED_USER_BOOK_CLUB,
    START_LOADING_USER_BOOK_CLUB,
    SUCCESSFULLY_LOADED_USER_BOOK_CLUB,
    START_LOADING_USER_BOOK_CLUBS,
    SUCCESSFULLY_LOADED_USER_BOOK_CLUBS
} from "../actions";

const initialState = {
    loadingState: "notStarted",
    list: []
}

export default function userBookClubsReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_USER_BOOK_CLUBS:
            return { ...state, loadingState: "inProgress" };
        case SUCCESSFULLY_LOADED_USER_BOOK_CLUBS:
            return {
            list: action.payload,
            userBookClubsLoadingState: "successful",
            };
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
                list: [ ...state.list.filter(userBookClub => userBookClub.id !== action.payload.id), action.payload ]};
        default:
            return state;
    }   
};