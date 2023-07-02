import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TeamService } from 'src/team/team.service';

@Module({
    providers: [UserResolver, UserService, TeamService],
})
export class UserModule {}
