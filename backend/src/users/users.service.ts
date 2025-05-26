import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserType } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CavosProvider } from '../providers/cavos.provider';
import { WalletsService } from '../wallets/wallets.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private cavosProvider: CavosProvider,
    private walletsService: WalletsService,
  ) {}

  // User creation process involves the following steps:
  // 1. Check if the user already exists
  // 2. If the user does not exist, create the user
  // 3. Save the user to the database
  // 4. Create a wallet for the user using Cavos provider
  // 5. Return the user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email }
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const user = this.usersRepository.create(createUserDto);
    const userSaved = await this.usersRepository.save(user);

    // Create a wallet for the user using Cavos provider
    const walletAddress = await this.cavosProvider.createWallet();
    
    // Save the wallet in the database
    await this.walletsService.create({
      user_id: userSaved.id,
      wallet_address: walletAddress
    });

    return userSaved;
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: Partial<CreateUserDto>): Promise<User> {
    const user = await this.findOne(id);
    
    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const existingUser = await this.usersRepository.findOne({
        where: { email: updateUserDto.email }
      });
      if (existingUser) {
        throw new ConflictException('Email already exists');
      }
    }

    Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<boolean> {
    const user = await this.findOne(id);
    await this.usersRepository.remove(user);
    return true;
  }

  async seedTestData(): Promise<User[]> {
    const testUsers: CreateUserDto[] = [
      {
        name: 'Dr. Juan Pérez',
        email: 'juan.perez@hospital.com',
        type: UserType.Doctor
      },
      {
        name: 'Dra. María García',
        email: 'maria.garcia@hospital.com',
        type: UserType.Doctor
      },
      {
        name: 'Carlos Rodríguez',
        email: 'carlos.rodriguez@email.com',
        type: UserType.Patient
      },
      {
        name: 'Ana Martínez',
        email: 'ana.martinez@email.com',
        type: UserType.Patient
      },
      {
        name: 'Dr. Roberto Sánchez',
        email: 'roberto.sanchez@hospital.com',
        type: UserType.Doctor
      }
    ];

    const createdUsers: User[] = [];
  
    for (const userData of testUsers) {
      try {
        const existingUser = await this.usersRepository.findOne({
          where: { email: userData.email }
        });

        if (!existingUser) {
          const user = this.usersRepository.create({
            name: userData.name,
            email: userData.email,
            type: userData.type
          });
          const savedUser = await this.usersRepository.save(user);
          createdUsers.push(savedUser);
        }
      } catch (error) {
        console.error(`Error creating user ${userData.email}:`, error);
      }
  }

    return this.usersRepository.find();
  }
} 