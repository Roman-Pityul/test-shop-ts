import {Action} from 'redux'

export enum PropertyActionTypes {
    LOAD_PROPERTY_TO_STATE = 'LOAD_PROPERTY_TO_STATE',
    LOAD_NEW_PROPERTY_TO_STATE = 'LOAD_NEW_PROPERTY_TO_STATE',
    FETCH_PROPERTY = 'FETCH_PROPERTY',
    DELETE_PROPERTY = 'DELETE_PROPERTY'
}

export interface IProperty {
    id: string,
    name: string,
    type: string
}

export interface PropertyState {
    property: IProperty[],
    isLoad: boolean
}

export interface LoadPropertyActionInterface extends Action<PropertyActionTypes> {
    type: PropertyActionTypes.LOAD_PROPERTY_TO_STATE,
    payload: IProperty
}

export interface LoadNewPropertyToStateActionInterface extends Action<PropertyActionTypes> {
    type: PropertyActionTypes.LOAD_NEW_PROPERTY_TO_STATE,
    payload: IProperty
}

export interface FetchPropertyActionInterface extends Action<PropertyActionTypes> {
    type: PropertyActionTypes.FETCH_PROPERTY,
}

export interface DeletePropertyActionInterface extends Action<PropertyActionTypes> {
    type: PropertyActionTypes.DELETE_PROPERTY,
    payload: string | undefined
}

