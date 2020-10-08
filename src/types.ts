export enum IssueRanks {
    Low = "low",
    High = "high",
    Critical = "critical"
}

export enum Statuses {
    Backlog = "backlog",
    InProgress = "progress",
    Done = "done"
}

export const StatusesDisplayMap = {
    [Statuses.Backlog]: "Backlog",
    [Statuses.InProgress]: "In Progress",
    [Statuses.Done]: "Done",
}

export interface Issue {
    id: string,
    message: any,
    rank: keyof typeof IssueRanks,
    reportingUser: any,
    status: keyof typeof Statuses
}

export interface IssueState {
    [Statuses.Backlog]: [Issue],
    [Statuses.InProgress]: [Issue],
    [Statuses.Done]: [Issue],
}

export interface BoardProps {
    issues: IssueState,
    updateIssue: (issue: Issue) => void,
    dragDropHandlers: { onDrag: () => void, onDrop: () => void },
}

export interface IssueCardProps {
    issue: Issue,
    updateIssue: (issue: Issue) => void,
    onDrag: (status: keyof typeof Statuses) => void,
    onDrop: () => void,
}