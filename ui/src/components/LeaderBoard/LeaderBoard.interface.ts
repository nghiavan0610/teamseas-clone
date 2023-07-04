export interface User {
    id?: string;
    username: string;
    email?: string;
    donate: number;
    mobile?: string;
    message?: string;
    anonymous?: boolean;
    team?: string;
    createdAt: string;
    updatedAt?: string;
}

export interface LeaderBoardItemProps {
    user: User;
}

export interface LeaderBoardProps {
    users: User[];
}
