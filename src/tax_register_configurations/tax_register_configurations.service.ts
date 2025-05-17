import { Injectable } from '@nestjs/common';
import { CreateTaxRegisterConfigurationDto } from './dto/create-tax_register_configuration.dto';
import { UpdateTaxRegisterConfigurationDto } from './dto/update-tax_register_configuration.dto';

@Injectable()
export class TaxRegisterConfigurationsService {
  create(createTaxRegisterConfigurationDto: CreateTaxRegisterConfigurationDto) {
    return 'This action adds a new taxRegisterConfiguration';
  }

  findAll() {
    return `This action returns all taxRegisterConfigurations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taxRegisterConfiguration`;
  }

  update(id: number, updateTaxRegisterConfigurationDto: UpdateTaxRegisterConfigurationDto) {
    return `This action updates a #${id} taxRegisterConfiguration`;
  }

  remove(id: number) {
    return `This action removes a #${id} taxRegisterConfiguration`;
  }
}
