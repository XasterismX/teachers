import { Controller, Get, Param, Post, Query, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { StuffService } from "./stuff.service";
import { AuthGuard } from "../auth/auth.guard";

@Controller("stuff")
export class StuffController {

  constructor(private stuffService: StuffService) {
  }

  @UseGuards(AuthGuard)
  @Post("/upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadStuff(@UploadedFile() file, @Query("type") type: string) {
    return await this.stuffService.uploadStuff(file, type);
  }

  @Get("")
  async getStuff() {
    return await this.stuffService.getStuff();
  }
  @Get("/:type")
  async getStuffByType(@Param("type") type: string){
    return this.stuffService.getStuffByType(type)
  }

}
