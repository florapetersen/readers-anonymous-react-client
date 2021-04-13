import {
    SUCCESSFULLY_CREATED_USER_BOOK_CLUB,
    START_LOADING_USER_BOOK_CLUB,
    SUCCESSFULLY_LOADED_USER_BOOK_CLUB
} from ".";

export const createUserBookClub = (bookClub) => {
    return (dispatch) => {
      return fetch('http://localhost:3001/user_book_clubs', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({user_book_club: {book_club_id: bookClub.id}})
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

  export const fetchUserBookClub = (userBookClubId) => {
    return (dispatch) => {
      dispatch({ type: START_LOADING_USER_BOOK_CLUB, payload: userBookClubId });
      fetch(`http://localhost:3001/user_book_clubs/${userBookClubId}`)
        .then((res) => res.json())
        .then((userBookClubJson) => {
          dispatch({
            type: SUCCESSFULLY_LOADED_USER_BOOK_CLUB,
            payload: userBookClubJson
          })
        });
    };
  };