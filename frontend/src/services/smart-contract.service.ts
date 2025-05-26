// Smart Contract Service for Doctor Rating
// Contract Address: 0x02eeaafed8e20b5af184e8904c9091f45b3cbc065378a570997976123d685682
// Network: Starknet Sepolia

export interface DoctorRating {
  doctorId: number;
  rating: number;
  comment: string;
  patientAddress: string;
  timestamp: Date;
}

export interface DoctorWallet {
  doctorId: number;
  walletAddress: string;
  contractAddress: string;
  isActive: boolean;
}

export const SmartContractService = {
  // Contract configuration
  CONTRACT_ADDRESS: '0x02eeaafed8e20b5af184e8904c9091f45b3cbc065378a570997976123d685682',
  NETWORK: 'starknet-sepolia',
  EXPLORER_BASE_URL: 'https://sepolia.starkscan.co',

  // Mock data for MVP - in production this would interact with the actual smart contract
  mockDoctorWallets: [
    {
      doctorId: 1,
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
      contractAddress: '0x02eeaafed8e20b5af184e8904c9091f45b3cbc065378a570997976123d685682',
      isActive: true
    },
    {
      doctorId: 2,
      walletAddress: '0xabcdef1234567890abcdef1234567890abcdef12',
      contractAddress: '0x02eeaafed8e20b5af184e8904c9091f45b3cbc065378a570997976123d685682',
      isActive: true
    },
    {
      doctorId: 3,
      walletAddress: '0x567890abcdef1234567890abcdef1234567890ab',
      contractAddress: '0x02eeaafed8e20b5af184e8904c9091f45b3cbc065378a570997976123d685682',
      isActive: true
    }
  ] as DoctorWallet[],

  mockRatings: [
    {
      doctorId: 1,
      rating: 5,
      comment: 'Excellent doctor, very professional and caring.',
      patientAddress: '0xpatient1234567890abcdef',
      timestamp: new Date('2024-01-15')
    },
    {
      doctorId: 1,
      rating: 4,
      comment: 'Good experience, would recommend.',
      patientAddress: '0xpatient2345678901bcdef0',
      timestamp: new Date('2024-01-20')
    },
    {
      doctorId: 2,
      rating: 5,
      comment: 'Outstanding service and expertise.',
      patientAddress: '0xpatient3456789012cdef01',
      timestamp: new Date('2024-01-25')
    }
  ] as DoctorRating[],

  // Get doctor's wallet information
  getDoctorWallet: async (doctorId: number): Promise<DoctorWallet | null> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const wallet = SmartContractService.mockDoctorWallets.find(w => w.doctorId === doctorId);
    return wallet || null;
  },

  // Get doctor's ratings from smart contract
  getDoctorRatings: async (doctorId: number): Promise<DoctorRating[]> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return SmartContractService.mockRatings.filter(r => r.doctorId === doctorId);
  },

  // Submit a new rating (this would interact with the smart contract)
  submitRating: async (doctorId: number, rating: number, comment: string, patientAddress: string): Promise<boolean> => {
    try {
      // Simulate smart contract interaction delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In production, this would call the smart contract
      const newRating: DoctorRating = {
        doctorId,
        rating,
        comment,
        patientAddress,
        timestamp: new Date()
      };
      
      // Add to mock data
      SmartContractService.mockRatings.push(newRating);
      
      console.log('Rating submitted to smart contract:', newRating);
      return true;
    } catch (error) {
      console.error('Error submitting rating:', error);
      return false;
    }
  },

  // Get contract explorer URL
  getContractExplorerUrl: (): string => {
    return `${SmartContractService.EXPLORER_BASE_URL}/contract/${SmartContractService.CONTRACT_ADDRESS}`;
  },

  // Get transaction explorer URL
  getTransactionExplorerUrl: (txHash: string): string => {
    return `${SmartContractService.EXPLORER_BASE_URL}/tx/${txHash}`;
  },

  // Calculate average rating for a doctor
  calculateAverageRating: (ratings: DoctorRating[]): number => {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    return Math.round((sum / ratings.length) * 10) / 10; // Round to 1 decimal place
  }
};
