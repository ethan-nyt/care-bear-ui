import * as React from 'react';
import {BoardProps, Statuses, Issue, StatusesDisplayMap} from '../types';
import IssueCard from "./IssueCard";

export default (props: BoardProps) => {
    return (
        <div className="board-container">
            {[Statuses.Backlog, Statuses.InProgress, Statuses.Done].map((status, i) => {
                return (
                    <div className="board-column" key={`board-column-${status}`}>
                        <p className="board-column-header">{StatusesDisplayMap[status]}</p>
                        {
                            props.issues[status].map((issue: Issue, i: number) => {
                                return <IssueCard key={issue.id} issue={issue} updateIssue={props.updateIssue} />
                            })
                        }
                    </div>
                );
            })}
        </div>
    )
}