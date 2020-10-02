import * as React from 'react';
import {IssueCardProps} from '../types';

export default (props: IssueCardProps) => {
    return (
        <div className="issue-card-container">
            <p className="issue-card-header">{props.issue.rank}</p>
            <p>{props.issue.id}</p>
            <p>This is an issue card!</p>
        </div>
    );
}