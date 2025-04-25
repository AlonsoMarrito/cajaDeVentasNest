export class CreateClientDto {
  id_account_client: number;
  name_client: string;
  address_client: string;
}

export class UpdateClientDto {
  column: string;
  value: string;
}
