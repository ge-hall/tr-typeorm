import { Controller, Inject, Post, Req } from '@nestjs/common';
import { ClientGrpc, MessagePattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  RegisterRequest,
  RegisterResponse,
  UserServiceClient,
  USER_SERVICE_NAME,
  ValidateRequest,
  ValidateResponse,
} from './user.pb';
import { Request } from 'express';

@Controller('user')
export class UserController {
  private svc: UserServiceClient;

  @Inject(USER_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  @Post('register')
  private async register(
    @Req() req: Request,
  ): Promise<Observable<RegisterResponse>> {
    const body: RegisterRequest = req.body;

    body.email = <string>req.body.email;

    return this.svc.register(body);
  }

  @Post('validate')
  private async validate(
    @Req() req: Request,
  ): Promise<Observable<ValidateResponse>> {
    const body: ValidateRequest = req.body;
    console.log('in validate');
    body.token = <string>req.body.token;

    return this.svc.validate(body);
  }
}
