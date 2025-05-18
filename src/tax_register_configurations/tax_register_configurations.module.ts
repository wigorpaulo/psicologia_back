import { Module } from '@nestjs/common';
import { TaxRegisterConfigurationsService } from './tax_register_configurations.service';
import { TaxRegisterConfigurationsController } from './tax_register_configurations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxRegisterConfigurations } from './entities/tax_register_configurations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaxRegisterConfigurations])],
  controllers: [TaxRegisterConfigurationsController],
  providers: [TaxRegisterConfigurationsService],
})
export class TaxRegisterConfigurationsModule {}
