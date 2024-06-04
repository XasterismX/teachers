import { UserService } from "../user/user.service";
import { UserDto } from "../user/user.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private userService;
    private jwtSerivce;
    constructor(userService: UserService, jwtSerivce: JwtService);
    private generateJwt;
    register(dto: UserDto, file: any): Promise<{
        access_token: string;
    }>;
    login(dto: UserDto): Promise<{
        access_token: string;
    }>;
}
