"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtSerivce) {
        this.userService = userService;
        this.jwtSerivce = jwtSerivce;
    }
    async generateJwt(payload) {
        const jwt = await this.jwtSerivce.signAsync(payload);
        return { access_token: jwt };
    }
    async register(dto, file) {
        const user = await this.userService.createUser(dto, file);
        const token = await this.generateJwt({ ...user, password: null });
        return token;
    }
    async login(dto) {
        const candidate = await this.userService.getOneUserWithEmail(dto.email);
        console.log(candidate);
        console.log(dto);
        if (!candidate) {
            throw new common_1.UnauthorizedException("Пользователь не существует");
        }
        if (!bcrypt.compareSync(dto.password, candidate.password)) {
            throw new common_1.UnauthorizedException("Проверьте Email или Пароль");
        }
        return this.generateJwt({ ...dto, password: null });
    }
    async delete(id) {
        const candidate = await this.userService.getOneUser(id);
        if (!candidate) {
            throw new common_1.HttpException("Пользователь не найден", common_1.HttpStatus.BAD_REQUEST);
        }
        return this.userService.deleteUser(id);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map