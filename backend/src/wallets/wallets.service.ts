import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './entities/wallet.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Injectable()
export class WalletsService {
  constructor(
    @InjectRepository(Wallet)
    private walletsRepository: Repository<Wallet>,
  ) {}

  async create(createWalletDto: CreateWalletDto): Promise<Wallet> {
    const existingWallet = await this.walletsRepository.findOne({
      where: { wallet_address: createWalletDto.wallet_address }
    });

    if (existingWallet) {
      throw new ConflictException('Wallet address already exists');
    }

    const wallet = this.walletsRepository.create(createWalletDto);
    return this.walletsRepository.save(wallet);
  }

  async findAll(): Promise<Wallet[]> {
    return this.walletsRepository.find({
      relations: ['user']
    });
  }

  async findOne(id: number): Promise<Wallet> {
    const wallet = await this.walletsRepository.findOne({
      where: { id },
      relations: ['user']
    });
    if (!wallet) {
      throw new NotFoundException(`Wallet with ID ${id} not found`);
    }
    return wallet;
  }

  async findByUserId(userId: number): Promise<Wallet[]> {
    return this.walletsRepository.find({
      where: { user_id: userId },
      relations: ['user']
    });
  }

  async remove(id: number): Promise<boolean> {
    const wallet = await this.findOne(id);
    await this.walletsRepository.remove(wallet);
    return true;
  }
} 