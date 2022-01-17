import {combineReducers} from 'redux'
import {carsReducer} from './cars/carsReducer'
import {propertyReducer} from './property/propertyReducer'

export const rootReducer = combineReducers({
    cars: carsReducer,
    property: propertyReducer
})