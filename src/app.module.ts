import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersMModule } from './users-m/users-m.module';

@Module({
  imports: [UsersMModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
