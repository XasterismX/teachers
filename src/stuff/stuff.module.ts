import { Module } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { StuffController } from './stuff.controller';
import { FilesModule } from "../files/files.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Stuff } from "./staff.entity";

@Module({
  imports: [FilesModule, TypeOrmModule.forFeature([Stuff])],
  providers: [StuffService],
  controllers: [StuffController]
})
export class StuffModule {}
