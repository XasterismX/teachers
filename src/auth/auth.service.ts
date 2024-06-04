import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { UserDto } from "../user/user.dto";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtSerivce: JwtService) {
  }

  private async generateJwt(payload): Promise<{
    access_token:string
  }> {
    const jwt = await this.jwtSerivce.signAsync(payload)

    return { access_token: jwt }
  }

  async register(dto: UserDto, file){

    const user = await this.userService.createUser(dto, file)
    const token = await this.generateJwt({ ...user, password:null })
    return token

  }
  async login(dto: UserDto){
    const candidate = await this.userService.getOneUserWithEmail(dto.email)
    console.log(candidate)
    console.log(dto)
    if (!candidate){
      throw new UnauthorizedException("Пользователь не существует")
    }
    if (!bcrypt.compareSync(dto.password, candidate.password)){
      throw new UnauthorizedException("Проверьте Email или Пароль")
    }
    return this.generateJwt({ ...dto, password: null })
  }

}
