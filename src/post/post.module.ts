import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { FilesModule } from "../files/files.module";

@Module({
  imports: [TypeOrmModule.forFeature([Post]), FilesModule],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
