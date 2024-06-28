import { Controller, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { StuffService } from "./stuff.service";

@Controller('stuff')
export class StuffController {

  constructor(private stuffService: StuffService) {
  }
  @Post("/upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadStuff(@UploadedFile() file, @Query("type") type: string) {
    return await this.stuffService.uploadStuff(file, type)
  }

}
