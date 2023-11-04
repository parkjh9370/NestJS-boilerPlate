import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/** Entities */
import { CompanyEntity } from './infrastructure/entity/CompanyEntity';

/** Controllers */
import { CompanyController } from './presentation/CompanyController';

/** UseCases */
import { CompanyUseCase } from './application/CompanyUseCase';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CompanyEntity, //
    ]),
  ],
  exports: [CompanyUseCase],
  controllers: [CompanyController],
  providers: [
    CompanyUseCase, //
  ],
})
export class Company {}
