import { Module } from '@nestjs/common';
import { TaxRegisterConfigurationsService } from './tax_register_configurations.service';
import { TaxRegisterConfigurationsController } from './tax_register_configurations.controller';

@Module({
  controllers: [TaxRegisterConfigurationsController],
  providers: [TaxRegisterConfigurationsService],
})
export class TaxRegisterConfigurationsModule {}
