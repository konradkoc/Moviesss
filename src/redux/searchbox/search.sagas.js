import { takeEvery , call , put} from 'redux-saga/effects'
import { searchActionTypes } from './search.actionTypes'

import {fetchSuccess, fetchFail} from './search.actions'


export function* fetchCollectionsAsync(action) {
    //action.payload is our searchQuery from searchBox
    const API_KEY= '0946d9223ef9f8efbdd8a35f5ef3bdc1'

    try {
        const response = yield call(fetch,
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${action.payload}&page=1&include_adult=false`)
        const resData = yield response.json();
        yield put(fetchSuccess(resData))
        console.log(resData)
    } catch (e) {
        yield put(fetchFail())
        console.error(e)
    }  
}

export function* fetchCollectionsStart() {
     yield takeEvery(searchActionTypes.FETCH_COLLECTIONS, fetchCollectionsAsync)
}


// yield put(setRecords(responseBody.records));