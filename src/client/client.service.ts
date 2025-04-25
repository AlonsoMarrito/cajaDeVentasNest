import { Injectable } from '@nestjs/common';
import { CreateClientDto, UpdateClientDto } from './dto/create-client.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}
  async create(createClientDto: CreateClientDto) {
    const { name_client, address_client, id_account_client } = createClientDto;
    const result = await this.prisma.$queryRawUnsafe<number>(
      `SELECT createNewClient($1::INTEGER, $2, $3)`,
      id_account_client,
      name_client,
      address_client,
    );
    return { id: result };
  }

  async findAll() {
    return this.prisma.client_s.findMany();
  }

  async findAllByIdAccount(id: number) {
    return this.prisma.client_s.findMany({
      where: {
        id_account_client: id,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.client_s.findFirst({ where: { id_client: id } });
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const { column, value } = updateClientDto;
    const result = await this.prisma.$queryRawUnsafe<number>(
      `SELECT updateOneByIdClient($1::INTEGER, $2, $3)`,
      id,
      column,
      value,
    );
    return { id: result };
  }

  async remove(id: number) {
    const result = await this.prisma.$queryRawUnsafe<number>(
      `SELECT deleteOneByIdClient($1::INTEGER)`,
      id,
    );
    return { id: result };
  }
}
