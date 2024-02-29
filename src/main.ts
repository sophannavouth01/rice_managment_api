import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  await app.listen(3000);

  // after clone please create file .env and pass this code to file .env 

  // DB_HOST=127.0.0.1
  // DB_PORT=3306
  // DB_USERNAME=root
  // DB_PASSWORD=230202
  // DB_NAME=  rice_managment_db
   
}
bootstrap();
