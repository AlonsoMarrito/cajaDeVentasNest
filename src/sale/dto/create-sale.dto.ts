export class CreateSaleDto {
  id_account_sale: number;
  id_client_sale: number;
  price_to_sale: number;
  price_to_real_product: number;
  product_name: string;
}

export class UpdateSaleStringDto {
  colum: string;
  value: string;
}

export class UpdateSaleNumbergDto {
  colum: string;
  value: number;
}
