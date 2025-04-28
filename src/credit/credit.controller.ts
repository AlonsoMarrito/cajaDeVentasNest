import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreditService } from './credit.service';
import {
  CreateCreditDto,
  UpdateCreditsStringDto,
  UpdateCreditsNumbergDto,
} from './dto/create-credit.dto';

@Controller('credit')
export class CreditController {
  constructor(private readonly creditService: CreditService) {}

  @Post()
  create(@Body() createCreditDto: CreateCreditDto) {
    return this.creditService.create(createCreditDto);
  }

  @Get()
  findAll() {
    return this.creditService.findAll();
  }

  @Get('oneCredit/:id')
  findOneByCreditId(@Param('id') id: string) {
    return this.creditService.findOneByCreditId(+id);
  }

  @Get('allCreditByIdAccount/:id')
  findOneCreditsByAccontId(@Param('id') id: string) {
    return this.creditService.findOneCreditsByAccontId(+id);
  }

  @Get('allCreditByIdClient/:id')
  findOneCreditsByClientId(@Param('id') id: string) {
    return this.creditService.findOneCreditsByClientId(+id);
  }

  @Patch('creditStringById/:id')
  updateCreditStringById(
    @Param('id') id: string,
    @Body() updateCreditsStringDto: UpdateCreditsStringDto,
  ) {
    return this.creditService.updateCreditStringById(
      +id,
      updateCreditsStringDto,
    );
  }

  @Patch('creditNumericById/:id')
  updateCreditNumericById(
    @Param('id') id: string,
    @Body() updateCreditsNumbergDto: UpdateCreditsNumbergDto,
  ) {
    return this.creditService.updateCreditNumericById(
      +id,
      updateCreditsNumbergDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditService.remove(+id);
  }
}
