import {
  CarsActionsType,
  LoadCarsActionInterface,
  ICar,
  FetchCarsActionInterface,
  AddNewCarActionInterface,
  AddCarToStateActionInterface,
  LoadCarFromApiActionInterface,
  DeleteCarActionInterface,
  ClearCarAtionInterface,
} from "./carsActionTypes";

export const LoadCars = (payload: ICar): LoadCarsActionInterface => {
  return {
    type: CarsActionsType.LOAD_CARS_TO_STATE,
    payload,
  };
};

export const fetchCars = (): FetchCarsActionInterface => {
  return {
    type: CarsActionsType.FETCH_CARS,
  };
};

export const AddNewCars = (payload: ICar): AddNewCarActionInterface => {
  return {
    type: CarsActionsType.ADD_NEW_CARS_TO_STATE,
    payload,
  };
};

export const AddCarToState = (payload: ICar): AddCarToStateActionInterface => {
  return {
    type: CarsActionsType.ADD_CAR_TO_STATE,
    payload,
  };
};

export const LoadCarFromApi = (payload: string): LoadCarFromApiActionInterface => {
  return {
    type: CarsActionsType.LOAD_CAR_FROM_API,
    payload,
  };
};

export const DeleteCar = (payload: string | undefined): DeleteCarActionInterface => {
  return{
    type: CarsActionsType.DELETE_CAR,
    payload
  }
}

export const ClearCar = (): ClearCarAtionInterface => {
  return{
    type: CarsActionsType.CLEAR_CAR
  }
}

export type CarsActions =
  | LoadCarsActionInterface
  | FetchCarsActionInterface
  | AddNewCarActionInterface
  | AddCarToStateActionInterface
  | LoadCarFromApiActionInterface
  | DeleteCarActionInterface
  | ClearCarAtionInterface
