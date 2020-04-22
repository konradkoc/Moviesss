import {searchActionTypes} from './search.actionTypes'

const INITIAL_STATE = {
    searchResults: ''
}

const searchReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case searchActionTypes.FETCH_COLLECTIONS:
            return {
                ...state, 
            }
        case searchActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                searchResults: action.payload
            }
        case searchActionTypes.FETCH_COLLECTIONS_FAILURE: {
            return {
                ...state,
                searchResults: []
            }
        }
        default:
            return state
    }
}

export default searchReducer