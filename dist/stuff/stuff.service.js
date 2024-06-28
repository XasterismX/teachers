"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StuffService = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("../files/files.service");
const typeorm_1 = require("@nestjs/typeorm");
const staff_entity_1 = require("./staff.entity");
const typeorm_2 = require("typeorm");
let StuffService = class StuffService {
    constructor(fileService, stuffRepo) {
        this.fileService = fileService;
        this.stuffRepo = stuffRepo;
    }
    async uploadStuff(file, type) {
        const fileName = await this.fileService.createFile(file);
        return await this.stuffRepo.save({ name: fileName, type });
    }
    async getStuff() {
        return await this.stuffRepo.find();
    }
    async getStuffByType(type) {
        return await this.stuffRepo.find({ where: { type } });
    }
};
exports.StuffService = StuffService;
exports.StuffService = StuffService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(staff_entity_1.Stuff)),
    __metadata("design:paramtypes", [files_service_1.FilesService, typeorm_2.Repository])
], StuffService);
//# sourceMappingURL=stuff.service.js.map