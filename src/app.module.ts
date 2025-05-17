import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxRegisterConfigurationsModule } from './tax_register_configurations/tax_register_configurations.module';

@Module({
  imports: [TaxRegisterConfigurationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
