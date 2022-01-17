import { PropertyActions } from "./propertyActions";
import {
  LoadNewPropertyToStateActionInterface,
  PropertyActionTypes,
  PropertyState,
} from "./propertyActionTypes";

const initialState = {
  property: [],
  isLoad: true
};

const newProperty = (state: PropertyState, action: LoadNewPropertyToStateActionInterface) => {
  const newState = [...state.property, action.payload];
  return newState;
};

export const propertyReducer = (state = initialState, action: PropertyActions) => {
  switch (action.type) {
    case PropertyActionTypes.LOAD_PROPERTY_TO_STATE:
      return {
        ...state,
        property: action.payload,
        isLoad: false,
      };

    case PropertyActionTypes.LOAD_NEW_PROPERTY_TO_STATE:
      return {
        ...state,
        property: newProperty(state, action),
      };

    default:
      return state;
  }
};
