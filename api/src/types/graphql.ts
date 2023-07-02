
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateTeamInput {
    name: string;
    total: number;
}

export class UpdateTeamInput {
    id: string;
    total: number;
}

export class SearchTeamInput {
    query?: Nullable<string>;
    page?: Nullable<number>;
    limit?: Nullable<number>;
}

export class DonateInput {
    username: string;
    email: string;
    donate: number;
    teamId?: Nullable<string>;
    teamName?: Nullable<string>;
    mobile?: Nullable<string>;
    message?: Nullable<string>;
    anonymous?: Nullable<boolean>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class Team {
    id: string;
    name: string;
    users?: Nullable<Nullable<User>[]>;
    total: number;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class ResultSearchTeamInput {
    teams: Nullable<Team>[];
    totalCount: number;
    totalPages: number;
}

export abstract class IQuery {
    abstract teams(orderByInput?: Nullable<OrderByParams>, searchTeamInput?: Nullable<SearchTeamInput>): ResultSearchTeamInput | Promise<ResultSearchTeamInput>;

    abstract team(id: string, orderByInput?: Nullable<OrderByParams>): Nullable<Team> | Promise<Nullable<Team>>;

    abstract users(orderByInput?: Nullable<OrderByParams>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract totalJoin(): Nullable<Result> | Promise<Nullable<Result>>;
}

export abstract class IMutation {
    abstract createTeam(createTeamInput: CreateTeamInput): Team | Promise<Team>;

    abstract updateTeam(updateTeamInput: UpdateTeamInput): Team | Promise<Team>;

    abstract donate(donateInput: DonateInput): User | Promise<User>;
}

export class User {
    id: string;
    username: string;
    email: string;
    donate: number;
    mobile?: Nullable<string>;
    message?: Nullable<string>;
    anonymous?: Nullable<boolean>;
    team?: Nullable<Team>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export class Result {
    totalUsers: number;
    totalDonation: number;
}

export abstract class ISubscription {
    abstract totalUpdated(): Nullable<Result> | Promise<Nullable<Result>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
