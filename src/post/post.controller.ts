import {
  Body,
  Controller, FileTypeValidator,
  Get, MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  StreamableFile,
  UploadedFile,
  UseInterceptors
} from "@nestjs/common";
import { PostService } from "./post.service";
import { PostDto } from "./post.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { createReadStream } from 'fs';
import * as path from "path";


@Controller("post")
export class PostController {

  constructor(private service: PostService) {
  }

  @Post("/")
  @UseInterceptors(FileInterceptor('image'))
  async createPost(@Body() postDto: PostDto, @UploadedFile() file: Express.Multer.File) {
    const post = await this.service.createPost(postDto, file);
    return post;
  }


  @Get("/:id")
  async getOnePost(@Param("id") id: number){
    const post = await this.service.getOnePost(id)
    return post
  }


}
