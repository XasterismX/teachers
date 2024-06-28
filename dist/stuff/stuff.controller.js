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
exports.StuffController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const stuff_service_1 = require("./stuff.service");
const auth_guard_1 = require("../auth/auth.guard");
let StuffController = class StuffController {
    constructor(stuffService) {
        this.stuffService = stuffService;
    }
    async uploadStuff(file, type) {
        return await this.stuffService.uploadStuff(file, type);
    }
    async getStuff() {
        return await this.stuffService.getStuff();
    }
    async getStuffByType(type) {
        return this.stuffService.getStuffByType(type);
    }
};
exports.StuffController = StuffController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("/upload"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Query)("type")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StuffController.prototype, "uploadStuff", null);
__decorate([
    (0, common_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StuffController.prototype, "getStuff", null);
__decorate([
    (0, common_1.Get)("/:type"),
    __param(0, (0, common_1.Param)("type")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StuffController.prototype, "getStuffByType", null);
exports.StuffController = StuffController = __decorate([
    (0, common_1.Controller)("stuff"),
    __metadata("design:paramtypes", [stuff_service_1.StuffService])
], StuffController);
//# sourceMappingURL=stuff.controller.js.map