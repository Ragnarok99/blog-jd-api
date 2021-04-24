import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const ALLOWED_URLS = configService.get('ALLOWED_URLS');
  console.log(ALLOWED_URLS);

  app.enableCors({
    origin: JSON.parse(ALLOWED_URLS),
  });

  const PORT = configService.get('PORT');

  await app.listen(PORT);
}
bootstrap();
