import { FilesService } from "../files/files.service";
import { Stuff } from "./staff.entity";
import { Repository } from "typeorm";
export declare class StuffService {
    private fileService;
    private stuffRepo;
    constructor(fileService: FilesService, stuffRepo: Repository<Stuff>);
    uploadStuff(file: any): Promise<{
        name: string;
    } & Stuff>;
}