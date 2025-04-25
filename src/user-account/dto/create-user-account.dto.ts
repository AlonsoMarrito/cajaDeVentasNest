export class CreateUserAccountDto {
  name: string;
  firstLastName: string;
  secondLastName: string;
  email: string;
  password: string;
  companyName: string;
}

export class UpdateUsAcc {
  column: string;
  value: string;
}

export class AutenticationDto {
  e_mail: string;
  password: string;
}
