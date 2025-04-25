import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserAccountService } from './user-account.service';
import {
  CreateUserAccountDto,
  UpdateUsAcc,
  AutenticationDto,
} from './dto/create-user-account.dto';

@Controller('user-account')
export class UserAccountController {
  constructor(private readonly userAccountService: UserAccountService) {}

  @Post()
  create(@Body() createUserAccountDto: CreateUserAccountDto) {
    return this.userAccountService.create(createUserAccountDto);
  }

  @Get('/user')
  findAllUsser() {
    return this.userAccountService.findAllUsser();
  }

  @Get('/account')
  findAllAccounts() {
    return this.userAccountService.findAllAccounts();
  }

  @Get('/user/:id')
  findOneUser(@Param('id') id: string) {
    return this.userAccountService.findOneUser(+id);
  }

  @Get('/autentication')
  findOneAutentication(@Body() autenticationDto: AutenticationDto) {
    return this.userAccountService.findOneAutentication(autenticationDto);
  }

  @Get('/account/:id')
  findOneAccount(@Param('id') id: string) {
    return this.userAccountService.findOneAccount(+id);
  }

  @Patch('/user/:id')
  updateUser(@Param('id') id: string, @Body() updateUsAcc: UpdateUsAcc) {
    return this.userAccountService.updateUser(+id, updateUsAcc);
  }

  @Patch('/account/:id')
  updateAccount(@Param('id') id: string, @Body() updateUsAcc: UpdateUsAcc) {
    return this.userAccountService.updateAccount(+id, updateUsAcc);
  }

  @Delete(':id_user')
  remove(@Param('id_user') id: string) {
    return this.userAccountService.remove(+id);
  }
}
