import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Kích hoạt Validation
  app.useGlobalPipes(new ValidationPipe());

  const PORT = 3001; // Chạy cổng độc lập theo chuẩn SOA
  await app.listen(PORT);
  console.log(`Product Service đang chạy tại: http://localhost:${PORT}`);
}
bootstrap();