import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infra/connectors/database.module';
import { userProviders } from '../../../infra/providers';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...userProviders, UsersService],
})
export class UsersModule {}
