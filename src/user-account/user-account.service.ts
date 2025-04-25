import { Injectable } from '@nestjs/common';
import {
  CreateUserAccountDto,
  UpdateUsAcc,
  AutenticationDto,
} from './dto/create-user-account.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserAccountService {
  constructor(private prisma: PrismaService) {}
  async create(createUserAccountDto: CreateUserAccountDto) {
    const {
      name,
      firstLastName,
      secondLastName,
      email,
      password,
      companyName,
    } = createUserAccountDto;
    const result = await this.prisma.$queryRawUnsafe<
      { createnewuseraccount: number }[]
    >(
      `SELECT createNewUserAccount($1, $2, $3, $4, $5, $6)`,
      name,
      firstLastName,
      secondLastName,
      email,
      password,
      companyName,
    );
    return { id: result[0]?.createnewuseraccount };
  }

  async findAllUsser() {
    return this.prisma.user_s.findMany();
  }

  async findAllAccounts() {
    return this.prisma.account_s.findMany();
  }

  async findOneUser(id: number) {
    return this.prisma.user_s.findFirst({ where: { id_user: id } });
  }

  async findOneAccount(id: number) {
    return this.prisma.account_s.findFirst({ where: { id_account: id } });
  }

  async findOneAutentication(autenticationDto: AutenticationDto) {
    const { e_mail, password } = autenticationDto;
    const result = await this.prisma.$queryRawUnsafe<
      { accountautentication: number }[]
    >(`SELECT accountAutentication($1, $2)`, e_mail, password);
    let status = '';
    if (result[0]?.accountautentication > 0) {
      status = 'Succes';
    } else {
      status = 'Denied';
    }
    const arrayReturn = [status, result[0]?.accountautentication];
    return { status: arrayReturn };
  }

  async updateUser(id: number, updateUsAcc: UpdateUsAcc) {
    const { column, value } = updateUsAcc;
    const result = await this.prisma.$queryRawUnsafe<number>(
      `SELECT updateOneById($1::INTEGER, $2, $3)`,
      id,
      column,
      value,
    );
    return { id: result };
  }

  async updateAccount(id: number, updateUsAcc: UpdateUsAcc) {
    const { column, value } = updateUsAcc;
    const result = await this.prisma.$queryRawUnsafe<number>(
      `SELECT updateOneByIdAccount($1::INTEGER, $2, $3)`,
      id,
      column,
      value,
    );
    return { id: result };
  }

  async remove(id: number) {
    const result = await this.prisma.$queryRawUnsafe<number>(
      `SELECT deleteOneByIdUserAccount($1::INTEGER)`,
      id,
    );
    return { id: result };
  }
}
