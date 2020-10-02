import React, {useEffect, useState} from 'react';
import './global.scss'
import axios from 'axios';
import {AXIOS_CONFIG, API_URLS} from './config';
import {Statuses} from './types'
import Board from './components/Board'


// need to reset initial state object on each re-render otherwise state updates wont trigger a re-render bc pointing to same object in memory.
const getInitialState = () => JSON.parse(JSON.stringify({
  [Statuses.Backlog]: [],
  [Statuses.InProgress]: [],
  [Statuses.Done]: [],
}));

function App() {
  const storeIssues = (response) => {
    const issues = response.data.reduce((state, issue) => {
      const { status } = issue;
      state[status].push(issue);
      return state;
    }, getInitialState());
    setIssues(issues);
  };
  const [issues, setIssues] = useState(getInitialState());
  useEffect(() => {
    axios.get(API_URLS.GET_ISSUES, AXIOS_CONFIG).then(storeIssues).catch(console.error);
  }, []);
  
  const updateIssue = (issue) => {
    axios.post(API_URLS.UPDATE_ISSUE, issue, AXIOS_CONFIG).then(() => console.log('successfully updated issue')).catch(console.error);
  }
  
  return (
    <div className="app-container">
      <div className="app-header">
        <p>Care Bear</p>
      </div>
      <Board issues={issues} updateIssue={updateIssue} />
    </div>
  );
}

export default App;
