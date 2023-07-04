import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        // vite config
        define: {
            // env: env.APP_ENV,
            'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
            'process.env.PORT': JSON.stringify(env.PORT),
            'process.env.WS_URL': JSON.stringify(env.WS_URL),
            'process.env.GRAPHQL_URL': JSON.stringify(env.GRAPHQL_URL),
        },
        plugins: [react()],
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './src'),
            },
        },
    };
});
