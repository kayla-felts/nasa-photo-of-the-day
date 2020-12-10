import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {ThemeProvider} from 'styled-components'
import theme from './Theme'
import App from "./App";

ReactDOM.render(
    <ThemeProvider theme = {theme}>
        <App />
    </ThemeProvider>,
 document.getElementById("root"));


export const BASE_URL = 'https://api.nasa.gov/planetary/apod'
export const API_KEY = 'api_key=tKj1OMcfCpIMlgPxXr5gMM5dlp3dSizPeM6OBfNe'
