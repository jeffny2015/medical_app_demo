import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateWalletDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsString()
  wallet_address: string;
} 