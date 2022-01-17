import { CarsActions } from "./carsActions";
import { CarsActionsType, CarsState } from "./carsActionTypes";

const initialstate = {
  cars: [],
  car: null,
  isLoad: true
};

const newCars = (state: CarsState, action: any) => {
  const cars = [...state.cars, action.payload]
  return cars
}

export const carsReducer = (state = initialstate, action: CarsActions) => {
  switch (action.type) {

    case CarsActionsType.LOAD_CARS_TO_STATE:
      return {
        ...state,
        cars: action.payload,
        isLoad: false,
        car: null
      };

    case CarsActionsType.ADD_NEW_CARS_TO_STATE:
      return{
        ...state,
        cars: newCars(state, action)
      }

    case CarsActionsType.ADD_CAR_TO_STATE:
      return{
        ...state,
        car: action.payload
      }

    case CarsActionsType.CLEAR_CAR:
      return{
        ...state,
        car: null
      }

    default:
      return state;
  }
};
