import api from './api';
import { Wallet, CreateWalletDto } from '../types';

const ENDPOINT = '/wallets';

export const WalletsService = {
  getAll: () => api.get<Wallet[]>(ENDPOINT),
  getById: (id: number) => api.get<Wallet>(`${ENDPOINT}/${id}`),
  getByUserId: (userId: number) => api.get<Wallet[]>(`${ENDPOINT}/user/${userId}`),
  create: (wallet: CreateWalletDto) => api.post<Wallet>(ENDPOINT, wallet),
  delete: (id: number) => api.delete<boolean>(`${ENDPOINT}/${id}`),
};
