import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import { fetchCollectionsStart } from './searchbox/search.sagas'


const sagaMiddleware = createSagaMiddleware()

const middleWares = [sagaMiddleware, logger] 

// if (process.env.NODE_ENV === 'development') {
//     middleWares.push(logger)
// }

const store = createStore(rootReducer, applyMiddleware(...middleWares))

sagaMiddleware.run(fetchCollectionsStart)


export default store