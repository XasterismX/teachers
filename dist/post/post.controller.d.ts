/// <reference types="multer" />
import { PostService } from "./post.service";
import { PostDto } from "./post.dto";
export declare class PostController {
    private service;
    constructor(service: PostService);
    createPost(postDto: PostDto, file: Express.Multer.File): Promise<import("./post.entity").Post>;
    getOnePost(id: number): Promise<import("./post.entity").Post>;
}
