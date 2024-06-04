import { User } from "./user.entity";
import { Repository } from "typeorm";
import { UserDto } from "./user.dto";
import { FilesService } from "../files/files.service";
export declare class UserService {
    private userRepo;
    private fileService;
    constructor(userRepo: Repository<User>, fileService: FilesService);
    createUser(dto: UserDto, file: any): Promise<User>;
    getOneUser(id: number): Promise<User>;
    getOneUserWithEmail(email: string): Promise<User>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
