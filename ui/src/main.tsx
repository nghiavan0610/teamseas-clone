import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'urql';

import App from './App.tsx';
import theme from './theme.ts';
import client from './utils/client.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Provider value={client}>
                <App />
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
);
