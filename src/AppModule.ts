import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from './config/config';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { CustomerPreference } from './customerPreference/CustomerPreferenceModule';
import { Company } from './company/CompanyModule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.MYSQL.HOST,
      port: config.MYSQL.PORT as unknown as number,
      username: config.MYSQL.USER,
      password: config.MYSQL.PASSWORD,
      database: 'boiler',
      synchronize: true,
      entities: [
        __dirname + '/**/entity/*Entity{.ts,.js}', //
        __dirname + '/**/entity/*View{.ts,.js}',
      ],
      logging: false,
    }),
    CustomerPreference,
    Company,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
