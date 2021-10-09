import {
    FETCH_FLIGHT_REQUEST,
    FETCH_FLIGHT_SUCCESS,
    FETCH_FLIGHT_FAILURE
  } from './userTypes'
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FLIGHT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_FLIGHT_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case FETCH_FLIGHT_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  