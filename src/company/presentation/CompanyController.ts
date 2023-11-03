import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@dataui/crud';

import { CompanyEntity } from '../infrastructure/entity/CompanyEntity';
import { CompanyUseCase } from '../application/CompanyUseCase';

@Crud({
  model: {
    type: CompanyEntity,
  },
})
@Controller('companies')
export class CompanyController implements CrudController<CompanyEntity> {
  constructor(public service: CompanyUseCase) {}
}
