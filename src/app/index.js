import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import App from "./components/containers/FormContainer";
import store from "./store";

const wrapper = document.getElementById("create-article-form");

if(wrapper){
  render(
    <Provider store={store}>
        <App />
    </Provider>,
    wrapper);
}


