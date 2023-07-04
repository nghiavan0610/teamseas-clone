import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { GraphQLDateTime } from 'graphql-iso-date';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: false,
            plugins: [
                process.env.NODE_ENV === 'production'
                    ? ApolloServerPluginLandingPageProductionDefault({})
                    : ApolloServerPluginLandingPageLocalDefault({ embed: true }),
            ],
            typePaths: ['./**/*.graphql'],
            resolvers: { DateTime: GraphQLDateTime },
            definitions: {
                path: join(process.cwd(), 'src/types/graphql.ts'),
                outputAs: 'class',
            },
            subscriptions: {
                'graphql-ws': true,
                'subscriptions-transport-ws': true,
            },
        }),
        PrismaModule,
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
