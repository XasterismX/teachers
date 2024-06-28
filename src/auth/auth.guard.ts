import { CanActivate, ExecutionContext, HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from 'rxjs';
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)
    if (!token) {
      throw new UnauthorizedException()
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {secret:"JWTSECRETKJDT"})
      request['user'] = payload
    } catch (e) {
      throw new UnauthorizedException()

    }
    return true;
  }

  extractTokenFromHeader(req: Request){
    const [type, token] = req.headers.authorization?.split(' ') ?? []
    return type === "Bearer" ? token : undefined;
  }
}
