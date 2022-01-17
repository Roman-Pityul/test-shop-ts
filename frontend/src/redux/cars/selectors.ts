import { RootState } from '../store'
import { CarsState } from './carsActionTypes'

export const selectCarsFromState = (state: RootState): CarsState => {
    return state.cars
}

export const selectCars = (state: RootState) => {
    return selectCarsFromState(state).cars
}

export const selectCar = (state: RootState) => {
    return selectCarsFromState(state).car
}

export const selectLoad = (state: RootState) => {
    return selectCarsFromState(state).isLoad
}