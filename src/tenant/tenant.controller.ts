import { Controller, Get, Post, Body, Ip } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { TenantService } from './tenant.service';
import { Tenant } from './interfaces/tenant.interface';

@Controller('tenant')
export class TenantController {
  constructor(private tenantService: TenantService) {}

  @Post()
  async create(@Body() createTenantDto: CreateTenantDto) {
    this.tenantService.create(createTenantDto);
  }

  @Get()
  async findAll(@Ip() ip): Promise<Tenant[]> {
    console.log(ip);
    return this.tenantService.findAll();
  }
}
