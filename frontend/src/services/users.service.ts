import api from './api';
import { User, CreateUserDto } from '../types';

const ENDPOINT = '/users';

export const UsersService = {
  getAll: () => api.get<User[]>(ENDPOINT),
  getById: (id: number) => api.get<User>(`${ENDPOINT}/${id}`),
  create: (user: CreateUserDto) => api.post<User>(ENDPOINT, user),
  update: (id: number, user: Partial<CreateUserDto>) => api.put<User>(`${ENDPOINT}/${id}`, user),
  delete: (id: number) => api.delete<boolean>(`${ENDPOINT}/${id}`),
  seedTestData: () => api.post<User[]>(`${ENDPOINT}/seed`, {}),
};
