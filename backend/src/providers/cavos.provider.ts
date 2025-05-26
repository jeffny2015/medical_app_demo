import { Injectable, HttpException, Logger } from '@nestjs/common';
import axios, { AxiosError } from 'axios';

@Injectable()
export class CavosProvider {
  private readonly logger = new Logger(CavosProvider.name);
  private readonly CAVOS_API_URL = 'http://cavos-wallet-provider.vercel.app/api/v1/external/deploy';
  private readonly BEARER_TOKEN = 'cavos-MtQlWj5XtBvlHvF32zKf2PA5eMMmIZ';
  private readonly HASH_SECRET = 'hs-5LsI6lx6i9a5J05nCScK81LLwP0RPM';
  private readonly NETWORK = 'sepolia';
  private readonly MAX_RETRIES = 3;
  private readonly TIMEOUT = 10000; // 10 seconds

  async createWallet(): Promise<string> {
    let lastError: Error;
    
    for (let attempt = 1; attempt <= this.MAX_RETRIES; attempt++) {
      try {
        this.logger.debug(`Attempt ${attempt} to create wallet`);
        
        const response = await axios.post(this.CAVOS_API_URL, 
          { network: this.NETWORK },
          {
            headers: {
              'Authorization': `Bearer ${this.BEARER_TOKEN}`,
              'hash-secret': this.HASH_SECRET
            },
            timeout: this.TIMEOUT
          }
        );
        
        this.logger.debug(`Wallet created successfully: ${response.data.address}`);
        return response.data.address;
      } catch (error) {
        lastError = error;
        
        if (error instanceof AxiosError) {
          this.logger.error(`API Error (Attempt ${attempt}/${this.MAX_RETRIES}): ${error.message}`);
          
          if (error.response) {
            this.logger.error(`Status: ${error.response.status}, Data: ${JSON.stringify(error.response.data)}`);
          }
          
          // Si es un error de timeout o de red, continuamos con el siguiente intento
          if (error.code === 'ECONNABORTED' || error.code === 'ECONNREFUSED') {
            continue;
          }
          
          // Si es un error de autenticación, no tiene sentido reintentar
          if (error.response?.status === 401 || error.response?.status === 403) {
            throw new HttpException('Authentication failed with Cavos API', 500);
          }
        }
        
        // Si no es un error de Axios, lo lanzamos inmediatamente
        if (!(error instanceof AxiosError)) {
          throw error;
        }
      }
    }
    
    // Si llegamos aquí, todos los intentos fallaron
    this.logger.error(`All ${this.MAX_RETRIES} attempts to create wallet failed`);
    throw new HttpException('Failed to create wallet after multiple attempts', 500);
  }
} 