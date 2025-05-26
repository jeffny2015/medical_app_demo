import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { WalletsModule } from './wallets/wallets.module';
import { ContractsModule } from './contracts/contracts.module';
import { User } from './users/entities/user.entity';
import { DoctorsModule } from './doctors/doctors.module';
import { ClinicsModule } from './clinics/clinics.module';
import { MedicalServicesModule } from './medical-services/medical-services.module';
import { PatientsModule } from './patients/patients.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientMedicalServicesModule } from './patient-medical-services/patient-medical-services.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    WalletsModule,
    ContractsModule,
    DoctorsModule,
    ClinicsModule,
    MedicalServicesModule,
    PatientsModule,
    PatientMedicalServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
