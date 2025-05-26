import Link from 'next/link';
import Image from 'next/image';
import { MedicalServicesService } from '@/services/medical-services.service';
import { MedicalService } from '@/types';
import MedicalServiceCard from '@/components/MedicalServiceCard';
import ErrorState from '@/components/ErrorState';

// Use server components to fetch data
async function getMedicalServices() {
  try {
    return await MedicalServicesService.getAll();
  } catch (error) {
    console.error('Error fetching medical services:', error);
    return [];
  }
}

export default async function ProductsPage() {
  const medicalServices = await getMedicalServices();
  
  // Get unique categories from medical services
  const categories = Array.from(new Set(medicalServices.map(service => service.category)));
  return (
    <div className="min-h-screen py-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Medical Products & Procedures</h1>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            All Categories
          </button>
          {categories.map(category => (
            <button 
              key={category} 
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
        
        {medicalServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalServices.map((service) => (
              <MedicalServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <ErrorState 
            title="No medical services found" 
            message="We couldn't find any medical services at the moment. Please try again later."
            actionText="Refresh page"
            actionLink="/products"
          />
        )}
      </div>
    </div>
  );
}
