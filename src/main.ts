import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const WEBSITE_URL = configService.get('WEBSITE_URL');

  app.enableCors({
    origin: [WEBSITE_URL],
  });

  const PORT = configService.get('PORT');

  await app.listen(PORT);
}
bootstrap();
