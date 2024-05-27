import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { PostModule } from './post/post.module';
import { Post } from './post/post.entity';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'root',
      synchronize: true,
      entities: [Post],
      database: 'teacher',
      autoLoadEntities: true,
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    PostModule,
    FilesModule,
    ServeStaticModule.forRoot({ rootPath:path.resolve(__dirname, "static") })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
