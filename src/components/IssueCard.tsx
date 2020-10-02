import * as React from 'react';
import {IssueCardProps} from '../types';
import {Card, Icon} from 'semantic-ui-react';

export default (props: IssueCardProps) => {
    return (
        <div className="issue-card-container">
            <Card>
                <Card.Header><Icon name="exclamation circle" /></Card.Header>
                <Card.Content>
                    <p className="issue-card-header">{props.issue.rank}</p>
                    <p>{props.issue.message.text}</p>
                    <p>This is an issue card!</p>
                </Card.Content>
            </Card>
        </div>
    );
}