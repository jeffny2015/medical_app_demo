import Link from 'next/link';
import { UsersService } from '@/services/users.service';
import { User, UserType } from '@/types';
import ErrorState from '@/components/ErrorState';

// Use server components to fetch data
async function getUsers() {
  try {
    return await UsersService.getAll();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          user.type === UserType.Doctor 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          {user.type}
        </span>
      </div>
      
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {user.email}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">ID:</span> {user.id}
        </p>
      </div>
      
      <div className="mt-4 flex space-x-2">
        <Link 
          href={`/users/${user.id}`}
          className="btn btn-primary text-sm"
        >
          View Details
        </Link>
        {user.type === UserType.Doctor && (
          <Link 
            href={`/contracts?doctorId=${user.id}`}
            className="btn btn-secondary text-sm"
          >
            View Contracts
          </Link>
        )}
        <Link 
          href={`/wallets?userId=${user.id}`}
          className="btn btn-secondary text-sm"
        >
          View Wallets
        </Link>
      </div>
    </div>
  );
}

export default async function UsersPage() {
  const users = await getUsers();
  
  return (
    <div className="min-h-screen py-8">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Users Management</h1>
          <Link href="/users/new" className="btn btn-primary">
            Add New User
          </Link>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            All Users
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            Doctors Only
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            Patients Only
          </button>
        </div>
        
        {users.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <ErrorState 
            title="No users found" 
            message="There are no users in the system yet. Create some test data to get started."
            actionText="Seed Test Data"
            actionLink="/users/seed"
          />
        )}
      </div>
    </div>
  );
}
