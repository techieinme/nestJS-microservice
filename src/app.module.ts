import { Module         } from '@nestjs/common';
import { AppController  } from './app.controller';
import { AppService     } from './app.service';
/* import { CatsController } from './cats/cats.controller';
import { CatsService    } from './cats/cats.service';
import { CatsModule     } from './cats/cats.module';
 */import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { MongoDB } from 'winston-mongodb';


// import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { PostsModule } from './posts/posts.module';
const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'warn.log', level: 'warn' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new MongoDB({
      capped    : true,
      db        : process.env.MONGODB_URI,
      name      : 'logs',
      collection: 'logs',
    }),
  ],
}); 




@Module({
  imports: [
    // MongooseModule.forRoot(`${process.env.MONGODB_URI}`),
    DatabaseModule,
    WinstonModule.forRoot(logger),
    PostsModule,
    // ConfigModule.forRoot({
    //   envFilePath: `./.${process.env.NODE_ENV}.env`,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
