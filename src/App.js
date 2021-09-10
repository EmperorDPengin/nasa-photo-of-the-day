import React, {useState, useEffect} from "react";
import axios from 'axios';

import { BASE_URL, API_KEY} from './consts/index';

import MediaPlayer from './components/MediaPlayer';

import "./App.css";
import styled from "styled-components";

const StyledBody = styled.div`
  width: 80%;

  h1 {
    margin-top: 0;
  }

  h2 {
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
    border-bottom: ${pr => pr.theme.primaryColor} solid 1px;
  }

  h6 {
    text-align: end;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    text-align: left ;
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    background-color: #282c34;
    padding-bottom: 1rem;
    border-bottom: ${pr => pr.theme.secondaryColor} solid 1px;
  }
`



function App() {
  const [apodData, setApodData] = useState([]);

  ///USE EFFECTS~~
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then( res => {
      console.log(res);
      setApodData(res.data);
    })
    .catch(err => {
      console.log(err);
    })

    return () => {
      console.log('cleaning up server request');
    }
  }, [])

  ///ACTUAL DISPLAY!!!
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <h1>NASA's<br/>Astronomy Picture of The Day</h1>
        </div>
        <StyledBody>
          <MediaPlayer url={apodData.url}/>
          <h2>{apodData.title}</h2>
          <h6>{apodData.date}</h6>
          <p>{apodData.explanation}</p>
        </StyledBody>
      </header>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
