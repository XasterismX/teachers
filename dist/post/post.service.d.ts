/// <reference types="multer" />
import { Post } from "./post.entity";
import { Repository } from "typeorm";
import { PostDto } from "./post.dto";
import { FilesService } from "../files/files.service";
export declare class PostService {
    private postRepo;
    private fileService;
    constructor(postRepo: Repository<Post>, fileService: FilesService);
    createPost(dto: PostDto, file: Express.Multer.File): Promise<Post>;
    getOnePost(id: number): Promise<Post>;
}
