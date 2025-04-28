import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleService } from './sale.service';
import {
  CreateSaleDto,
  UpdateSaleStringDto,
  UpdateSaleNumbergDto,
} from './dto/create-sale.dto';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  /**
   * this endpoint creates a new sale
   * 
   * @body createSaleDto {
      id_account_sale: number;
      id_client_sale: number;
      price_to_sale: number;
      price_to_real_product: number;
      product_name: string;
    }
   * @returns id after create 
   */
  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
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
  @Get()
  findAll() {
    return this.saleService.findAll();
  }

  /**
   *this endpoint bring all sales by id_account_sale
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
  @Get('allByIdAccount/:id')
  findAllByIdAccount(@Param('id') id: string) {
    return this.saleService.findAllByIdAccount(+id);
  }

  /**
   *this endpoint bring all sales by id_account_sale
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
  @Get('allByIdClient/:id')
  findAllByIdClient(@Param('id') id: string) {
    return this.saleService.findAllByIdClient(+id);
  }

  /**
   *this endpoint bring one (first) sales that query found by id_account_sale
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
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(+id);
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
  @Patch('/numeric/:id')
  updateSaleNumeric(
    @Param('id') id: string,
    @Body() updateSaleNumbergDto: UpdateSaleNumbergDto,
  ) {
    return this.saleService.updateSaleNumeric(+id, updateSaleNumbergDto);
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
  @Patch('/string/:id')
  updateSaleString(
    @Param('id') id: string,
    @Body() updateSaleStringDto: UpdateSaleStringDto,
  ) {
    return this.saleService.updateSaleString(+id, updateSaleStringDto);
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
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleService.remove(+id);
  }
}
