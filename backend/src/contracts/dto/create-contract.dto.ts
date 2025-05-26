import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateContractDto {
  @IsNotEmpty()
  @IsNumber()
  doctor_id: number;

  @IsNotEmpty()
  @IsString()
  contract_address: string;
} 