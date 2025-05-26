import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contract } from './entities/contract.entity';
import { CreateContractDto } from './dto/create-contract.dto';

@Injectable()
export class ContractsService {
  constructor(
    @InjectRepository(Contract)
    private contractsRepository: Repository<Contract>,
  ) {}

  async create(createContractDto: CreateContractDto): Promise<Contract> {
    const existingContract = await this.contractsRepository.findOne({
      where: { contract_address: createContractDto.contract_address }
    });

    if (existingContract) {
      throw new ConflictException('Contract address already exists');
    }

    const contract = this.contractsRepository.create(createContractDto);
    return this.contractsRepository.save(contract);
  }

  async findAll(): Promise<Contract[]> {
    return this.contractsRepository.find({
      relations: ['doctor']
    });
  }

  async findOne(id: number): Promise<Contract> {
    const contract = await this.contractsRepository.findOne({
      where: { id },
      relations: ['doctor']
    });
    if (!contract) {
      throw new NotFoundException(`Contract with ID ${id} not found`);
    }
    return contract;
  }

  async findByDoctorId(doctorId: number): Promise<Contract[]> {
    return this.contractsRepository.find({
      where: { doctor_id: doctorId },
      relations: ['doctor']
    });
  }

  async remove(id: number): Promise<boolean> {
    const contract = await this.findOne(id);
    await this.contractsRepository.remove(contract);
    return true;
  }
} 