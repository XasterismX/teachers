import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { UserDto } from "./user.dto";
import * as bcrypt from "bcrypt";
import { ConfigService } from "@nestjs/config";
import { FilesService } from "../files/files.service";
@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private fileService: FilesService
  ) {
  }

  async createUser(dto: UserDto, file): Promise<User> {
    const users: User[] = await this.userRepo.find()
    if (users){
      throw new HttpException("Преподователь зарегестрирован, если Вы преподователь обратитесь к администратору", HttpStatus.UNAUTHORIZED)
    }
    dto.password =  await bcrypt.hash(dto.password, 10)
    const filaName = await this.fileService.createFile(file)
    const user = await this.userRepo.save({ ...dto, photoName: filaName})
    return user

  }
  async getOneUser(id: number):Promise<User>{
    return this.userRepo.findOne({where: {id: id}})
  }

  async getOneUserWithEmail(email:string){
    return this.userRepo.findOne({where:{email: email}})
  }
  async deleteUser(id:number){
    return this.userRepo.delete({id:id})
  }

}
