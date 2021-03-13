import { START_LOADING_BOOKS, SUCCESSFULLY_LOADED_BOOKS } from '.'

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export const fetchBooks = (query) => {
    let URL = `${BASE_URL}${encodeURIComponent(query)}`
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

