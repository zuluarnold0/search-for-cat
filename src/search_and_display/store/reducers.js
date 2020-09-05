import { SET_SEARCH_FIELD, FETCH_CATS_SUCCESS, FETCH_CATS_FAILURE, FETCH_CATS_PENDING } from './constants';

const initStateField = {
    searchField: "",
}

export const searchCat = (state=initStateField, action={}) => {
    switch(action.type) {
        case SET_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}

const initStateCats = {
    cats: [],
    error: "",
    isPending: true
}

export const handleFetchedCats = (state=initStateCats, action={}) => {
    switch(action.type) {
        case FETCH_CATS_PENDING:
                return Object.assign({}, state, { isPending: true })
        case FETCH_CATS_SUCCESS:
            return Object.assign({}, state, { cats: action.payload, isPending: false })
        case FETCH_CATS_FAILURE:
            return Object.assign({}, state, { err: action.payload, isPending: false })
        default:
            return state;
    }
}