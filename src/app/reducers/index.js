import { combineReducers } from "redux";


import math from "./mathReducer";
import user from "./userReducer";


export default 
    combineReducers({
        math,
        user
    })
