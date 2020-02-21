import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { catSchema } from './schemas/cat.schema';


@Module({
    imports:[ 
  /*   MongooseModule.forFeature([{
            name:'Cat',
            schema : catSchema
        }])
     */,
],
controllers:[],
    providers:[]
})
export class CatsModule {}
