import {
    SUCCESSFULLY_CREATED_USER_BOOK_CLUB,
} from ".";

export const createUserBookClub = (bookClub) => {
    return (dispatch) => {
      return fetch('http://localhost:3001/user_book_clubs', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user_book_club: bookClub})
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            return res.json().then(errors => Promise.reject(errors))
          }
        })
        .then(userBookClubJson => {
          dispatch({
            type: SUCCESSFULLY_CREATED_USER_BOOK_CLUB,
            payload: userBookClubJson
          });
          return userBookClubJson
        })
    }
  }