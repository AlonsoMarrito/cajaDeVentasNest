import { Injectable } from '@nestjs/common';
import {
  CreateSaleDto,
  UpdateSaleStringDto,
  UpdateSaleNumbergDto,
} from './dto/create-sale.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SaleService {
  // constructor prisma, this is necesary for that the prisma service
  constructor(private prisma: PrismaService) {}
  /**
   * this endpoint creates a new sale
   * 
   * @param createSaleDto {
      id_account_sale: number;
      id_client_sale: number;
      price_to_sale: number;
      price_to_real_product: number;
      product_name: string;
    }
   * @returns id after create 
   */
  async create(createSaleDto: CreateSaleDto) {
    const {
      id_account_sale,
      id_client_sale,
      price_to_sale,
      price_to_real_product,
      product_name,
    } = createSaleDto;
    // create const for that query with return the id of the sale
    const result = await this.prisma.$queryRawUnsafe<
      { createnewsale: number }[]
    >(
      `select createNewSale($1::INTEGER, $2::INTEGER, $3, $4, $5)`,
      id_account_sale,
      id_client_sale,
      price_to_sale,
      price_to_real_product,
      product_name,
    );
    return { id: result[0]?.createnewsale };
  }

  /**
   *this endpoint bring all sales
   * 
   * @returns json with all sales
   * @example {
        "id_sale": 1,
        "id_account_sale": 1,
        "id_client_sale": 1,
        "price_to_sale": 1300,
        "price_to_real_product": 600,
        "product_name": "Sabanas"
      },
   */
  async findAll() {
    return this.prisma.sale_s.findMany();
  }

  /**
   * this endpoint bring all sales by id param
   * 
   * @param :id 
   * @returns json with all sales by id_account_sale
   * @example {
        "id_sale": 1,
        "id_account_sale": 1,
        "id_client_sale": 1,
        "price_to_sale": 1300,
        "price_to_real_product": 600,
        "product_name": "Sabanas"
      },
   */
  async findAllByIdAccount(id: number) {
    return this.prisma.sale_s.findMany({ where: { id_account_sale: id } });
  }

  /**
   * this endpoint bring one sale by id param
   * 
   * @param :id 
   * @returns json with sale by id_account_sale
   * @example {
        "id_sale": 1,
        "id_account_sale": 1,
        "id_client_sale": 1,
        "price_to_sale": 1300,
        "price_to_real_product": 600,
        "product_name": "Sabanas"
      },
   */
  async findOne(id: number) {
    return this.prisma.sale_s.findFirst({ where: { id_sale: id } });
  }

  /**
   * this endpoint update one sale by id_account_sale with column and value
   *
   * @param :id
   * @body UpdateSaleNumbergDto {
      colum: string;
      value: number;
    }
   * @returns json with one id after update sale by id_account_sale
   */
  async updateSaleNumeric(
    id: number,
    updateSaleNumbergDto: UpdateSaleNumbergDto,
  ) {
    const { colum, value } = updateSaleNumbergDto;
    const result = await this.prisma.$queryRawUnsafe<
      { updateonebyidsalenumeric: number }[]
    >(`select updateOneByIdSaleNumeric($1::INTEGER, $2, $3)`, id, colum, value);
    return { id: result[0]?.updateonebyidsalenumeric };
  }

  /**
   * this endpoint update one sale by id_account_sale with column and value
   *
   * @param :id
   * @body UpdateSaleStringgDto {
      colum: string;
      value: number;
    }
   * @returns json with one id after update sale by id_account_sale
   */
  async updateSaleString(id: number, updateSaleStringDto: UpdateSaleStringDto) {
    const { colum, value } = updateSaleStringDto;
    const result = await this.prisma.$queryRawUnsafe<
      { updateonebyidsalestring: number }[]
    >(`select updateOneByIdSaleString($1::INTEGER, $2, $3)`, id, colum, value);
    return { id: result[0]?.updateonebyidsalestring };
  }

  /**
   * this endpoint delete a sale
   * 
   * @body {
      id_account_sale: number;
      id_client_sale: number;
      price_to_sale: number;
      price_to_real_product: number;
      product_name: string;
    }
   * @returns id after delete 
   */
  async remove(id: number) {
    const result = await this.prisma.$queryRawUnsafe<
      { deleteonesalebyid: number }[]
    >(`select deleteOneSaleById($1::INTEGER)`, id);
    return { id: result[0]?.deleteonesalebyid };
  }
}
