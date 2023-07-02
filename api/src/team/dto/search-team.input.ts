import { IsNotEmpty, IsOptional } from 'class-validator';

export class SearchTeamInput {
    @IsOptional()
    query: string | null;

    @IsNotEmpty()
    page: number;

    @IsNotEmpty()
    limit: number;
}
