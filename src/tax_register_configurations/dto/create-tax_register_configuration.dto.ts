import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum EnviromentType {
  development = 0,
  test = 1,
  production = 2,
}

export class CreateTaxRegisterConfigurationDto {
  @ApiProperty({ example: 'ASDFAJSDFHKJHKJFHAKJLSDHGFKJAS' })
  @IsString()
  @IsNotEmpty()
  api_key: string | undefined;

  @ApiProperty({ example: 'Main configuration for the app' })
  @IsString()
  @IsNotEmpty()
  description: string | undefined;

  @ApiProperty({ example: 0, enum: EnviromentType })
  @IsNumber()
  @IsNotEmpty()
  @IsEnum(EnviromentType)
  environment: number | undefined;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  company_id: number | undefined;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  user_id: number | undefined;
}
