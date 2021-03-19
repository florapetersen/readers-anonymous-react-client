import { START_LOADING_BOOKS, SUCCESSFULLY_LOADED_BOOKS, START_LOADING_BOOK, SUCCESSFULLY_LOADED_BOOK } from '.'

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

export const fetchBooks = (query) => {
    let URL = `${BASE_URL}?q=${encodeURIComponent(query)}`
    return (dispatch) => {
        dispatch({ type: START_LOADING_BOOKS })
        fetch(URL, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then(({ items }) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_BOOKS,
                    payload: items
                })
            })
    }
}

export const fetchBook = (bookId) => {
    let URL = `${BASE_URL}/${encodeURIComponent(bookId)}`
    return (dispatch) => {
        dispatch({ type: START_LOADING_BOOK })
        fetch(URL, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((item) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_BOOK,
                    payload: item
                })
            })
    }
}

