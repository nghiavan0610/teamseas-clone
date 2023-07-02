import { IsNotEmpty } from 'class-validator';

export class UpdateTeamInput {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    total: number;
}
