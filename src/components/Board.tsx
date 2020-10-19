import * as React from 'react';
import {BoardProps, Statuses, Issue, StatusesDisplayMap} from '../types';
import IssueCard from "./IssueCard";

export default (props: BoardProps) => {
    const { dropIndex, dragDropHandlers } = props;
    const { onDrag, onDrop, onDragStart, onDragEnd, onDragOver } = dragDropHandlers;
    return (
        <div className="board-container">
            {[Statuses.Backlog, Statuses.InProgress, Statuses.Done].map((status, i) => {
                return (
                    <div className={dropIndex === i ? "board-column active" : "board-column"} key={`board-column-${status}`} onDragOver={(e) => onDragOver(e, i)}>
                        <p className="board-column-header">{StatusesDisplayMap[status]}</p>
                        {
                            props.issues[status].map((issue: Issue, i: number) => {
                                return <IssueCard key={issue.id} issue={issue} updateIssue={props.updateIssue} onDrag={onDrag} onDrop={onDrop} onDragStart={onDragStart} onDragEnd={onDragEnd} />
                            })
                        }
                    </div>
                );
            })}
        </div>
    )
}