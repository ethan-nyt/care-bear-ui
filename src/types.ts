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

export interface Issue {
    id: string,
    message: any,
    rank: keyof typeof IssueRanks,
    reportingUser: any,
    status: keyof typeof Statuses
}

export interface IssueState {
    [IssueRanks.Low]: [Issue],
    [IssueRanks.High]: [Issue],
    [IssueRanks.Critical]: [Issue],
}

export interface BoardProps {
    issues: IssueState,
    updateIssue: (Issue) => void,
}