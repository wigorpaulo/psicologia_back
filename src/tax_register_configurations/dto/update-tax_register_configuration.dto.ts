import { PartialType } from '@nestjs/swagger';
import { CreateTaxRegisterConfigurationDto } from './create-tax_register_configuration.dto';

export class UpdateTaxRegisterConfigurationDto extends PartialType(
  CreateTaxRegisterConfigurationDto,
) {}
