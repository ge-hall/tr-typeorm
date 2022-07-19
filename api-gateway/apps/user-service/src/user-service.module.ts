import { Module } from '@nestjs/common';
import { UserController } from './user-service.controller';
import { UserServiceService } from './user-service.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserServiceService],
})
export class UserServiceModule {}
