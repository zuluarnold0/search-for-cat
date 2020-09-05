import { searchCat } from './reducers';
import { handleFetchedCats } from './reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ searchCat, handleFetchedCats });