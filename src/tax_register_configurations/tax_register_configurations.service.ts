import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaxRegisterConfigurationDto } from './dto/create-tax_register_configuration.dto';
import { UpdateTaxRegisterConfigurationDto } from './dto/update-tax_register_configuration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaxRegisterConfiguration } from './entities/tax_register_configuration.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaxRegisterConfigurationsService {
  constructor(
    @InjectRepository(TaxRegisterConfiguration)
    private readonly taxRegisterConfigRepo: Repository<TaxRegisterConfiguration>,
  ) {}

  async create(
    createTaxRegisterConfigurationDto: CreateTaxRegisterConfigurationDto,
  ): Promise<TaxRegisterConfiguration> {
    const newConfig = this.taxRegisterConfigRepo.create(
      createTaxRegisterConfigurationDto,
    );

    return await this.taxRegisterConfigRepo.save(newConfig);
  }

  async findAll(): Promise<TaxRegisterConfiguration[]> {
    return await this.taxRegisterConfigRepo.find();
  }

  async findOne(id: number): Promise<TaxRegisterConfiguration | null> {
    return await this.taxRegisterConfigRepo.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateTaxRegisterConfigurationDto: UpdateTaxRegisterConfigurationDto,
  ): Promise<TaxRegisterConfiguration> {
    const config = await this.taxRegisterConfigRepo.findOne({ where: { id } });

    if (!config) {
      throw new NotFoundException(
        `TaxRegisterConfiguration with ID ${id} not found`,
      );
    }

    const updated = Object.assign(config, updateTaxRegisterConfigurationDto);
    return await this.taxRegisterConfigRepo.save(updated);
  }

  async remove(id: number): Promise<void> {
    const result = await this.taxRegisterConfigRepo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(
        `TaxRegisterConfiguration with ID ${id} not found`,
      );
    }
  }
}
