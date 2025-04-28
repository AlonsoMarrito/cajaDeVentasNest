import { Module } from '@nestjs/common';
import { UserAccountModule } from './user-account/user-account.module';
import { ClientModule } from './client/client.module';
import { SaleModule } from './sale/sale.module';
import { CreditModule } from './credit/credit.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [UserAccountModule, ClientModule, SaleModule, CreditModule, PaymentModule],
})
export class AppModule {}
