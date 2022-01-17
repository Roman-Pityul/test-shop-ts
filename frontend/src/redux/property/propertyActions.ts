import { CarsActionsType } from '../cars/carsActionTypes'
import {PropertyActionTypes, LoadPropertyActionInterface, FetchPropertyActionInterface, IProperty, LoadNewPropertyToStateActionInterface, DeletePropertyActionInterface} from './propertyActionTypes'

export const fetchProperty = (): FetchPropertyActionInterface => {
    return {
        type: PropertyActionTypes.FETCH_PROPERTY
    }
}

export const LoadProperty = (payload: IProperty): LoadPropertyActionInterface => {
    return{
        type: PropertyActionTypes.LOAD_PROPERTY_TO_STATE,
        payload
    }
}

export const LoadNewProperty = (payload: IProperty): LoadNewPropertyToStateActionInterface => {
    return{
        type: PropertyActionTypes.LOAD_NEW_PROPERTY_TO_STATE,
        payload
    }
}

export const DeleteProperty = (payload: string | undefined): DeletePropertyActionInterface => {
    return{
        type: PropertyActionTypes.DELETE_PROPERTY,
        payload
    }
}

export type PropertyActions =
| FetchPropertyActionInterface
| LoadPropertyActionInterface
| LoadNewPropertyToStateActionInterface
| DeletePropertyActionInterface