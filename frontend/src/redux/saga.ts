import { all } from 'redux-saga/effects'
import { carsSaga } from './cars/sagas'
import { PropertySaga } from './property/sagas'

export function* rootSaga() {
    yield all([carsSaga(), PropertySaga()])
}