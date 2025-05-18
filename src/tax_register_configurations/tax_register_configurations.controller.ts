import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaxRegisterConfigurationsService } from './tax_register_configurations.service';
import { CreateTaxRegisterConfigurationDto } from './dto/create-tax_register_configuration.dto';
import { UpdateTaxRegisterConfigurationDto } from './dto/update-tax_register_configuration.dto';

@Controller('tax-register-configurations')
export class TaxRegisterConfigurationsController {
  constructor(
    private readonly taxRegisterConfigurationsService: TaxRegisterConfigurationsService,
  ) {}

  @Post()
  create(
    @Body()
    createTaxRegisterConfigurationDto: CreateTaxRegisterConfigurationDto,
  ) {
    return this.taxRegisterConfigurationsService.create(
      createTaxRegisterConfigurationDto,
    );
  }

  @Get()
  findAll() {
    return this.taxRegisterConfigurationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxRegisterConfigurationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateTaxRegisterConfigurationDto: UpdateTaxRegisterConfigurationDto,
  ) {
    return this.taxRegisterConfigurationsService.update(
      +id,
      updateTaxRegisterConfigurationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxRegisterConfigurationsService.remove(+id);
  }
}
