import { Injectable } from '@nestjs/common';
import {
  CreateCreditDto,
  UpdateCreditsStringDto,
  UpdateCreditsNumbergDto,
} from './dto/create-credit.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CreditService {
  // constructor prisma, this is necesary for that the prisma service
  constructor(private prisma: PrismaService) {}
  async create(createCreditDto: CreateCreditDto) {
    const {
      id_account_credit,
      id_client_credit,
      price_to_sale,
      price_to_real_product,
      product_name,
      total_payment_acumulation,
    } = createCreditDto;
    const result = await this.prisma.$queryRawUnsafe<
      { createnewcredits: number }[]
    >(
      `select createNewCredits($1::INTEGER, $2::INTEGER, $3, $4, $5, $6)`,
      id_account_credit,
      id_client_credit,
      price_to_sale,
      price_to_real_product,
      product_name,
      total_payment_acumulation,
    );
    return { id: result[0]?.createnewcredits };
  }

  async findAll() {
    return this.prisma.credit_s.findMany();
  }

  async findOneByCreditId(id: number) {
    return this.prisma.credit_s.findMany({
      where: {
        id_credit: id,
      },
    });
  }

  async findOneCreditsByAccontId(id: number) {
    return this.prisma.credit_s.findMany({
      where: {
        id_account_credit: id,
      },
    });
  }

  async findOneCreditsByClientId(id: number) {
    return this.prisma.credit_s.findMany({
      where: {
        id_account_credit: id,
      },
    });
  }

  async updateCreditStringById(
    id: number,
    updateCreditsStringDto: UpdateCreditsStringDto,
  ) {
    const { colum, value } = updateCreditsStringDto;
    const result = await this.prisma.$queryRawUnsafe<
      { updateonebyidcreditstring: number }[]
    >(
      `select updateOneByIdCreditString($1::INTEGER, $2, $3)`,
      id,
      colum,
      value,
    );
    return { id: result[0]?.updateonebyidcreditstring };
  }

  async updateCreditNumericById(
    id: number,
    UpdateCreditsNumbergDto: UpdateCreditsNumbergDto,
  ) {
    const { colum, value } = UpdateCreditsNumbergDto;
    const result = await this.prisma.$queryRawUnsafe<
      { updateonebyidcreditnumeric: number }[]
    >(
      `select updateOneByIdCreditNumeric($1::INTEGER, $2, $3)`,
      id,
      colum,
      value,
    );
    return { id: result[0]?.updateonebyidcreditnumeric };
  }

  async remove(id: number) {
    const result = await this.prisma.$queryRawUnsafe<
      { deleteonecreditbyid: number }[]
    >(`select deleteOneCreditById($1::INTEGER)`, id);
    return { id: result[0]?.deleteonecreditbyid };
  }
}
