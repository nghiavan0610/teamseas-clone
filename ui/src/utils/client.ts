import { createClient, cacheExchange, fetchExchange, subscriptionExchange } from 'urql';

import { createClient as createWSClient } from 'graphql-ws';

const wsClient = createWSClient({
    url: 'ws://localhost:8004/graphql',
});

const client = createClient({
    url: 'http://localhost:8004/graphql',
    exchanges: [
        cacheExchange,
        fetchExchange,
        subscriptionExchange({
            forwardSubscription: (operation: any) => ({
                subscribe: (sink: any) => ({
                    unsubscribe: wsClient.subscribe({ ...operation, variables: {} }, sink),
                }),
            }),
        }),
    ],
});

export default client;
