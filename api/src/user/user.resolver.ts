import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { UserService } from './user.service';
import { OrderByInput } from './dto/order-by.input';
import { PubSub } from 'graphql-subscriptions';
import { DonateInput } from './dto/donate.input';

const pubSub = new PubSub();

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation('donate')
    async donate(@Args('donateInput') donateInput: DonateInput) {
        const user = await this.userService.donate(donateInput);

        const totalDonation = await this.userService.getTotalDonation();

        pubSub.publish('totalUpdated', { totalUpdated: { totalDonation } });

        return user;
    }

    @Subscription()
    totalUpdated() {
        return pubSub.asyncIterator('totalUpdated');
    }

    @Query('users')
    findAll(@Args('orderByInput') orderByInput?: OrderByInput) {
        return this.userService.findAll(orderByInput);
    }

    @Query('user')
    findOne(@Args('id') id: string) {
        return this.userService.findOne(id);
    }

    @Query('totalDonation')
    totalDonation() {
        return this.userService.getTotalDonation();
    }
}
