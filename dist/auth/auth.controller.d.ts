import { AuthService } from "./auth.service";
import { UserDto } from "../user/user.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    reg(userDto: UserDto, photo: any): Promise<{
        access_token: string;
    }>;
    login(userDto: UserDto): Promise<{
        access_token: string;
    }>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
