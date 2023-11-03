import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

import { CompanyEntity } from '../infrastructure/entity/CompanyEntity';

@Injectable()
export class CompanyUseCase extends TypeOrmCrudService<CompanyEntity> {
  constructor(
    @InjectRepository(CompanyEntity) //
    repo: Repository<CompanyEntity>,
  ) {
    super(repo);
  }
}
