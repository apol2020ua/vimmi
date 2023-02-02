import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Environment } from './environment';
import { readFileSync } from 'fs';

async function bootstrap() {
  const key = readFileSync(__dirname + '/../ssl_fake/84-246.85.252-privateKey.key');
  const cert = readFileSync(__dirname + '/../ssl_fake/84-246.85.252.crt');

  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key,
      cert,
    },
  });
  app.enableCors();
  const configService: ConfigService<Environment> = app.get(ConfigService);
  const config = new DocumentBuilder()
    .setTitle('Vimmi')
    .setDescription('The Vimmi API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(configService.get<number>('PORT'));
}
bootstrap();
