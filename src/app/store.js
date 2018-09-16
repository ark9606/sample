import {createStore, applyMiddleware} from "redux";
import createLogger from "redux-logger";

import AppReducer from "./reducers";

export default createStore(
    AppReducer,
    {},
    applyMiddleware(createLogger)
);