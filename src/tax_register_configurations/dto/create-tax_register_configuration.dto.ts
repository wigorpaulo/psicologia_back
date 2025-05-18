import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export enum EnviromentType {
  development = 0,
  test = 1,
  production = 2,
}

export class CreateTaxRegisterConfigurationDto {
  @IsString()
  @IsNotEmpty()
  api_key: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsEnum(EnviromentType)
  environment: number;

  @IsNumber()
  @IsNotEmpty()
  company_id: number;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;
}
