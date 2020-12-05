import React, {useEffect, useState} from 'react';
import './global.scss'
import axios from 'axios';
import {API_URLS, AXIOS_CONFIG} from './config';
import {Issue, Statuses} from './types'
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
    const storeIssues = (response: any) => {
        const issues = response.data.reduce((state: any, issue: Issue) => {
            const {status} = issue;
            state[status].push(issue);
            return state;
        }, getInitialState());
        setIssues(issues);
    };
    const [issues, setIssues] = useState(getInitialState());
    const [originColumn, setOriginColumn] = useState('')
    const [destinationColumn, setDestinationColumn] = useState('');
    useEffect(() => {
        axios.get(API_URLS.GET_ISSUES, AXIOS_CONFIG).then(storeIssues).catch(console.error);
    }, []);

    const updateIssue = (updatedIssue: Issue) => {
        axios.post(API_URLS.UPDATE_ISSUE, {updatedIssue}, AXIOS_CONFIG).then(() => console.log('successfully updated issue')).catch(console.error);
    }

    // handlers for drag and drop of a card
    const dragAndDropHandlers = {
        onDragEnd: (i: Number) => {
            const stateCopy = JSON.parse(JSON.stringify(issues));
            const [issue] = stateCopy[originColumn].splice(i, 1);
            stateCopy[destinationColumn].push(issue);
            setIssues(stateCopy);
            // @ts-ignore
            const update = {...issue, status: destinationColumn}
            updateIssue(update);
            // reset the drop index to -1 to clear active styling
            setDestinationColumn('');
            setOriginColumn('')
        },
        onDragOver: (e: any, status: Statuses) => {
            e.preventDefault();
            setDestinationColumn(status);
        },
        onDragStart: (status: Statuses) => {
            setOriginColumn(status);
        }
    }

    return (
        <div className="app-container">
            <div className="app-header">
                <p>Care Bear</p>
            </div>
            <Board
                issues={issues}
                updateIssue={updateIssue}
                dragDropHandlers={dragAndDropHandlers}
                destinationColumn={destinationColumn}
            />
        </div>
    );
}

export default App;
