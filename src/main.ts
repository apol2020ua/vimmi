import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Environment } from './environment';
import { readFileSync } from 'fs';
import * as https from 'https';
import * as http from 'http';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const key = readFileSync(
    __dirname + '/../ssl_fake/84-246.85.252_3000-privateKey.key',
  );
  const cert = readFileSync(__dirname + '/../ssl_fake/84-246.85.252_3000.crt');
  const httpsOptions = { key, cert };

  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors();
  const configService: ConfigService<Environment> = app.get(ConfigService);
  const config = new DocumentBuilder()
    .setTitle('Vimmi')
    .setDescription('The Vimmi API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.init();

  const httpsServer = https.createServer(httpsOptions, server);
  httpsServer.listen(configService.get<number>('PORT'));

  const httpServer = http.createServer(server);
  httpServer.listen(3001);
}
bootstrap();
