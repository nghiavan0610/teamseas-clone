
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class DonateInput {
    username: string;
    email: string;
    donate: number;
    team?: Nullable<string>;
    mobile?: Nullable<string>;
    message?: Nullable<string>;
    anonymous?: Nullable<boolean>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class User {
    id: string;
    username: string;
    email: string;
    donate: number;
    mobile?: Nullable<string>;
    message?: Nullable<string>;
    anonymous?: Nullable<boolean>;
    team?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract users(orderByInput?: Nullable<OrderByParams>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract totalDonation(): number | Promise<number>;
}

export abstract class IMutation {
    abstract donate(donateInput: DonateInput): User | Promise<User>;
}

export class Result {
    totalDonation: number;
}

export abstract class ISubscription {
    abstract totalUpdated(): Nullable<Result> | Promise<Nullable<Result>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
