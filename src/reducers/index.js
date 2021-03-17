import { combineReducers } from 'redux'
import booksReducer from './books'
import bookClubsReducer from "./bookClubs";

export default combineReducers({
    books: booksReducer,
    bookClubs: bookClubsReducer
})