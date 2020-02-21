import { Controller,  Get, Inject }    from '@nestjs/common';
import { CatsService  }   from './cats.service';
import { CreateCatDto }   from './dto/create-cat.dto';
import { Cat          }   from './interface/cat.interface';
import { Logger } from 'winston';

@Controller('cats')
export class CatsController {


  constructor(@Inject('winston') private readonly logger: Logger,
  private readonly CatsService: CatsService) {}
  @Get()
  getdata(): string {
    this.logger.info(`hello world`);
    this.logger.warn("hello>>warn");
    this.logger.info("hello>>info");
    this.logger.error("hello>>errror");
    return `getdata`;
  }
}
