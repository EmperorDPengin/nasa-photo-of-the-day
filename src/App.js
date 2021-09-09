import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import { BASE_URL, API_KEY} from './consts/index';
import MediaPlayer from './components/MediaPlayer';

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
        <div className="App-body">
          <MediaPlayer url={apodData.url}/>
          <h2>{apodData.title}</h2>
          <h6>{apodData.date}</h6>
          <p>{apodData.explanation}</p>
        </div>
      </header>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
