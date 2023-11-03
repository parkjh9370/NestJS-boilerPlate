import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/** Entities */
import { AttributeEntity } from './infrastructure/entity/AttributeEntity';
import { CustomerPreferenceEntity } from './infrastructure/entity/CustomerPreferenceEntity';
import { PreferenceEntity } from './infrastructure/entity/PreferenceEntity';

/** Controllers */
import { CompanyController } from './presentation/CompanyController';

/** UseCases */
import { CompanyUseCase } from './application/CompanyUseCase';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerPreferenceEntity, //
      AttributeEntity,
      PreferenceEntity,
    ]),
  ],
  exports: [CustomerPreference],
  controllers: [CompanyController],
  providers: [
    CompanyUseCase, //
  ],
})
export class CustomerPreference {}
