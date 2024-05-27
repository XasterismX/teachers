/// <reference types="multer" />
import { StreamableFile } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostDto } from "./post.dto";
export declare class PostController {
    private service;
    constructor(service: PostService);
    createPost(postDto: PostDto, file: Express.Multer.File): Promise<import("./post.entity").Post>;
    getOnePost(id: number): Promise<{
        img: StreamableFile;
        id: number;
        name: string;
        data: string;
        file: string;
        createdAt: Date;
    }>;
}
