// src/pages/client-portal/UserInfo.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../config/env';

export default function UserInfo() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showEditHint, setShowEditHint] = useState(false); // Controls the edit hint message
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) {
        navigate('/login');
        return;
      }

      try {
        const res = await fetch(`${config.apiUrl}/profile?email=${encodeURIComponent(userEmail)}`);
        const data = await res.json();

        if (!res.ok || !data.user) {
          setError(data.error || 'Profile not found.');
          return;
        }

        setProfile(data.user);
      } catch (err) {
        console.error('UserInfo fetch error:', err);
        setError('Failed to load user information.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-2 border-sky"></div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="p-8 lg:p-12">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
          {error || 'Could not load profile data.'}
        </div>
      </div>
    );
  }

  const formattedDate = profile.dateJoined 
    ? new Date(profile.dateJoined).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Unknown';

  const status = profile.status || 'unknown';
  const statusDisplay = status.charAt(0).toUpperCase() + status.slice(1);
  const statusColorClass = 
    status === 'active' ? 'bg-green-100 text-green-800' :
    status === 'trial' ? 'bg-yellow-100 text-yellow-800' :
    status === 'overdue' ? 'bg-red-100 text-red-800' :
    'bg-cloud text-oat-dark border border-oat/30';

  return (
    <div className="p-8 lg:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-oat-dark mb-10">
        User Information
      </h1>

      <div className="bg-white rounded-2xl shadow-xl border border-sky/20 overflow-hidden max-w-4xl">
        <div className="bg-gradient-to-r from-cloud to-sky/10 p-8 border-b border-sky/20">
          <h2 className="text-2xl font-bold text-sky-dark">Account Details</h2>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-oat-dark mb-2 uppercase tracking-wide">
                Full Name
              </label>
              <p className="text-xl font-medium text-gray-800">{profile.name || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-oat-dark mb-2 uppercase tracking-wide">
                Email
              </label>
              <p className="text-xl font-medium text-sky-dark">{profile.email}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-oat-dark mb-2 uppercase tracking-wide">
                Phone
              </label>
              <p className="text-xl font-medium text-sky-dark">{profile.phone || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-oat-dark mb-2 uppercase tracking-wide">
                Joined
              </label>
              <p className="text-xl font-medium text-gray-800">{formattedDate}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 border-t border-sky/10 pt-8">
            <div>
              <label className="block text-sm font-semibold text-oat-dark mb-2 uppercase tracking-wide">
                Company Name
              </label>
              <p className="text-xl font-medium text-gray-800">{profile.companyName || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-oat-dark mb-2 uppercase tracking-wide">
                Industry
              </label>
              <p className="text-xl font-medium text-gray-800">{profile.industry || 'N/A'}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-sky/10">
            <label className="block text-sm font-semibold text-oat-dark mb-3 uppercase tracking-wide">
              Account Status
            </label>
            <span className={`inline-block px-5 py-2 rounded-full font-bold shadow-sm ${statusColorClass}`}>
              {statusDisplay}
            </span>
          </div>
        </div>
      </div>

      {/* Edit Profile Section */}
      <div className="mt-12 max-w-4xl flex flex-col items-end">
        <button 
          onClick={() => setShowEditHint(!showEditHint)}
          className="px-8 py-3 bg-sky text-white rounded-xl font-semibold hover:bg-sky-dark transition transform hover:scale-105 shadow-md flex items-center gap-2"
        >
          {showEditHint ? 'Close' : 'Edit Profile ✎'}
        </button>

        {/* The Hint Message (Appears when button is clicked) */}
        {showEditHint && (
          <div className="mt-4 p-5 bg-cloud border border-oat/30 rounded-xl shadow-lg max-w-sm text-right animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-sky-dark font-bold mb-1">Need to make changes?</p>
            <p className="text-oat-dark text-sm leading-relaxed">
              To keep your account secure, profile updates are currently managed internally. Please contact your web developer or account manager to update your information.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}