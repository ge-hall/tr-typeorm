import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  USER_SERVICE_NAME,
  RegisterRequest,
  RegisterResponse,
  UserServiceController,
  LoginRequest,
  LoginResponse,
  ValidateRequest,
  ValidateResponse,
} from 'lib/user/user.pb';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Controller('user')
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserServiceService) {}
  login(
    request: LoginRequest,
  ): LoginResponse | Observable<LoginResponse> | Promise<LoginResponse> {
    throw new Error('Method not implemented.');
  }
  @GrpcMethod(USER_SERVICE_NAME, 'Validate')
  validate(
    payload: ValidateRequest,
  ):
    | ValidateResponse
    | Observable<ValidateResponse>
    | Promise<ValidateResponse> {
    //throw new Error('Method not implemented.');
    return this.userService.validate(payload);
  }

  @GrpcMethod(USER_SERVICE_NAME, 'Register')
  register(payload: RegisterRequest): Promise<RegisterResponse> {
    console.log('called Register');
    return this.userService.register(payload);
  }

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
