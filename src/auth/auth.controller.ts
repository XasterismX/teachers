import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "../user/user.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @Post('/reg')
  @UseInterceptors(FileInterceptor('image'))
  async reg(@Body() userDto: UserDto, @UploadedFile() photo) {
    return await this.authService.register(userDto, photo)
  }

  @Post("/login")
  async login(@Body() userDto: UserDto){
    return await this.authService.login(userDto)
  }



}
