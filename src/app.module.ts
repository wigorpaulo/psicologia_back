import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxRegisterConfigurationsModule } from './tax_register_configurations/tax_register_configurations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // ou 'mysql', 'sqlite', etc.
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'psicologia_development',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // cuidado em produção
    }),
    TaxRegisterConfigurationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
