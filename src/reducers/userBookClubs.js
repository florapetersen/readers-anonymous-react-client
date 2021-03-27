import { 
    SUCCESSFULLY_CREATED_USER_BOOK_CLUB,
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
        };
};