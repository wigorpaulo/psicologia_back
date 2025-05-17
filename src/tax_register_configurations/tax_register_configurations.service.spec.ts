import { Test, TestingModule } from '@nestjs/testing';
import { TaxRegisterConfigurationsService } from './tax_register_configurations.service';

describe('TaxRegisterConfigurationsService', () => {
  let service: TaxRegisterConfigurationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxRegisterConfigurationsService],
    }).compile();

    service = module.get<TaxRegisterConfigurationsService>(TaxRegisterConfigurationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
