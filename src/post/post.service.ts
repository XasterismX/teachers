import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { Repository } from "typeorm";
import { PostDto } from "./post.dto";
import { FilesService } from "../files/files.service";

@Injectable()
export class PostService {

  constructor(@InjectRepository(Post) private postRepo: Repository<Post>, private fileService: FilesService) {
  }

  async createPost(dto: PostDto, file:Express.Multer.File): Promise<Post>{
    const fileName =await this.fileService.createFile(file);
    const post = this.postRepo.save({...dto, file:fileName, createdAt: new Date()})
    return post;
  }
  async getOnePost(id:number): Promise<Post>{
    const post = await this.postRepo.findOneBy( {id})
    return post
  }

}
