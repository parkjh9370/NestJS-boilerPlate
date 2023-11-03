import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@dataui/crud';

import { CustomerPreferenceEntity } from '../infrastructure/entity/CustomerPreferenceEntity';
import { CompanyUseCase } from '../application/CompanyUseCase';

@Crud({
  model: {
    type: CustomerPreferenceEntity,
  },
  params: {
    customerId: {
      field: 'customerId',
      type: 'number',
    },
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
  query: {
    join: {
      attribute: {
        eager: true,
      },
      preference: {
        eager: true,
      },
    },
  },
  routes: {
    updateOneBase: {
      returnShallow: true,
    },
  },
})
@Controller('customer-preference')
export class CompanyController implements CrudController<CustomerPreferenceEntity> {
  constructor(public service: CompanyUseCase) {}
}
