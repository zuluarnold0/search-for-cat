import { SET_SEARCH_FIELD, FETCH_CATS_SUCCESS, FETCH_CATS_FAILURE, FETCH_CATS_PENDING } from './constants';

export const setSearchField = (text) => {
    return (dispatch) => {
        dispatch({ type: SET_SEARCH_FIELD, payload: text })
    }
}

export const fetchCats = () => {
    return (dispatch) => {
    dispatch({ type: FETCH_CATS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: FETCH_CATS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: FETCH_CATS_FAILURE, payload: error }))
    }
}