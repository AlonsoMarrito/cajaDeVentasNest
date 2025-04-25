import { Module } from '@nestjs/common';
import { UserAccountModule } from './user-account/user-account.module';
import { ClientModule } from './client/client.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [UserAccountModule, ClientModule, SaleModule],
})
export class AppModule {}
