import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class DonateInput {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    donate: number;

    @IsOptional()
    team?: string | null;

    @IsOptional()
    mobile?: string | null;

    @IsOptional()
    message?: string | null;

    @IsOptional()
    anonymous?: boolean;
}
