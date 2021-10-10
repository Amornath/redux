import {
  FETCH_FLIGHT_REQUEST,
  FETCH_FLIGHT_SUCCESS,
  FETCH_FLIGHT_FAILURE,
} from "./userTypes";

const initialState = {
  loading: false,
  items: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FLIGHT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FLIGHT_SUCCESS:
      return {
        loading: false,
        items: action.payload,
        error: "",
      };
    case FETCH_FLIGHT_FAILURE:
      return {
        loading: false,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
