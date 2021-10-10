import { combineReducers } from "redux";
// import cakeReducer from './cake/cakeReducer'
// import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  // cake: cakeReducer,
  // iceCream: iceCreamReducer,
  item: userReducer,
});

export default rootReducer;
