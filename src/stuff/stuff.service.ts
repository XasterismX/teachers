import { Injectable } from '@nestjs/common';
import { FilesService } from "../files/files.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Stuff } from "./staff.entity";
import { Repository } from "typeorm";

@Injectable()
export class StuffService {

  constructor(private fileService: FilesService, @InjectRepository(Stuff) private stuffRepo: Repository<Stuff>) {
  }

  async uploadStuff(file){
    const fileName = await this.fileService.createFile(file)
    return await this.stuffRepo.save({ name: fileName })
  }




}