import { HttpStatus, Injectable } from '@nestjs/common';
import {
  RegisterRequest,
  RegisterResponse,
  ValidateRequest,
  ValidateResponse,
} from 'lib/user/user.pb';

@Injectable()
export class UserServiceService {
  async register(payload: RegisterRequest): Promise<RegisterResponse> {
    //    throw new Error(`Method not implemented with args: ${payload.email}`);
    console.log(`payload.email:${payload.email}`);
    return { status: HttpStatus.CREATED, error: null };
  }
  getHello(): string {
    return 'Hello World!';
  }
  async validate(payload: ValidateRequest): Promise<ValidateResponse> {
    //    throw new Error(`Method not implemented with args: ${payload.email}`);
    console.log(`payload.token:${payload.token}`);
    return { status: HttpStatus.CREATED, error: null, userId: 1 };
  }
}
