import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

import { CustomerPreferenceEntity } from '../infrastructure/entity/CustomerPreferenceEntity';

@Injectable()
export class CompanyUseCase extends TypeOrmCrudService<CustomerPreferenceEntity> {
  constructor(
    @InjectRepository(CustomerPreferenceEntity) //
    repo: Repository<CustomerPreferenceEntity>,
  ) {
    super(repo);
  }
}
