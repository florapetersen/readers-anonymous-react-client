import { START_LOADING_BOOKS, SUCCESSFULLY_LOADED_BOOKS } from '.'

export const fetchBooks = () => {
    return (dispatch) => {
        dispatch({ type: START_LOADING_BOOKS })
        fetch('https://www.googleapis.com/books/v1/volumes?q=harrypotter', {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((booksJson) => {
                dispatch({
                    type: SUCCESSFULLY_LOADED_BOOKS,
                    payload: booksJson,
                })
            })
    }
}