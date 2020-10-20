import * as React from 'react';
import {IssueCardProps} from '../types';
import {Card, Icon} from 'semantic-ui-react';

export default (props: IssueCardProps) => {
    return (
        <div className="issue-card-container" draggable onDragStart={() => props.onDragStart(props.status)} onDragEnd={props.onDragEnd}>
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