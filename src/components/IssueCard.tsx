import * as React from 'react';
import {IssueCardProps} from '../types';
import {Card, TextArea, Form, Icon} from 'semantic-ui-react';

const formatTimestamp = (isoString: string): string => {
    const date = new Date(isoString)
    return `${date.getFullYear()}-${(date.getMonth()+1)}-${date.getDate()}`;
}

export default (props: IssueCardProps) => {
    return (
        <div className="issue-card-container" draggable onDragStart={() => props.onDragStart(props.status)} onDragEnd={props.onDragEnd}>
            <Card className="issue-card" fluid>
                <div className="issue-card-top-section">
                    <Card.Header textAlign="center" style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between' }}>
                        <span>Importance: <strong>{props.issue.rank}</strong></span>
                        {props.issue.link && <a href={props.issue.link} target="_blank"><Icon link name="external alternate" /></a>}
                    </Card.Header>
                    <Card.Meta>
                        <span>Posted by: {props.issue.message.username} on {formatTimestamp(props.issue.timestamp)}</span>
                    </Card.Meta>
                </div>
                <Card.Content className="issue-card-content">
                    <Form><TextArea disabled value={props.issue.message.text} /></Form>
                </Card.Content>
            </Card>
        </div>
    );
}