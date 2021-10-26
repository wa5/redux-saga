import {call,put,takeEvery} from 'redux-saga/effects'

import {GET_USERs_FETCH,GET_USERs_SUCCESS} from './action'

function usersFetch(){
    return fetch('https://jsonplaceholder.typicode.com/users').then(resp=>resp.json())

}


function* workGetUsersFetch(){
    const users=yield call(usersFetch)
    yield put({type:GET_USERs_SUCCESS,users})
}


function* mySaga() { 

    yield takeEvery(GET_USERs_FETCH,workGetUsersFetch)
 }

 export default mySaga