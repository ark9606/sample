import {render} from "react-dom";
import React from "react";
import App from "./components/containers/FormContainer";

const wrapper = document.getElementById("create-article-form");

if(wrapper){
  render(<App />, wrapper);
}
