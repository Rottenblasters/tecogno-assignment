import * as actionTypes from "./types";

/* Customer Actions */
export const getCustomers = (data) => {
  const customer = data.find((element) => {
    return element.status === 'unresolved';
  });
  return {
    type: actionTypes.GET_CUSTOMER,
    payload: {
      customers: data,
      customer: customer
    }
  };
};

export const setCustomer = (customer, data) => {
  const currentCustomer = data.find((element) => {
    return element.id === customer.id;
  });

  return {
    type: actionTypes.SET_CUSTOMER,
    payload: {
      customer: currentCustomer
    }
  };
};


