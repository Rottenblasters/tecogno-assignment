import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";
import { data } from "../data/data";

const initialUserState = {
  customers: data,
  currentCustomer: data.find((element) => element.status === 'unresolved'),
  isLoading: true
};

const customer_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.GET_CUSTOMER:
      return {
        ...state,
        isLoading: false,
        customers: action.payload.customers,
        currentCustomer: action.payload.customer
      };
    case actionTypes.SET_CUSTOMER:
      return {
        ...state,
        currentCustomer: action.payload.customer
      };  
    default:
      return state;
  }
};



const rootReducer = combineReducers({
  customerData: customer_reducer
});

export default rootReducer;
