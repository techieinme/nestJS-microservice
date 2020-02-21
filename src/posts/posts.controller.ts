import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostInterface } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-post.dto';

import { Logger } from 'winston';
@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    @Inject('winston') private readonly logger: Logger,
  ) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
            this.logger.info(`hello world`);
            this.logger.warn('hello>>warn');
            this.logger.info('hello>>info');
            this.logger.error('hello>>errror');

    this.postsService.create(createPostDto);
  }
  @Get()
  async findAll(): Promise<PostInterface[]> {
    return this.postsService.findAll();
  }
}