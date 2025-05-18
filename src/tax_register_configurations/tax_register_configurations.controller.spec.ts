import { Test, TestingModule } from '@nestjs/testing';
import { TaxRegisterConfigurationsController } from './tax_register_configurations.controller';
import { TaxRegisterConfigurationsService } from './tax_register_configurations.service';

describe('TaxRegisterConfigurationsController', () => {
  let controller: TaxRegisterConfigurationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxRegisterConfigurationsController],
      providers: [TaxRegisterConfigurationsService],
    }).compile();

    controller = module.get<TaxRegisterConfigurationsController>(
      TaxRegisterConfigurationsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
