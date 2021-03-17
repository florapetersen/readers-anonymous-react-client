import {
    START_LOADING_BOOK_CLUBS,
    START_LOADING_BOOK_CLUB,
    SUCCESSFULLY_LOADED_BOOK_CLUBS,
    SUCCESSFULLY_LOADED_BOOK_CLUB,
    SUCCESSFULLY_CREATED_BOOK_CLUB,
    DELETE_BOOK_CLUB
} from ".";

export const fetchBookClubs = () => {
    return (dispatch) => {
        dispatch({type: START_LOADING_BOOK_CLUBS})
        fetch("http://localhost:3001/book_clubs", {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((bookClubsJson) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_BOOK_CLUBS,
                    payload: bookClubsJson
                })
            })
    }
}

export const fetchBookClub = (bookClubId) => {
    return (dispatch) => {
      dispatch({ type: START_LOADING_BOOK_CLUB, payload: bookClubId });
      fetch(`http://localhost:3001/book_clubs/${bookClubId}`)
        .then((res) => res.json())
        .then((bookClubJson) => {
          dispatch({
            type: SUCCESSFULLY_LOADED_BOOK_CLUB,
            payload: bookClubJson
          })
        });
    };
  };

  export const createBookClub = (formData) => {
    return (dispatch) => {
      return fetch('http://localhost:3001/book_clubs', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({book_club: formData})
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            return res.json().then(errors => Promise.reject(errors))
          }
        })
        .then(bookClubJson => {
          dispatch({
            type: SUCCESSFULLY_CREATED_BOOK_CLUB,
            payload: bookClubJson
          });
          return bookClubJson
        })
    }
  }