import React, {useEffect, useState} from 'react';
import './global.scss'
import dotenv from 'dotenv';
import axios from 'axios';
import {API_URLS} from './config';
import {IssueRanks} from './types.ts'

dotenv.config();

function App() {
  const initialState = {
    [IssueRanks.Low]: [],
    [IssueRanks.High]: [],
    [IssueRanks.Critical]: [],
  }
  const [issues, setIssues] = useState({});
  useEffect(() => {
    const token = process.env.REACT_APP_VERIFICATION_TOKEN;
    axios.get(API_URLS.GET_ISSUES, { headers: { 'slack-verification-token': token } }).then(updateIssues).catch(console.error);
  }, []);
  
  const updateIssues = (response) => {
    const issues = response.data.reduce((state, issue) => {
      const { rank } = issue;
      state[rank].push(issue);
      return state;
    }, initialState);
    setIssues(issues);
  }
  
  return (
    <div className="app-container">
      <div className="app-header">
        <p>Care Bear</p>
      </div>
      
    </div>
  );
}

export default App;
