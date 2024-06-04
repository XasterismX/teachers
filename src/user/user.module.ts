import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { ConfigModule } from "@nestjs/config";
import * as process from "process";
import { FilesModule } from "../files/files.module";

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigModule, FilesModule],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
