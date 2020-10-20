import * as React from 'react';
import {BoardProps, Statuses, Issue, StatusesDisplayMap} from '../types';
import IssueCard from "./IssueCard";

export default (props: BoardProps) => {
    const { destinationColumn, dragDropHandlers } = props;
    const { onDragEnd, onDragOver, onDragStart } = dragDropHandlers;
    return (
        <div className="board-container">
            {[Statuses.Backlog, Statuses.InProgress, Statuses.Done].map((status) => {
                return (
                    <div className={destinationColumn === status ? "board-column active" : "board-column"} key={`board-column-${status}`} onDragOver={(e) => onDragOver(e, status)}>
                        <p className="board-column-header">{StatusesDisplayMap[status]}</p>
                        {
                            props.issues[status].map((issue: Issue, i: number) => {
                                return <IssueCard key={issue.id} issue={issue} status={status} updateIssue={props.updateIssue} onDragStart={onDragStart} onDragEnd={() => onDragEnd(i)} />
                            })
                        }
                    </div>
                );
            })}
        </div>
    )
}