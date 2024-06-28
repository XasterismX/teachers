import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { UserModule } from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [UserModule, JwtModule.register({
    global: true,
    secret:"JWTSECRETKJDT",
    signOptions:{
      expiresIn: "24h"
    }
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
