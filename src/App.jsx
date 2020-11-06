import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from './index'

function App() {
  const [pod, setPod] = useState([]);

  useEffect(() => {
    axios
    .get(`${BASE_URL}?${API_KEY}&date=2020-11-04`)
  
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      debugger;
    });
  })

  return (
    <div className="App">
      <p>
        NASA Astronomy Photo of the Day!
      </p>
    </div>
  );
}

export default App;
