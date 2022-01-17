import axios from 'axios'
import {ICar} from '../redux/cars/carsActionTypes'

export const CarsApi = {
    async fetchCars(): Promise<ICar[]> {
        const data = await axios.get<ICar[]>('http://localhost:3001/cars')
        return data.data
    },
    async getCarById(id: string): Promise<ICar> {
        const car = await axios.get<ICar>('http://localhost:3001/cars/' + id)
        return car.data
    },
    async addCar(payload: ICar): Promise<ICar> {
        const car = await axios.post<ICar>('http://localhost:3001/cars', payload)
        return car.data
    },
    remooveCar(id: string | undefined): void {
        axios.delete('http://localhost:3001/cars/' + id)
    }
}