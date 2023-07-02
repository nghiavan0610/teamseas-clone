import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = app.get<ConfigService>(ConfigService);

    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });

    app.use(helmet({ contentSecurityPolicy: config.get('NODE_ENV') === 'production' ? undefined : false }));
    app.setGlobalPrefix(`api`);

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(config.get('NODE_DOCKER_PORT') || 8000, async () => {
        console.log(`App listening on port ${config.get('NODE_DOCKER_PORT') || 8000}`);
    });
}
bootstrap();
