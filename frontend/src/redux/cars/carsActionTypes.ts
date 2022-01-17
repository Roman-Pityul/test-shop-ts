import {Action} from 'redux'

export interface ICar {
    id?: string,
    image: string,
    name: string,
    price: string,
    description?: string
    property?: []
}

export enum CarsActionsType {
    LOAD_CARS_TO_STATE = 'LOAD_CARS_TO_STATE',
    ADD_NEW_CARS_TO_STATE = "ADD_NEW_CARS_TO_STATE",
    FETCH_CARS = "FETCH_CARS",
    ADD_CAR_TO_STATE = 'ADD_CAR_TO_STATE',
    LOAD_CAR_FROM_API = 'LOAD_CAR_FROM_API',
    DELETE_CAR = 'DELETE_CAR',
    CLEAR_CAR = 'CLEAR_CAR'
}

export interface CarsState {
    cars: ICar[],
    car: ICar | null,
    isLoad: boolean
}

export interface LoadCarsActionInterface extends Action<CarsActionsType> {
    type: CarsActionsType.LOAD_CARS_TO_STATE,
    payload: ICar
} 

export interface FetchCarsActionInterface extends Action<CarsActionsType> {
    type: CarsActionsType.FETCH_CARS
} 

export interface AddNewCarActionInterface extends Action<CarsActionsType> {
    type: CarsActionsType.ADD_NEW_CARS_TO_STATE,
    payload: ICar
}

export interface AddCarToStateActionInterface extends Action<CarsActionsType>{
    type: CarsActionsType.ADD_CAR_TO_STATE,
    payload: ICar
}

export interface LoadCarFromApiActionInterface extends Action<CarsActionsType>{
    type: CarsActionsType.LOAD_CAR_FROM_API,
    payload: string
}

export interface DeleteCarActionInterface extends Action<CarsActionsType> {
    type: CarsActionsType.DELETE_CAR,
    payload: string | undefined
}

export interface ClearCarAtionInterface extends Action<CarsActionsType> {
    type: CarsActionsType.CLEAR_CAR
}