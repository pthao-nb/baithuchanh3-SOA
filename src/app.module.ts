import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa', 
      password: '123456', 
      database: 'product_db',
      autoLoadEntities: true,
      synchronize: true,
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    }),
    ProductModule,
  ],
})
export class AppModule {}