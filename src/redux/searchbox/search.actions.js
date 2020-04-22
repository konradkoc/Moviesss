import {searchActionTypes} from './search.actionTypes'

export const searchFor = searchQuery => ({
    type: searchActionTypes.FETCH_COLLECTIONS,
    payload: searchQuery
})

export const fetchSuccess = collection => ({
    type: searchActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collection
})

export const fetchFail = collection => ({
    type: searchActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collection
})