import React from "react";
import ReactDom from "react-dom";
import "./feedback.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import feedbackTemp from './ComponentsMalaka/feedbackTemp';


ReactDOM.render(<feedbackTemp/> , document.getElementById("root")) ;
registerServiceWorker();
