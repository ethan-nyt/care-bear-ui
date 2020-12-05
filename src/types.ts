export enum IssueRanks {
    Low = "low",
    High = "high",
    Critical = "critical"
}

export enum Statuses {
    Backlog = "backlog",
    InProgress = "progress",
    Done = "done"
};

export const StatusesDisplayMap = {
    [Statuses.Backlog]: "Backlog",
    [Statuses.InProgress]: "In Progress",
    [Statuses.Done]: "Done",
};

export interface Issue {
    id: string,
    message: any,
    rank: keyof typeof IssueRanks,
    reportingUser: any,
    status: Statuses,
    timestamp: string,
}

export interface IssueState {
    [Statuses.Backlog]: [Issue],
    [Statuses.InProgress]: [Issue],
    [Statuses.Done]: [Issue],
}

export interface BoardProps {
    issues: IssueState,
    updateIssue: (issue: Issue) => void,
    dragDropHandlers: { onDragEnd: (i: Number) => void, onDragOver: (e: any, status: Statuses) => void, onDragStart: (status: Statuses) => void },
    destinationColumn: string
}

export interface IssueCardProps {
    issue: Issue,
    updateIssue: (issue: Issue) => void,
    onDragEnd: () => void,
    onDragStart: (status: Statuses) => void,
    status: Statuses
}

export interface Channel {
    id: string,
    name: string,
}

// The message object from slack has a lot of other fields, ex. uploaded file objects, blocks for rich text rendering, etc. may be useful in the future
export interface Message {
    text: string,
    type: string,
    user: string, // the author's ID
    name: string, // the author's name
    team_id: string, // the author's team ID
    username: string, // the author's username
    channel: Channel,
    ts: string,
    [x: string]: any // catch-all for other message properties we dont care about yet.
}