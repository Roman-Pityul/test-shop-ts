import axios from 'axios'
import { IProperty } from '../redux/property/propertyActionTypes'

export const PropertyApi = {
    async fetchProperty() {
        const data = await axios.get<IProperty[]>('http://localhost:3001/property')
        return data.data
    },
    async addProperty(payload: IProperty): Promise<IProperty> {
        const prop = await axios.post<IProperty>('http://localhost:3001/property', payload)
        return prop.data
    },
    remooveProperty(id: string | undefined) {
        axios.delete('http://localhost:3001/property/' + id)
    }
}
