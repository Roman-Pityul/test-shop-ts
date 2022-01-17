import { call, put, takeLatest } from "redux-saga/effects";
import { CarsApi } from "../../api/carsApi";
import { AddCarToState, LoadCars } from "./carsActions";
import {
  AddNewCarActionInterface,
  CarsActionsType,
  DeleteCarActionInterface,
  LoadCarFromApiActionInterface,
} from "./carsActionTypes";

export function* fetchCarsRequest() {  
  try {
    const cars = yield call(CarsApi.fetchCars);
    yield put(LoadCars(cars));
  } catch (error) {
    yield console.log("Ошибка, уровень Saga FetchCars");
  }
}

export function* fetchLoadCarFromApiRequest({ payload }: LoadCarFromApiActionInterface) {
  try {
    const car = yield call(CarsApi.getCarById, payload);
    yield put(AddCarToState(car));
  } catch (error) {
    console.log("Ошибка, уровень Saga fetchLoadCarFromApiRequest");
  }
}

export function* fetchAddNewCarToStateRequest({ payload }: AddNewCarActionInterface) {
  try {
    const car = yield call(CarsApi.addCar, payload);
    yield put (AddCarToState(car))
  } catch (error) {
    console.log("Ошибка, уровень Saga fetchAddNewCarToStateRequest");
  }
}

export function* fetchDeleteCarRequest({ payload }: DeleteCarActionInterface) {
  try {
    yield call(CarsApi.remooveCar, payload);
  } catch (error) {
    console.log("Ошибка, уровень Saga fetchDeleteCarRequest");
  }
}

export function* carsSaga() {
  yield takeLatest(CarsActionsType.FETCH_CARS, fetchCarsRequest);
  yield takeLatest(CarsActionsType.LOAD_CAR_FROM_API, fetchLoadCarFromApiRequest);
  yield takeLatest(CarsActionsType.ADD_NEW_CARS_TO_STATE, fetchAddNewCarToStateRequest);
  yield takeLatest(CarsActionsType.DELETE_CAR, fetchDeleteCarRequest);
}
