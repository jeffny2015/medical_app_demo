import api from './api';
import { Contract, CreateContractDto } from '../types';

const ENDPOINT = '/contracts';

export const ContractsService = {
  getAll: () => api.get<Contract[]>(ENDPOINT),
  getById: (id: number) => api.get<Contract>(`${ENDPOINT}/${id}`),
  getByDoctorId: (doctorId: number) => api.get<Contract[]>(`${ENDPOINT}/doctor/${doctorId}`),
  create: (contract: CreateContractDto) => api.post<Contract>(ENDPOINT, contract),
  delete: (id: number) => api.delete<boolean>(`${ENDPOINT}/${id}`),
};
