const initialState = {
    bookClubs: [],

}

export default function bookClubsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BOOKCLUB':
            return {
                ...state,
                bookClubs: [...state.bookClubs, action.bookClub]
            };
        case 'REMOVE_BOOKCLUB':
            index = state.bookClubs.findIndex(bookClub => bookClub.id === action.id);
            return {
                ...state,
                bookClubs: [...state.bookClubs.slice(0, index), ...state.bookClubs.slice(index + 1)]
            };
        default:
            return state;
    }
}