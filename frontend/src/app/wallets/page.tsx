import Link from 'next/link';
import { WalletsService } from '@/services/wallets.service';
import { UsersService } from '@/services/users.service';
import { Wallet, User } from '@/types';
import ErrorState from '@/components/ErrorState';

// Use server components to fetch data
async function getWallets() {
  try {
    return await WalletsService.getAll();
  } catch (error) {
    console.error('Error fetching wallets:', error);
    return [];
  }
}

async function getUsers() {
  try {
    return await UsersService.getAll();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

function WalletCard({ wallet, users }: { wallet: Wallet; users: User[] }) {
  const user = users.find(u => u.id === wallet.user_id);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Wallet #{wallet.id}
        </h3>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
          Active
        </span>
      </div>
      
      <div className="space-y-3">
        <div>
          <p className="text-gray-600">
            <span className="font-medium">Owner:</span> {user ? user.name : 'Unknown User'}
          </p>
          {user && (
            <p className="text-gray-500 text-sm">{user.email}</p>
          )}
        </div>
        
        <div>
          <p className="text-gray-600 font-medium">Wallet Address:</p>
          <p className="text-sm font-mono bg-gray-100 p-2 rounded break-all">
            {wallet.wallet_address}
          </p>
        </div>
        
        <div>
          <p className="text-gray-600">
            <span className="font-medium">User ID:</span> {wallet.user_id}
          </p>
        </div>
      </div>
      
      <div className="mt-4 flex space-x-2">
        <Link 
          href={`/wallets/${wallet.id}`}
          className="btn btn-primary text-sm"
        >
          View Details
        </Link>
        {user && (
          <Link 
            href={`/users/${user.id}`}
            className="btn btn-secondary text-sm"
          >
            View Owner
          </Link>
        )}
      </div>
    </div>
  );
}

export default async function WalletsPage() {
  const [wallets, users] = await Promise.all([getWallets(), getUsers()]);
  
  return (
    <div className="min-h-screen py-8">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Wallets Management</h1>
          <Link href="/wallets/new" className="btn btn-primary">
            Create New Wallet
          </Link>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Wallet Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium text-blue-800">Total Wallets:</span>
              <span className="ml-2 text-blue-900">{wallets.length}</span>
            </div>
            <div>
              <span className="font-medium text-blue-800">Active Users:</span>
              <span className="ml-2 text-blue-900">{users.length}</span>
            </div>
            <div>
              <span className="font-medium text-blue-800">Unique Addresses:</span>
              <span className="ml-2 text-blue-900">{new Set(wallets.map(w => w.wallet_address)).size}</span>
            </div>
          </div>
        </div>
        
        {wallets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wallets.map((wallet) => (
              <WalletCard key={wallet.id} wallet={wallet} users={users} />
            ))}
          </div>
        ) : (
          <ErrorState 
            title="No wallets found" 
            message="There are no wallets in the system yet. Create a wallet for a user to get started."
            actionText="Create Wallet"
            actionLink="/wallets/new"
          />
        )}
      </div>
    </div>
  );
}
