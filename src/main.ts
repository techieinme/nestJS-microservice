
import { NestFactory } from '@nestjs/core';
import { AppModule   } from './app.module';
import { Logger      } from '@nestjs/common';

import {SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import 'dotenv/config';
import * as csurf from 'csurf';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // console.log(process.env.NODE_ENV)
  const port  = process.env.PORT 

  const options = new DocumentBuilder()
    .setTitle('nestjs microservice')
    .setDescription('nestjs API description')
    .setVersion('1.0')
    .addTag('nest')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);

  app.use(helmet());
  app.use(csurf());
  // cors enable 
  app.enableCors();
  Logger.log(`app is running http://localhost/${port}`,'Bootstrap')
}
bootstrap();
