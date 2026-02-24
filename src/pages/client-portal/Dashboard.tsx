// src/pages/client-portal/Dashboard.tsx
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { config } from '../../config/env';

export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) {
        navigate('/login');
        return;
      }

      try {
        // Replace getClientProfile with a fetch call to your backend
        const res = await fetch(`${config.apiUrl}/profile?email=${encodeURIComponent(userEmail)}`);
        const data = await res.json();

        if (!res.ok || !data.user) {
          setError(data.error || 'Profile not found. Please log in again.');
          localStorage.removeItem('userEmail'); // Clean up bad session
          localStorage.removeItem('isLoggedIn');
          navigate('/login');
          return;
        }

        console.log('Raw profile from Backend:', data.user);
        setProfile(data.user);

      } catch (err: any) {
        console.error('Dashboard fetch error:', err);
        setError('Failed to load dashboard data. Please check your connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-2 border-sky"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Error</h1>
        <p className="text-xl text-gray-700 mb-8">{error}</p>
        <button
          onClick={() => navigate('/login')}
          className="px-8 py-4 bg-sky text-white rounded-xl font-semibold hover:bg-sky-dark transition transform hover:scale-105 shadow-lg"
        >
          Back to Login
        </button>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-oat-dark mb-6">No Profile Found</h1>
        <p className="text-xl text-gray-700 mb-8">Please log in again.</p>
        <button
          onClick={() => navigate('/login')}
          className="px-8 py-4 bg-sky text-white rounded-xl font-semibold hover:bg-sky-dark transition transform hover:scale-105 shadow-lg"
        >
          Log In
        </button>
      </div>
    );
  }

  // Safely convert token values (protect against missing, null, or non-numeric data)
  const tokensTotal = Number(profile.tokensTotal) || 0;
  const tokensUsed = Number(profile.tokensUsedThisMonth) || 0;
  const tokensRemaining = tokensTotal - tokensUsed;
  const usagePercent = tokensTotal > 0 ? Math.min(Math.round((tokensUsed / tokensTotal) * 100), 100) : 0;

  // Status display with fallback and color coding
  const status = profile.status || 'unknown';
  const statusDisplay = status.charAt(0).toUpperCase() + status.slice(1);
  const statusColorClass = 
    status === 'active' ? 'bg-green-100 text-green-800' :
    status === 'trial' ? 'bg-yellow-100 text-yellow-800' :
    status === 'overdue' ? 'bg-red-100 text-red-800' :
    'bg-gray-100 text-gray-800';

  return (
    <div className="p-8 lg:p-12 bg-white min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-oat-dark mb-10"
      >
        Welcome back, {profile.name || 'User'}
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        {/* Profile Summary Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-cloud/60 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-sky/20"
        >
          <h2 className="text-3xl font-bold text-sky-dark mb-8">Your Profile</h2>
          <dl className="space-y-6 text-lg">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <dt className="text-gray-700 font-medium">Email</dt>
              <dd className="font-semibold text-gray-900">{profile.email || 'Not set'}</dd>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <dt className="text-gray-700 font-medium">Full Name</dt>
              <dd className="font-semibold text-gray-900">{profile.name || 'Not set'}</dd>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <dt className="text-gray-700 font-medium">Phone</dt>
              <dd className="font-semibold text-gray-900">{profile.phone || 'Not provided'}</dd>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <dt className="text-gray-700 font-medium">Company</dt>
              <dd className="font-semibold text-gray-900">{profile.companyName || 'N/A'}</dd>
            </div>
            <div className="flex justify-between items-center">
              <dt className="text-gray-700 font-medium">Status</dt>
              <dd>
                <span className={`inline-block px-5 py-2 rounded-full text-base font-medium ${statusColorClass}`}>
                  {statusDisplay}
                </span>
              </dd>
            </div>
          </dl>
        </motion.div>

        {/* Token Balance & Usage Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-10 shadow-lg border border-oat/20 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold text-oat-dark mb-8">Token Balance</h2>
            <div className="text-center mb-10">
              <p className="text-8xl font-black text-sky-dark">{tokensRemaining.toLocaleString()}</p>
              <p className="text-2xl text-gray-600 mt-3">tokens remaining</p>
            </div>

            <div className="bg-gray-100 rounded-full h-6 mb-6 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${usagePercent}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="bg-gradient-to-r from-sky to-sky-dark h-full"
              />
            </div>

            <p className="text-center text-gray-700 text-lg">
              <span className="font-semibold">{tokensUsed.toLocaleString()}</span> used of{' '}
              <span className="font-semibold">{tokensTotal.toLocaleString()}</span> 
              {' '}({usagePercent}%)
            </p>
          </div>

          <div className="mt-10">
            <button className="w-full bg-oat text-cloud py-5 rounded-xl font-bold text-lg hover:bg-oat-dark transition transform hover:scale-[1.02] shadow-lg">
              Purchase More Tokens
            </button>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-3 gap-8 mt-12"
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold text-sky mb-4">View Customers</h3>
          <p className="text-gray-700 mb-6">Manage your customer list and details.</p>
          <Link to="/client-portal/customers" className="text-sky hover:text-sky-dark font-medium">
            Go to Customers →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold text-oat mb-4">Manage Coupons</h3>
          <p className="text-gray-700 mb-6">Create and track promotional codes for your clients.</p>
          <Link to="/client-portal/coupons" className="text-oat hover:text-oat-dark font-medium">
            Go to Coupons →
          </Link>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold text-sky-dark mb-4">Recent Leads</h3>
          <p className="text-gray-700 mb-6">See the latest leads generated from AI traffic.</p>
          <Link to="/client-portal/leads" className="text-sky-dark hover:text-sky font-medium">
            View Leads →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}