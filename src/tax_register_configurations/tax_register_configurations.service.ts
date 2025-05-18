import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateTaxRegisterConfigurationDto } from './dto/create-tax_register_configuration.dto';
import { UpdateTaxRegisterConfigurationDto } from './dto/update-tax_register_configuration.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaxRegisterConfigurations } from './entities/tax_register_configurations.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaxRegisterConfigurationsService {
  constructor(
    @InjectRepository(TaxRegisterConfigurations)
    private readonly taxRegisterConfigRepo: Repository<TaxRegisterConfigurations>,
  ) {}

  async create(
    createTaxRegisterConfigurationDto: CreateTaxRegisterConfigurationDto,
  ): Promise<TaxRegisterConfigurations> {
    const isUnique = await this.is_unique_api_key(
      createTaxRegisterConfigurationDto.api_key,
    );

    if (!isUnique) {
      throw new BadRequestException('API key already exists');
    }

    const newConfig = this.taxRegisterConfigRepo.create({
      ...createTaxRegisterConfigurationDto,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return await this.taxRegisterConfigRepo.save(newConfig);
  }

  async findAll(): Promise<TaxRegisterConfigurations[]> {
    return await this.taxRegisterConfigRepo.find();
  }

  async findOne(id: number): Promise<TaxRegisterConfigurations | null> {
    return await this.taxRegisterConfigRepo.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateTaxRegisterConfigurationDto: UpdateTaxRegisterConfigurationDto,
  ): Promise<TaxRegisterConfigurations> {
    const isUnique = await this.is_unique_api_key(
      updateTaxRegisterConfigurationDto.api_key,
    );

    if (!isUnique) {
      throw new BadRequestException('API key already exists');
    }

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

  private async is_unique_api_key(
    api_key: string | undefined,
  ): Promise<boolean> {
    const count = await this.taxRegisterConfigRepo.count({
      where: { api_key },
    });

    return count === 0;
  }
}
