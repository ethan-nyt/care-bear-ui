import * as React from 'react';
import {IssueCardProps, IssueRanks} from '../types';
import {Card, TextArea} from 'semantic-ui-react';

export default (props: IssueCardProps) => {
    return (
        <div className="issue-card-container" draggable onDragStart={() => props.onDragStart(props.status)} onDragEnd={props.onDragEnd}>
            <Card className="issue-card">
                <Card.Header textAlign="center"><span>Importance: <strong>{props.issue.rank}</strong></span></Card.Header>
                <Card.Content className="issue-card-content">
                    <TextArea disabled style={{ minHeight: 300, width: '100%', maxWidth: '100%', minWidth: '100%' }} value={props.issue.message.text} />
                </Card.Content>
            </Card>
        </div>
    );
}