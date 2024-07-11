import { Injectable } from '@nestjs/common';
import { Tenant } from './interfaces/tenant.interface';

@Injectable()
export class TenantService {
  private readonly tenants: Tenant[] = [];

  create(tenant: Tenant) {
    this.tenants.push(tenant);
  }

  findAll(): Tenant[] {
    return this.tenants;
  }
}
