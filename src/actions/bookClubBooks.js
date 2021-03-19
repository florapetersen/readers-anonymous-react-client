import {
    START_LOADING_BOOK_CLUB_BOOKS,
    SUCCESSFULLY_LOADED_BOOK_CLUB_BOOKS,
    SUCCESSFULLY_CREATED_BOOK_CLUB_BOOK
} from ".";

export const createBookClubBook = (bookClub, book) => {
    return (dispatch) => {
      return fetch('http://localhost:3001/book_clubs/:id/book_club_books', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({book_club_book: bookClub, book})
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            return res.json().then(errors => Promise.reject(errors))
          }
        })
        .then(bookClubBookJson => {
          dispatch({
            type: SUCCESSFULLY_CREATED_BOOK_CLUB_BOOK,
            payload: bookClubBookJson
          });
          return bookClubBookJson
        })
    }
  }

  export const fetchBookClubBooks = (bookClub) => {
    return (dispatch) => {
        dispatch({type: START_LOADING_BOOK_CLUB_BOOKS})
        fetch("http://localhost:3001/book_clubs/:id/book_club_books", {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((bookClubBooksJson) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_BOOK_CLUB_BOOKS,
                    payload: bookClubBooksJson
                })
            })
    }
}