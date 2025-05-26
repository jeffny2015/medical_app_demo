'use client';

import { useState, useEffect } from 'react';
import { SmartContractService, DoctorRating, DoctorWallet } from '@/services/smart-contract.service';

interface DoctorRatingComponentProps {
  doctorId: number;
  doctorName: string;
}

export default function DoctorRatingComponent({ doctorId, doctorName }: DoctorRatingComponentProps) {
  const [ratings, setRatings] = useState<DoctorRating[]>([]);
  const [wallet, setWallet] = useState<DoctorWallet | null>(null);
  const [loading, setLoading] = useState(true);
  const [showRatingForm, setShowRatingForm] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [patientWallet, setPatientWallet] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadDoctorData();
  }, [doctorId]);

  const loadDoctorData = async () => {
    setLoading(true);
    try {
      const [ratingsData, walletData] = await Promise.all([
        SmartContractService.getDoctorRatings(doctorId),
        SmartContractService.getDoctorWallet(doctorId)
      ]);
      setRatings(ratingsData);
      setWallet(walletData);
    } catch (error) {
      console.error('Error loading doctor data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitRating = async () => {
    if (!patientWallet.trim()) {
      alert('Please enter your wallet address');
      return;
    }

    setSubmitting(true);
    try {
      const success = await SmartContractService.submitRating(
        doctorId,
        newRating,
        newComment,
        patientWallet
      );

      if (success) {
        alert('Rating submitted successfully to the blockchain!');
        setShowRatingForm(false);
        setNewComment('');
        setPatientWallet('');
        setNewRating(5);
        // Reload ratings
        await loadDoctorData();
      } else {
        alert('Failed to submit rating. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
      alert('Error submitting rating. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const averageRating = SmartContractService.calculateAverageRating(ratings);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Wallet Information */}
      {wallet && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <span className="text-2xl mr-2">💳</span>
            Doctor's Blockchain Wallet
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-700">Wallet Address:</p>
              <p className="text-sm font-mono bg-white p-2 rounded border break-all">
                {wallet.walletAddress}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Smart Contract:</p>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-mono bg-white p-2 rounded border break-all flex-1">
                  {wallet.contractAddress}
                </p>
                <a
                  href={SmartContractService.getContractExplorerUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-xs"
                >
                  View on Explorer
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                wallet.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {wallet.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Rating Summary */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-bold text-lg">Patient Ratings & Reviews</h3>
          <button
            onClick={() => setShowRatingForm(true)}
            className="btn btn-primary"
          >
            Rate Doctor
          </button>
        </div>

        {ratings.length > 0 ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{averageRating}</div>
                <div className="text-yellow-500 text-xl">
                  {'★'.repeat(Math.floor(averageRating))}
                  {'☆'.repeat(5 - Math.floor(averageRating))}
                </div>
                <div className="text-sm text-gray-600">{ratings.length} reviews</div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">
                  Based on {ratings.length} blockchain-verified review{ratings.length !== 1 ? 's' : ''}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  All ratings are stored on Starknet blockchain for transparency
                </p>
              </div>
            </div>

            {/* Individual Ratings */}
            <div className="space-y-3">
              {ratings.map((rating, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <div className="text-yellow-500">
                        {'★'.repeat(rating.rating)}
                        {'☆'.repeat(5 - rating.rating)}
                      </div>
                      <span className="text-sm font-medium">{rating.rating}/5</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {rating.timestamp.toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-1">{rating.comment}</p>
                  <p className="text-xs text-gray-500 font-mono">
                    From: {rating.patientAddress.substring(0, 10)}...{rating.patientAddress.substring(rating.patientAddress.length - 8)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-400 text-4xl mb-4">⭐</div>
            <p className="text-gray-600">No ratings yet. Be the first to rate {doctorName}!</p>
          </div>
        )}
      </div>

      {/* Rating Form Modal */}
      {showRatingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="font-bold text-lg mb-4">Rate {doctorName}</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Rating
                </label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setNewRating(star)}
                      className={`text-2xl ${
                        star <= newRating ? 'text-yellow-500' : 'text-gray-300'
                      } hover:text-yellow-500 transition-colors`}
                    >
                      ★
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{newRating}/5</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Share your experience with this doctor..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Wallet Address
                </label>
                <input
                  type="text"
                  value={patientWallet}
                  onChange={(e) => setPatientWallet(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                  placeholder="0x..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Required for blockchain verification
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowRatingForm(false)}
                className="btn btn-secondary"
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitRating}
                className="btn btn-primary"
                disabled={submitting || !patientWallet.trim()}
              >
                {submitting ? 'Submitting...' : 'Submit Rating'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
