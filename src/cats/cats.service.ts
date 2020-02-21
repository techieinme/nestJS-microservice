import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interface/cat.interface';
import {  Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  // constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

}
