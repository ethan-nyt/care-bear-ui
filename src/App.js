import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import dotenv from 'dotenv';
import axios from 'axios';
import {API_URLS} from './config';

dotenv.config();

function App() {
  useEffect(() => {
    const token = process.env.REACT_APP_VERIFICATION_TOKEN;
    axios.get(API_URLS.GET_ISSUES, { headers: { 'slack-verification-token': token } }).then(console.log);
  }, []);
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
