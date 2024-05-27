"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const cache_manager_1 = require("@nestjs/cache-manager");
const post_module_1 = require("./post/post.module");
const post_entity_1 = require("./post/post.entity");
const files_module_1 = require("./files/files.module");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                port: 5432,
                host: 'localhost',
                username: 'postgres',
                password: 'root',
                synchronize: true,
                entities: [post_entity_1.Post],
                database: 'teacher',
                autoLoadEntities: true,
            }),
            cache_manager_1.CacheModule.register({
                isGlobal: true,
            }),
            post_module_1.PostModule,
            files_module_1.FilesModule,
            serve_static_1.ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, "static") })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map