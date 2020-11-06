import React, { useState, useEffect } from "react";
import Photo from './Components/Photo'
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './index'



function App() {
  
  const [pod, setPod] = useState([]);

  useEffect(() => {
    const getPod = () => {
      axios
        .get(`${BASE_URL}?${API_KEY}&date=2020-11-02`)

        .then((res) => {
          setPod(res.data);
        })
        .catch((error) => {
          debugger;
        });
    };
    getPod();
  }, []);



  return (
    <div className="app">
      <div>
        <h1>NASA Photo Of The Day!!</h1>
      </div>
      <div>
      {<Photo data = {pod}/>}
      </div>
    </div>
  );
  
}


export default App;
