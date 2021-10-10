import axios from "axios";
import {
  FETCH_FLIGHT_REQUEST,
  FETCH_FLIGHT_SUCCESS,
  FETCH_FLIGHT_FAILURE,
} from "./userTypes";

export const fetchitems = () => {
  return (dispatch) => {
    dispatch(fetchFlightRequest());
    axios

      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchFlightSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchFlightFailure(error.message));
      });
  };
};

export const fetchFlightRequest = () => {
  return {
    type: FETCH_FLIGHT_REQUEST,
  };
};

export const fetchFlightSuccess = (users) => {
  return {
    type: FETCH_FLIGHT_SUCCESS,
    payload: users,
  };
};

export const fetchFlightFailure = (error) => {
  return {
    type: FETCH_FLIGHT_FAILURE,
    payload: error,
  };
};
