import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { StuffService } from "./stuff.service";

@Controller('stuff')
export class StuffController {

  constructor(private stuffService: StuffService) {
  }
  @Post("/upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadStuff(@UploadedFile() file) {
    return await this.stuffService.uploadStuff(file)
  }

}
