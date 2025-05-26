import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CavosProvider } from '../providers/cavos.provider';
import { WalletsModule } from '../wallets/wallets.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    WalletsModule
  ],
  controllers: [UsersController],
  providers: [UsersService, CavosProvider],
  exports: [TypeOrmModule, UsersService]
})
export class UsersModule {} 