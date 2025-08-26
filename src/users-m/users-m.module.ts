import { Module } from '@nestjs/common';
import { UsersMController } from './users-m.controller';
import { UsersMService } from './users-m.service';

@Module({
  controllers: [UsersMController],
  providers: [UsersMService]

})
export class UsersMModule { }
