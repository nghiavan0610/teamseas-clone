import { IsNotEmpty } from 'class-validator';

export class CreateTeamInput {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    total: number;
}
