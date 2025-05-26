import Link from 'next/link';
import { ContractsService } from '@/services/contracts.service';
import { UsersService } from '@/services/users.service';
import { Contract, User, UserType } from '@/types';
import ErrorState from '@/components/ErrorState';

// Use server components to fetch data
async function getContracts() {
  try {
    return await ContractsService.getAll();
  } catch (error) {
    console.error('Error fetching contracts:', error);
    return [];
  }
}

async function getDoctors() {
  try {
    const users = await UsersService.getAll();
    return users.filter(user => user.type === UserType.Doctor);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return [];
  }
}

function ContractCard({ contract, doctors }: { contract: Contract; doctors: User[] }) {
  const doctor = doctors.find(d => d.id === contract.doctor_id);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Contract #{contract.id}
        </h3>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
          Active
        </span>
      </div>
      
      <div className="space-y-3">
        <div>
          <p className="text-gray-600">
            <span className="font-medium">Doctor:</span> {doctor ? doctor.name : 'Unknown Doctor'}
          </p>
          {doctor && (
            <p className="text-gray-500 text-sm">{doctor.email}</p>
          )}
        </div>
        
        <div>
          <p className="text-gray-600 font-medium">Contract Address:</p>
          <p className="text-sm font-mono bg-gray-100 p-2 rounded break-all">
            {contract.contract_address}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <span className="font-medium">Doctor ID:</span> {contract.doctor_id}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <span className="font-medium">Created:</span> {new Date(contract.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex space-x-2">
        <Link 
          href={`/contracts/${contract.id}`}
          className="btn btn-primary text-sm"
        >
          View Details
        </Link>
        {doctor && (
          <Link 
            href={`/users/${doctor.id}`}
            className="btn btn-secondary text-sm"
          >
            View Doctor
          </Link>
        )}
        <button className="btn btn-secondary text-sm">
          View on Blockchain
        </button>
      </div>
    </div>
  );
}

export default async function ContractsPage() {
  const [contracts, doctors] = await Promise.all([getContracts(), getDoctors()]);
  
  return (
    <div className="min-h-screen py-8">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Smart Contracts</h1>
          <Link href="/contracts/new" className="btn btn-primary">
            Deploy New Contract
          </Link>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-green-900 mb-2">Contract Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium text-green-800">Total Contracts:</span>
              <span className="ml-2 text-green-900">{contracts.length}</span>
            </div>
            <div>
              <span className="font-medium text-green-800">Active Doctors:</span>
              <span className="ml-2 text-green-900">{doctors.length}</span>
            </div>
            <div>
              <span className="font-medium text-green-800">Unique Addresses:</span>
              <span className="ml-2 text-green-900">{new Set(contracts.map(c => c.contract_address)).size}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            All Contracts
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            Recent
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            By Doctor
          </button>
        </div>
        
        {contracts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contracts.map((contract) => (
              <ContractCard key={contract.id} contract={contract} doctors={doctors} />
            ))}
          </div>
        ) : (
          <ErrorState 
            title="No contracts found" 
            message="There are no smart contracts deployed yet. Deploy a contract for a doctor to get started."
            actionText="Deploy Contract"
            actionLink="/contracts/new"
          />
        )}
      </div>
    </div>
  );
}
