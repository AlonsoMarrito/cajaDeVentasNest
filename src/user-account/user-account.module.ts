import { Module } from '@nestjs/common';
import { UserAccountService } from './user-account.service';
import { UserAccountController } from './user-account.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UserAccountController],
  providers: [UserAccountService, PrismaService],
})
export class UserAccountModule {}
