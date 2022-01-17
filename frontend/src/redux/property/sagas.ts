import {call, put, takeLatest} from 'redux-saga/effects'
import { PropertyApi } from '../../api/propApi'
import { LoadProperty } from './propertyActions'
import { DeletePropertyActionInterface, LoadNewPropertyToStateActionInterface, PropertyActionTypes } from './propertyActionTypes'

export function* FetchPropertyRequest() {
    try{
        const property = yield call(PropertyApi.fetchProperty)
        yield put(LoadProperty(property))
    }
    catch(error) {
        yield console.log("ошибка уровень Saga Property")
    }
}

export function* FetchLoadNewPropertyRequest({payload}: LoadNewPropertyToStateActionInterface) {
    try {
        const data = yield call (PropertyApi.addProperty, payload)
        yield put(LoadProperty(data))
    }
    catch (error) {
        yield console.log(error)
    }
}

export function* FetchDeletePropertyRequest({payload}: DeletePropertyActionInterface) {
    try {
        yield call (PropertyApi.remooveProperty, payload)
    }
    catch (error) {
        yield console.log(error)
    }
}

export function* PropertySaga() {
    yield takeLatest(PropertyActionTypes.FETCH_PROPERTY, FetchPropertyRequest)
    yield takeLatest(PropertyActionTypes.LOAD_NEW_PROPERTY_TO_STATE, FetchLoadNewPropertyRequest)
    yield takeLatest(PropertyActionTypes.DELETE_PROPERTY, FetchDeletePropertyRequest)
}