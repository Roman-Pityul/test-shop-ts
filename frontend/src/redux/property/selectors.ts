import { RootState } from "../store";
import { PropertyState } from "./propertyActionTypes";

export const SelectPropertyState = (state: RootState): PropertyState => {
    return state.property
}

export const SelectPropertyItems = (state: RootState) => {
    return SelectPropertyState(state).property
}

export const SelectLoad = (state: RootState) => {
    return SelectPropertyState(state).isLoad
} 