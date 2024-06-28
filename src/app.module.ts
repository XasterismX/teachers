import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { UserModule } from './user/user.module';
import * as path from "path";
import { User } from "./user/user.entity";
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { StuffModule } from './stuff/stuff.module';
import { Stuff } from "./stuff/staff.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'root',
      synchronize: true,
      entities: [User,Stuff],
      database: 'teacher',
      autoLoadEntities: true,
    }),
    FilesModule,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static")

    }),
    UserModule,
    AuthModule,
    StuffModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
