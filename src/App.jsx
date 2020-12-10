import React, { useState, useEffect } from "react";
import Photo from './Components/Photo'
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './index';
import styled from 'styled-components';



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
      <StyledTitle>
      <div>
        <h1>NASA Photo Of The Day!!</h1>
      </div>
      </StyledTitle>
      <div>
      {<Photo data = {pod}/>}
      </div>
    </div>
  );
  
}

const StyledTitle = styled.div`
display:flex;
width:100%;
justify-content:center;
color:${(pr) => (pr.theme.primaryColor)};
`

export default App;
