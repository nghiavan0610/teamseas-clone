import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeamService } from './team.service';
import { CreateTeamInput } from './dto/create-team.input';
import { OrderByInput } from '../user/dto/order-by.input';
import { UpdateTeamInput } from './dto/update-team.input';
import { SearchTeamInput } from './dto/search-team.input';

@Resolver('Team')
export class TeamResolver {
    constructor(private readonly teamService: TeamService) {}

    @Mutation('createTeam')
    create(@Args('createTeamInput') createTeamInput: CreateTeamInput) {
        return this.teamService.create(createTeamInput);
    }

    @Mutation('updateTeam')
    update(@Args('updateTeam') updateTeam: UpdateTeamInput) {
        return this.teamService.update(updateTeam);
    }

    @Query('teams')
    search(
        @Args('orderByInput') orderByInput?: OrderByInput,
        @Args('searchTeamInput') searchTeamInput?: SearchTeamInput,
    ) {
        return this.teamService.search(orderByInput, searchTeamInput);
    }

    @Query('team')
    findOne(@Args('id') id: string, @Args('orderByInput') orderByInput?: OrderByInput) {
        return this.teamService.findOne(id, orderByInput);
    }
}
