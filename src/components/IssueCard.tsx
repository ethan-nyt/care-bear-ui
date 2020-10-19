import * as React from 'react';
import {IssueCardProps} from '../types';
import {Card, Icon} from 'semantic-ui-react';

export default (props: IssueCardProps) => {
    return (
        <div className="issue-card-container" draggable onDragOver={e => e.preventDefault()} onDrop={props.onDrop} onDrag={() => props.onDrag(props.issue.status)} onDragStart={props.onDragStart} onDragEnd={props.onDragEnd}>
            <Card className="issue-card">
                <Card.Header><Icon name="exclamation circle" /></Card.Header>
                <Card.Content>
                    <p className="issue-card-header">{props.issue.rank}</p>
                    <p>{props.issue.message.text}</p>
                </Card.Content>
            </Card>
        </div>
    );
}