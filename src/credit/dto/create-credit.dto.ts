export class CreateCreditDto {
  id_account_credit: number;
  id_client_credit: number;
  price_to_sale: number;
  price_to_real_product: number;
  product_name: string;
  total_payment_acumulation: number;
}

export class UpdateCreditsStringDto {
  colum: string;
  value: string;
}

export class UpdateCreditsNumbergDto {
  colum: string;
  value: number;
}
