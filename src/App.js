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

/**
 * TODOS:
 * 1. drag and drop cards from one column to another
 * 2. on drop into a different column, update that issue via api call to reflect new status
 * 3. add a modal component that is opened on click of a card
 * 4. redesign issue card & implement new design (show priority, issue date, truncated text, maybe the author's username)
 * 5. design modal contents & implement new design. mvp just display the full text of the issue here.
 */
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
  
  // handlers for drag and drop of a card
  const dragAndDropHandlers = {
    // invoked when user clicks and drags an issue card.
    // we will need access to the card status.
    onDrag: (status) => {
      console.log('on drag!', status)
    },
    onDrop: () => {
      console.log('on drop!')
    }
  }
  
  return (
    <div className="app-container">
      <div className="app-header">
        <p>Care Bear</p>
      </div>
      <Board issues={issues} updateIssue={updateIssue} dragDropHandlers={dragAndDropHandlers} />
    </div>
  );
}

export default App;
