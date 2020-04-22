import {combineReducers} from 'redux'
import searchReducer from './searchbox/search.reducer'


const rootReducer = combineReducers({
    search: searchReducer,
})

export default rootReducer