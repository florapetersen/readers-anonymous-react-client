import { combineReducers } from 'redux'
import booksReducer from './books'
import bookClubsReducer from "./bookClubs";
import bookClubBooksReducer from "./bookClubBooks";
import userBookClubsReducer from "./userBookClubs";

export default combineReducers({
    books: booksReducer,
    bookClubs: bookClubsReducer,
    bookClubBooks: bookClubBooksReducer,
    userBookClubs: userBookClubsReducer
})