import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';

import { HttpLoggingInterceptor } from './shared/interceptors/HttpLoggingInterceptor';
import { AppModule } from './AppModule';
import { config } from './config/config';

async function bootstrap() {
  process.env.TZ = 'Asia/Seoul';

  const app = await NestFactory.create(AppModule);

  // Swagger
  const swaggerOptions = new DocumentBuilder()
    .setTitle('NestJS boilerPlate') //
    .setVersion('0.1')
    .setDescription('BoilerPlate API Specification')
    .addBearerAuth()
    .build();
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
  };
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('docs', app, document, customOptions);

  app.useGlobalInterceptors(new HttpLoggingInterceptor());

  await app.listen(config.PORT);

  const startLog =
    config.NODE_ENV === 'dev'
      ? `✅ Server on http://localhost:${config.PORT}` //
      : `✅ Server on port ${config.PORT}`;

  console.info(startLog);
}
bootstrap();
